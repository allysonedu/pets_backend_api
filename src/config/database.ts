import { Sequelize } from "sequelize";
// passo 2
const sequelize = new Sequelize({
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  dialect: "postgres",
  port: 5432,
});

export default sequelize;
