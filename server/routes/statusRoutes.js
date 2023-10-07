import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import envPath from '../constants/envPath.js';

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
    const { data } = await axios.get(`https://api.tfl.gov.uk/line/mode/bus,dlr,elizabeth-line,national-rail,overground,tram,tube/status?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    res.json(data);
    res.status(200);
  } catch (error) {
    res.json(error);
    res.status(503);
  }
});

export default router;
