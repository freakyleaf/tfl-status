import axios from 'axios';
import dotenv from 'dotenv';

import envPath from '../constants/envPath.js';
import serviceModes from '../constants/serviceModes.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
} = process.env;

const getStatus = async() => {
  const { data } = await axios.get(`https://api.tfl.gov.uk/line/mode/${serviceModes.join(',')}/status?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
  return data;
};

export default getStatus;
