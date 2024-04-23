import { Sequelize } from "sequelize";

const databaseUrl = process.env.DATABASE_URL || "";

const sequelize = new Sequelize(databaseUrl, {
  define: {
    underscored: true,
  },
});

export { sequelize };
