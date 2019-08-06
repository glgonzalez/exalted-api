import { Router } from 'express';
import { abilitiesController } from './abilities.controller';

export const abilityRoutes = (Abilities) => {
  const abilitiesRouter = Router();
  const controller = abilitiesController(Abilities);

  abilitiesRouter.route('/').get(controller.get);

  return abilitiesRouter;
};
