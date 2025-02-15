const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
app.use(express.json()); // Permite o uso de JSON nas requisições
app.use("/api/users", userRoutes);

module.exports = app;
