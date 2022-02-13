const express = require("express");
const { createSession, playSession } = require('../controllers/session')

const sessionRouter = express.Router();

sessionRouter.post('/sessions/:id/play', playSession);
sessionRouter.post('/sessions', createSession);

module.exports = sessionRouter;