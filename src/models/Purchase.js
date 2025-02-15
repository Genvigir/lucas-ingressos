const { DataTypes } = require("sequelize");
const sequelize = require("../database/config");
const User = require("./User");
const Ticket = require("./Ticket");

const Purchase = sequelize.define("Purchase", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: User,
      key: "id",
    },
  },
  ticketId: {
    type: DataTypes.UUID,
    allowNull: false,
    references: {
      model: Ticket,
      key: "id",
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

User.hasMany(Purchase, { foreignKey: "userId" });
Purchase.belongsTo(User, { foreignKey: "userId" });

Ticket.hasMany(Purchase, { foreignKey: "ticketId" });
Purchase.belongsTo(Ticket, { foreignKey: "ticketId" });

module.exports = Purchase;
