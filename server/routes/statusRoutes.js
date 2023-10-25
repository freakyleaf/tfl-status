import express from 'express';

import createServices from '../utils/createServices.js';
import getStatus from '../utils/getStatus.js';
import sortServices from '../utils/sortServices.js';

const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const data = await getStatus();
    const services = createServices(data);
    const sorted = sortServices(services);

    res.json(sorted);
    res.status(200);
  } catch (error) {
    res.json(error);
    res.status(503);
  }
});

export default router;
