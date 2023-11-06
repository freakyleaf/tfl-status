import apicache from 'apicache';
import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import envPath from '../constants/envPath.js';

import createStation from '../utils/createStation.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
} = process.env;

const router = express.Router();
const cache = apicache.middleware;

router.get('/:id', cache('60 minutes'), async(req, res, next) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/StopPoint/${id}?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    const station = await createStation({ data, id });

    res.json(station);
    res.status(200);
  } catch (error) {
    next(error);
    res.status(503);
  }
});

export default router;
