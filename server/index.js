import apicache from 'apicache';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import envPath from './constants/envPath.js';

import cacheRoutes from './routes/cacheRoutes.js';
import mapsRoutes from './routes/mapsRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import stationsRoutes from './routes/stationsRoutes.js';

dotenv.config({
  path: envPath,
});

const {
  PUBLIC_ENV,
  PUBLIC_PORT_NUMBER_SERVER,
} = process.env;

const app = express();

apicache.options({
  debug: PUBLIC_ENV === 'development',
});

app.use(bodyParser.json());
app.use(cors());

app.use('/cache', cacheRoutes);
app.use('/maps', mapsRoutes);
app.use('/services', servicesRoutes);
app.use('/stations', stationsRoutes);

app.listen(PUBLIC_PORT_NUMBER_SERVER, () => console.info(`Server running on port ${PUBLIC_PORT_NUMBER_SERVER}`));
