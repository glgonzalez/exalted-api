import { Express, Request, Response } from 'express';
import authenticationRouter from "./authentication";
import healthCheckRouter from "./health-check";
import usersRouter from "./users";
import exaltTypeRouter from './exalt-type';
import attributesRouter from './attributes';

const routes = (app: Express) => {
  app.get('/', (req: Request, res: Response) => res.status(200).send('Welcome to the unofficial exalted api'));
  app.use('/healthcheck', healthCheckRouter);
  app.use('/users', usersRouter);
  app.use('/authenticate', authenticationRouter);
  app.use('/exalt-types', exaltTypeRouter);
  app.use('/attributes', attributesRouter)
};

export default routes;