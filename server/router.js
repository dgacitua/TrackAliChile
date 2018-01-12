import express from 'express';

import TrackerApi from './api';

export default function setRoutes(app) {
  const router = express.Router();

  // API definitions
  router.get('/ping', TrackerApi.ping);
  router.get('/cainiao/:code', TrackerApi.queryCainiao);
  router.get('/correos-chile/:code', TrackerApi.queryCorreosChile);

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/api', router);
}