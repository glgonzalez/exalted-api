import { Router } from 'express';
import { abilitiesController } from '../controllers';

export const abilityRoutes = (Abilities) => {
  const abilitiesRouter = Router();
  const controller = abilitiesController(Abilities);

  abilitiesRouter.route('/').get(controller.get);

  return abilitiesRouter;
};
