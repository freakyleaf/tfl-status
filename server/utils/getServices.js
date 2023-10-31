import axios from 'axios';
import dotenv from 'dotenv';

import envPath from '../constants/envPath.js';
import serviceGroups, { SERVICE_GROUP_ALL } from '../constants/serviceGroups.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
} = process.env;

const getServices = async(group) => {
  const serviceModes = group === SERVICE_GROUP_ALL
    ? serviceGroups.map((serviceGroup) => serviceGroup.modes).flat()
    : serviceGroups.find((serviceGroup) => serviceGroup.group === group).modes;

  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/line/mode/${serviceModes.join(',')}/status?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);
    return {
      data,
      serviceModes,
    };
  } catch (error) {
    throw new Error({
      error,
      message: `'getServices': Could not getServices for serviceModes '${serviceModes}'`,
    });
  }
};

export default getServices;
