import dotenv from 'dotenv';
import OpenAI from 'openai';

import envPath from '../constants/envPath.js';

import mapPrompt from '../prompts/mapPrompt.js';

dotenv.config({
  path: envPath,
});

const {
  PRIVATE_OPENAI_KEY,
  PRIVATE_OPENAI_MODEL,
} = process.env;

const openai = new OpenAI({
  apiKey: PRIVATE_OPENAI_KEY,
});

const getEnrichedMaps = async({ maps, reasons, serviceId }) => {
  // We only need to send OpenAI a subset of the maps data
  const structuredMapData = {
    id: serviceId,
    services: maps.map((map) => {
      return {
        id: map.id,
        stations: map.stations.map((station) => {
          return {
            id: station.id,
            name: station.name,
          };
        }),
      };
    }),
  };

  try {
    const response = await openai.chat.completions.create({
      frequency_penalty: 0,
      max_tokens: 1000,
      messages: [
        {
          role: 'system',
          content: mapPrompt,
        },
        {
          role: 'user',
          content: JSON.stringify(structuredMapData),
        },
        {
          role: 'user',
          content: reasons,
        },
      ],
      model: PRIVATE_OPENAI_MODEL,
      presence_penalty: 0,
      response_format: {
        type: 'json_object',
      },
      temperature: 0,
      top_p: 1,
    });

    return JSON.parse(response.choices[0].message.content);
  } catch (error) {
    throw new Error('getEnrichedMaps() error:', error);
  }
};

const mergeEnrichedMaps = ({ enrichedMaps, maps }) => {
  return maps.map((map) => {
    const enrichedMap = enrichedMaps.services.find((enrichedMap) => enrichedMap.id === map.id);
    if (!enrichedMap) return map;

    map.message = enrichedMap.message;

    enrichedMap.stations.forEach((enrichedMapStation) => {
      const stationIndex = map.stations.findIndex((station) => station.id === enrichedMapStation.id);
      if (stationIndex === -1) throw new Error(`Unable to find station ${enrichedMapStation.id} in map ${map.id}`);

      map.stations[stationIndex] = {
        ...map.stations[stationIndex],
        ...enrichedMapStation,
      };
    });

    return map;
  });
};

const enrichMaps = async({ id: serviceId, maps, reasons }) => {
  try {
    const enrichedMaps = await getEnrichedMaps({ maps, reasons, serviceId });
    const mergedMaps = mergeEnrichedMaps({ enrichedMaps, maps });

    return {
      enrichedData: enrichedMaps,
      maps: mergedMaps,
    };
  } catch (error) {
    return {
      error: `enrichMaps() error: ${error}`,
      maps,
    };
  }
};

export default enrichMaps;
