import { Router } from 'express';
import { authenticateController } from './authenticate.controller';

export const authenticateRoutes = (Users) => {
  const authenticateRouter = Router();
  const controller = authenticateController(Users);

  authenticateRouter.route('/').post(controller.post);

  return authenticateRouter;
};
