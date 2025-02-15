const app = require("./app");
const sequelize = require("./database/config");
const User = require("./models/User");
const Ticket = require("./models/Ticket");
const Purchase = require("./models/Purchase");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();
    console.log("Banco de dados sincronizado!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
}

startServer();
