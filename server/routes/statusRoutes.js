import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import envPath from '../constants/envPath.js';
import serviceModes from '../constants/serviceModes.js';

import createServices from '../utils/createServices.js';
import sortServices from '../utils/sortServices.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
} = process.env;

const router = express.Router();

router.get('/', async(req, res) => {
  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/line/mode/${serviceModes.join(',')}/status?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
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
