import express, { Express } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connect from './utils/database';
import routes from './routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.listen(port, async () => {
  await connect();
  routes(app);
  console.log(`[server]: Server is running at https://localhost:${port}`);
});