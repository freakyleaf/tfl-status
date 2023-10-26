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

router.get('/:id', async(req, res) => {
  const { id } = req.params;

  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/StopPoint/${id}?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    const station = await createStation({ data, id });

    res.json(station);
    res.status(200);
  } catch (error) {
    res.json(error);
    res.status(503);
  }
});

export default router;
