const express = require("express");
const Ticket = require("../models/Ticket");
const { verifyToken, isAdmin } = require("../utils/authMiddleware");

const router = express.Router();

// Criar um novo tipo de ingresso (apenas para admin)
router.post("/", verifyToken, isAdmin, async (req, res) => {
  try {
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
      return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
    }

    const ticket = await Ticket.create({ name, price, quantity });

    res.status(201).json({ message: "Ingresso criado com sucesso!", ticket });
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar ingresso" });
  }
});

// Listar todos os ingressos disponíveis (público)
router.get("/", async (req, res) => {
  try {
    const tickets = await Ticket.findAll();
    res.status(200).json(tickets);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar ingressos" });
  }
});

// Atualizar um tipo de ingresso por ID (apenas para admin)
router.put("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, quantity } = req.body;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      return res.status(404).json({ error: "Ingresso não encontrado!" });
    }

    ticket.name = name || ticket.name;
    ticket.price = price || ticket.price;
    ticket.quantity = quantity || ticket.quantity;

    await ticket.save();

    res.status(200).json({ message: "Ingresso atualizado com sucesso!", ticket });
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar ingresso" });
  }
});

// Deletar um ingresso por ID (apenas para admin)
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const ticket = await Ticket.findByPk(id);
    if (!ticket) {
      return res.status(404).json({ error: "Ingresso não encontrado!" });
    }

    await ticket.destroy();

    res.status(200).json({ message: "Ingresso removido com sucesso!" });
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar ingresso" });
  }
});

module.exports = router;
