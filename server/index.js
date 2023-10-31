import apicache from 'apicache';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import envPath from './constants/envPath.js';

let cache = apicache.middleware;

dotenv.config({
  path: envPath,
});

import mapsRoutes from './routes/mapsRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import stationsRoutes from './routes/stationsRoutes.js';

const {
  PUBLIC_PORT_NUMBER_SERVER,
} = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cache('1 minute'));
app.use(cors());

app.use('/maps', mapsRoutes);
app.use('/services', servicesRoutes);
app.use('/stations', stationsRoutes);

app.listen(PUBLIC_PORT_NUMBER_SERVER, () => console.info(`Server running on port ${PUBLIC_PORT_NUMBER_SERVER}`));
