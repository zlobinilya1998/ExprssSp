import { Sequelize } from 'sequelize';
import 'dotenv/config';
const env = process.env;


const db: string = env.DB_DATABASE || 'db'
const user: string = env.DB_USER || 'postgres'
const pass: string = env.DB_PASS || 'postgres'

export const sequelize = new Sequelize(db, user, pass, {
    host: env.DB_HOST,
    dialect: 'postgres',
  });

  