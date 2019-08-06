import { Router } from 'express';
import { attributesController } from './attributes.controller';

export const attributeRoutes = (Attributes) => {
  const attributesRouter = Router();
  const controller = attributesController(Attributes);

  attributesRouter.route('/').get(controller.get);

  return attributesRouter;
};
