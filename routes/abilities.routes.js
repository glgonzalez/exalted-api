import { Router } from 'express';
import abilitiesController from '../controllers/abilities.controller';

export default function routes(Abilities) {
  const abilitiesRouter = Router();
  const controller = abilitiesController(Abilities);

  abilitiesRouter.route('/').get(controller.get);

  return abilitiesRouter;
}
