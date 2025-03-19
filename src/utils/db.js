import { Sequelize } from 'sequelize';
import 'dotenv/config';

export const client = new Sequelize({
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  dialect: 'postgres',
});
