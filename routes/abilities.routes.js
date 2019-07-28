/* eslint-disable no-param-reassign */
const express = require('express');
const abilitiesController = require('../controllers/abilities.controller');

function routes(Abilities) {
  const abilitiesRouter = express.Router();
  const controller = abilitiesController(Abilities);

  abilitiesRouter.route('/').get(controller.get);

  return abilitiesRouter;
}

module.exports = routes;
