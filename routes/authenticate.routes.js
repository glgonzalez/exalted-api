import { Router } from 'express';
import { authenticateController } from '../controllers';

export const authenticateRoutes = (Users) => {
  const authenticateRouter = Router();
  const controller = authenticateController(Users);

  authenticateRouter.route('/').post(controller.post);

  return authenticateRouter;
};
