const { Router } = require('express');
const identityControllers = require('../controllers/identityControllers');

const identityRouter = Router();

identityRouter.post('/signup', identityControllers.signup);

module.exports = identityRouter;
