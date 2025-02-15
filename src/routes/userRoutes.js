const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// Rota de registro de usuário
router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Verifica se o e-mail já existe
    const userExists = await User.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ error: "E-mail já cadastrado!" });
    }

    // Criptografa a senha
    const hashedPassword = await bcrypt.hash(password, 10);

    // Cria o usuário no banco
    const user = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: "Usuário registrado com sucesso!", user });
  } catch (error) {
    res.status(500).json({ error: "Erro ao registrar usuário" });
  }
});

// Rota de login de usuário
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verifica se o usuário existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: "E-mail ou senha inválidos!" });
    }

    // Verifica se a senha está correta
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ error: "E-mail ou senha inválidos!" });
    }

    // Gera um token JWT
    const token = jwt.sign({ id: user.id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login realizado com sucesso!", token });
  } catch (error) {
    res.status(500).json({ error: "Erro ao realizar login" });
  }
});

module.exports = router;
