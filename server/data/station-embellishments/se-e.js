import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_INFO,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_AVANTI_WEST_COAST,
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_SOUTHEASTERN,
  SERVICE_ID_VICTORIA,
  SERVICE_ID_WEST_MIDLANDS_TRAINS,
} from '../../constants/serviceIds.js';

import {
  INFO_TRAINS_TO_GATWICK_AIRPORT,
  INFO_TRAINS_TO_LUTON_AIRPORT,
} from '../../constants/serviceInfo.js';

import {
  SERVICE_MODE_AIRPORT_CONNECTION,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_AVANTI_WEST_COAST,
  SERVICE_NAME_BAKERLOO,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_METROPOLITAN,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_SOUTHEASTERN,
  SERVICE_NAME_VICTORIA,
  SERVICE_NAME_WEST_MIDLANDS_TRAINS,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
  OSI_DISTANCE_EUSTON_LONDON_OVERGROUND_EUSTON_SQUARE_TUBE,
  OSI_DISTANCE_EUSTON_NATIONAL_RAIL_EUSTON_SQUARE_TUBE,
  OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: 'HUBECY', // East Croydon
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_INFO,
          lines: [
            {
              labels: [
                {
                  text: INFO_TRAINS_TO_GATWICK_AIRPORT,
                },
                {
                  text: INFO_TRAINS_TO_LUTON_AIRPORT,
                },
              ],
              mode: SERVICE_MODE_AIRPORT_CONNECTION,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUEMB', // Embankment
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_SOUTHEASTERN,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Charing Cross',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_SOUTHEASTERN,
            },
          ],
        },
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Embankment Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Embankment Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Embankment Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_6,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GEMB', // Embankment Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_BAKERLOO,
              labels: [
                {
                  text: 'Embankment',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_BAKERLOO,
            },
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Embankment',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              labels: [
                {
                  text: 'Embankment',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Embankment',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBEUS', // Euston
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
            {
              id: SERVICE_ID_METROPOLITAN,
              labels: [
                {
                  text: 'Euston Square',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_METROPOLITAN,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUESQ', // Euston Square
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_NORTHERN,
            },
            {
              id: SERVICE_ID_VICTORIA,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_VICTORIA,
            },
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_LONDON_OVERGROUND_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
        {
          group: SERVICE_GROUP_NATIONAL_RAIL,
          lines: [
            {
              id: SERVICE_ID_AVANTI_WEST_COAST,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_NATIONAL_RAIL_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_AVANTI_WEST_COAST,
            },
            {
              id: SERVICE_ID_WEST_MIDLANDS_TRAINS,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_NATIONAL_RAIL_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_NATIONAL_RAIL,
              name: SERVICE_NAME_WEST_MIDLANDS_TRAINS,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;
