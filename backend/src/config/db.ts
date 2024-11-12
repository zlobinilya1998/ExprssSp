import { Sequelize } from 'sequelize';
import 'dotenv/config';
const env = process.env;


const db: string = env.DB_DATABASE || 'db'
const user: string = env.DB_USER || 'postgres'
const pass: string = env.DB_PASS || 'postgres'
const host: string = env.DB_HOST || 'localhost'
const port: any = env.DB_PORT;
export const sequelize = new Sequelize(db, user, pass, {
    host,
    port: port || 5432,
    dialect: 'postgres',
  });

  