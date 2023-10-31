import axios from 'axios';
import dotenv from 'dotenv';

import envPath from '../constants/envPath.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_TFL_APP_ID,
  PRIVATE_TFL_APP_KEY,
} = process.env;

const cleanDescription = (description) => {
  // We can have multiple descriptions whereby the only difference is `\n` and `\r` so we need to normalize them
  return description
    .replaceAll('\\n', ' ') // Required specifically for bus descriptions
    .replaceAll('\n', ' ')
    .replaceAll('\r', ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const getDisruptionsStopPoint = async(naptanId) => {
  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/stoppoint/${naptanId}/disruption?app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);

    if (!data.length) return [];

    const disruptions = data.map((datum) => {
      return {
        appearance: datum.appearance.toLowerCase() || null,
        description: cleanDescription(datum.description) || null,
        type: datum.type.toLowerCase() || null,
      };
    });

    // Remove duplicate disruptions
    const seen = new Set();

    return disruptions.filter((disruption) => {
      const duplicate = seen.has(disruption.description);
      seen.add(disruption.description);
      return !duplicate;
    });
  } catch (error) {
    throw new Error({
      error,
      message: `'getDisruptionsStopPoint': Could not getDisruptionsStopPoint for naptanId '${naptanId}'`,
    });
  }
};

export default getDisruptionsStopPoint;
