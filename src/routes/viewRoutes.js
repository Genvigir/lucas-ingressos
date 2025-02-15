const express = require("express");
const Ticket = require("../models/Ticket");

const router = express.Router();

// Página inicial
router.get("/", (req, res) => {
  res.render("home");
});

// Página de ingressos
router.get("/tickets", async (req, res) => {
  const tickets = await Ticket.findAll();
  res.render("tickets", { tickets });
});

// Página de login
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
