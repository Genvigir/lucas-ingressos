const express = require("express");
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes"); // Importando rotas de ingressos

const app = express();
app.use(express.json()); // Permite o uso de JSON nas requisições

// Definição das rotas
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);

module.exports = app;
