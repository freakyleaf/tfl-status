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

const getBulletinsStopPoint = async(naptanId) => {
  try {
    const { data } = await axios.get(`https://api.tfl.gov.uk/stoppoint/${naptanId}/disruption?getFamily=true&app_id=${PRIVATE_TFL_APP_ID}&app_key=${PRIVATE_TFL_APP_KEY}`);

    if (!Object.keys(data).length) return [];

    const bulletins = [];

    // Recursively get all `disruption` data from all `children` data
    // TfL call them 'disruptions' but we call them 'bulletins'
    const getChildrenBulletins = (data) => {
      if (data.children.length) {
        data.children.forEach((child) => {
          if (child.disruptions.length) {
            child.disruptions.forEach((disruption) => {
              bulletins.push({
                appearance: disruption.appearance.toLowerCase() || null,
                description: cleanDescription(disruption.description) || null,
                type: disruption.type.toLowerCase() || null,
              });
            });
          }
          getChildrenBulletins(child);
        });
      }
    };

    getChildrenBulletins(data);

    // Remove duplicate bulletins
    const seen = new Set();

    return bulletins.filter((bulletin) => {
      const duplicate = seen.has(bulletin.description);
      seen.add(bulletin.description);
      return !duplicate;
    });
  } catch (error) {
    throw new Error({
      error,
      message: `'getBulletinsStopPoint': Could not getBulletinsStopPoint for naptanId '${naptanId}'`,
    });
  }
};

export default getBulletinsStopPoint;
