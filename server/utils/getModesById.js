import getStatus from './getStatus.js';

const getModesById = async() => {
  const data = await getStatus();

  return data.map((datum) => {
    return {
      id: datum.id,
      mode: datum.modeName,
    };
  });
};

export default getModesById;
