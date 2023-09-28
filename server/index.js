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

import statusRoutes from './routes/statusRoutes.js';

const {
  PUBLIC_SERVER_PORT_NUMBER,
} = process.env;

const app = express();

app.use(bodyParser.json());
app.use(cache('1 minute'));
app.use(cors());

app.use('/status', statusRoutes);

app.listen(PUBLIC_SERVER_PORT_NUMBER, () => console.info(`Server running on port ${PUBLIC_SERVER_PORT_NUMBER}`));
