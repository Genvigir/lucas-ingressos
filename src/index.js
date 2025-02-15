const app = require("./app");
const sequelize = require("./database/config");

require("dotenv").config();

const PORT = process.env.PORT || 3000;

// Função para sincronizar o banco antes de iniciar o servidor
async function startServer() {
  try {
    await sequelize.sync(); // Remova { force: true } para não apagar os dados a cada execução
    console.log("Banco de dados sincronizado!");

    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  } catch (error) {
    console.error("Erro ao iniciar o servidor:", error);
  }
}

startServer();
