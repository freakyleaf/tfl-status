import apicache from 'apicache';
import express from 'express';

import createServices from '../utils/createServices.js';
import getServices from '../utils/getServices.js';

import sortServices from '../utils/sortServices.js';

const router = express.Router();
const cache = apicache.middleware;

router.get('/:group', cache('5 minutes'), async(req, res, next) => {
  const { group } = req.params;

  try {
    const { data, serviceModes } = await getServices(group);
    const services = createServices(data);
    const sorted = sortServices({ group, serviceModes, services });

    res.json(sorted);
    res.status(200);
  } catch (error) {
    next(error);
    res.status(503);
  }
});

export default router;
