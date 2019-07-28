/* eslint-disable no-param-reassign */
const express = require('express');
const attributesController = require('../controllers/attributes.controller');

function routes(Attributes) {
  const attributesRouter = express.Router();
  const controller = attributesController(Attributes);

  attributesRouter.route('/').get(controller.get);

  return attributesRouter;
}

module.exports = routes;
