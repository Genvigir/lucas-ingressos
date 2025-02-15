const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const ticketRoutes = require("./routes/ticketRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const viewRoutes = require("./routes/viewRoutes");

const app = express();
app.use(express.json());

app.engine("mustache", mustacheExpress());
app.set("view engine", "mustache");
app.set("views", path.join(__dirname, "views"));

app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/purchases", purchaseRoutes);
app.use("/", viewRoutes);

module.exports = app;
