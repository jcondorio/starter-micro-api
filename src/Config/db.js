
import { Sequelize } from 'sequelize';
import { config as dotenvConfig } from 'dotenv';


dotenvConfig();

const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  pool: {
    max: 1000, 
    min: 0, 
    acquire: 30000, 
    idle: 10000, 
  },
});

export default sequelize;