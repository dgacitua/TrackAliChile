import express from 'express';

import TrackerApi from './api';

export default function setRoutes(app) {
  const router = express.Router();

  // API definitions
  router.get('/ping', TrackerApi.ping);
  router.get('/cainiao/:code', TrackerApi.singleQueryCainiao);
  router.get('/correos-chile/:code', TrackerApi.singleQueryCorreosChile);
  router.post('/cainiao', TrackerApi.multipleQueryCainiao);
  router.post('/correos-chile', TrackerApi.multipleQueryCorreosChile);

  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use('/api', router);
}