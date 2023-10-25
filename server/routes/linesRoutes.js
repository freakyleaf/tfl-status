import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import envPath from '../constants/envPath.js';

import createLine from '../utils/createLine.js';

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
    const { data } = await axios.get(`https://api.tfl.gov.uk/line/${id}/route/sequence/inbound?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    const line = await createLine({ data, id });

    res.json(line);
    res.status(200);
  } catch (error) {
    res.json(error);
    res.status(503);
  }
});

export default router;
