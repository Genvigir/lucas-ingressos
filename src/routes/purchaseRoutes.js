const express = require("express");
const Purchase = require("../models/Purchase");
const Ticket = require("../models/Ticket");
const User = require("../models/User");
const { verifyToken } = require("../utils/authMiddleware");

const router = express.Router();

// Criar uma compra de ingresso
router.post("/", verifyToken, async (req, res) => {
  try {
    const { ticketId, quantity } = req.body;
    const userId = req.user.id; // Obtém o ID do usuário logado

    const ticket = await Ticket.findByPk(ticketId);
    if (!ticket) {
      return res.status(404).json({ error: "Ingresso não encontrado!" });
    }

    if (ticket.quantity < quantity) {
      return res.status(400).json({ error: "Estoque insuficiente!" });
    }

    // Criar a compra
    const purchase = await Purchase.create({ userId, ticketId, quantity });

    // Atualizar estoque de ingressos
    ticket.quantity -= quantity;
    await ticket.save();

    res.status(201).json({ message: "Compra realizada com sucesso!", purchase });
  } catch (error) {
    res.status(500).json({ error: "Erro ao processar compra" });
  }
});

// Listar compras do usuário logado
router.get("/", verifyToken, async (req, res) => {
  try {
    const userId = req.user.id;
    const purchases = await Purchase.findAll({
      where: { userId },
      include: [{ model: Ticket }],
    });

    res.status(200).json(purchases);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar compras" });
  }
});

module.exports = router;
