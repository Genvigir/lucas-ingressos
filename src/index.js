const sequelize = require("./database/config");
const User = require("./models/User");

async function syncDatabase() {
  try {
    await sequelize.sync({ force: true }); // 'force: true' recria as tabelas a cada execução (somente para desenvolvimento)
    console.log("Banco de dados sincronizado!");
  } catch (error) {
    console.error("Erro ao sincronizar banco de dados:", error);
  } finally {
    process.exit(); // Fecha o processo após a sincronização
  }
}

syncDatabase();
