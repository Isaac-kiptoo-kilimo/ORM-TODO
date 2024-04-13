import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

const {DB_HOST,DB_USER,DB_PASSWORD,DB_NAME,DB_PORT}=process.env;

const sequelize = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD,{
    HOST: DB_HOST,
    dialect:"postgres",
    port: DB_PORT,
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const testDbConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Connection has been established successfully.");
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };

  export { sequelize, testDbConnection };
