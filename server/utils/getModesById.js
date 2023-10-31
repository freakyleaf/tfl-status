import getServices from './getServices.js';

import {
  SERVICE_GROUP_ALL,
} from '../constants/serviceGroups.js';

const getModesById = async() => {
  const { data } = await getServices(SERVICE_GROUP_ALL);

  return data.map((datum) => {
    return {
      id: datum.id,
      mode: datum.modeName,
    };
  });
};

export default getModesById;
