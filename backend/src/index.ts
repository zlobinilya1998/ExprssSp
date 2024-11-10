import 'module-alias/register'; 
import express from 'express';
import expressAsyncErrors from 'express-async-errors';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppController from '@/controller/AppController';
import DefaultResultMiddleware from '@/middleware/DefaultResultMiddleware';
import ErrorMiddleware from '@/middleware/ErrorMiddleware';
import {sequelize} from '@/config/db';
import { defineAssociations } from './model';
const app = express();
const port = 3000;

app.use(cors())
app.use(bodyParser.json());
app.use(DefaultResultMiddleware);
app.use(AppController)
app.use(ErrorMiddleware);

sequelize.sync({alter: true}).then(() => {
  console.log('Database synced');
  console.log(expressAsyncErrors);
  defineAssociations();
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}).catch(e => {
  console.error(e)
})
