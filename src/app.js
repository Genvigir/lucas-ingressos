const express = require("express");
const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes"); // Importando rotas de compras

const app = express();
app.use(express.json()); // Permite o uso de JSON nas requisições

// Definição das rotas
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/purchases", purchaseRoutes); // Rota de compras

module.exports = app;
