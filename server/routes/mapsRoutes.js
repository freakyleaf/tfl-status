import apicache from 'apicache';
import axios from 'axios';
import dotenv from 'dotenv';
import express from 'express';

import envPath from '../constants/envPath.js';

import createMaps from '../utils/createMaps.js';
import enrichMaps from '../utils/enrichMaps.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
  PUBLIC_MAP_ENRICHMENT,
} = process.env;

const router = express.Router();
const cache = apicache.middleware;

router.get('/:id', cache('15 minutes'), async(req, res, next) => {
  const { id } = req.params;
  const { reasons } = req.query;

  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/line/${id}/route/sequence/inbound?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    const maps = await createMaps({
      data,
      id,
      reasons: reasons ? JSON.parse(reasons) : null,
    });
    const mapsEnriched = (PUBLIC_MAP_ENRICHMENT === 'true' && !!reasons?.length) ? enrichMaps({ maps, reasons }) : maps;

    res.json(mapsEnriched);
    res.status(200);
  } catch (error) {
    next(error);
    res.status(503);
  }
});

export default router;
