import { Router } from 'express';
import attributesController from '../controllers/attributes.controller';

export default function routes(Attributes) {
  const attributesRouter = Router();
  const controller = attributesController(Attributes);

  attributesRouter.route('/').get(controller.get);

  return attributesRouter;
}
