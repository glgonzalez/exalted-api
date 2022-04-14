import { Express, Request, Response } from 'express';
import authenticationRouter from "./authentication";
import healthCheckRouter from "./health-check";
import usersRouter from "./users";

const routes = (app: Express) => {
  app.get('/', (req: Request, res: Response) => res.status(200).send('Welcome to the unofficial exalted api'));
  app.use('/healthcheck', healthCheckRouter);
  app.use('/users', usersRouter);
  app.use('/authenticate', authenticationRouter);
};

export default routes;