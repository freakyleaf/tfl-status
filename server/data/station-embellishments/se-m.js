import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CENTRAL,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DLR,
  SERVICE_ID_HAMMERSMITH_CITY,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_METROPOLITAN,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_6,
  SERVICE_ID_VICTORIA,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_CENTRAL,
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DLR,
  SERVICE_NAME_HAMMERSMITH_CITY,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_METROPOLITAN,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_6,
  SERVICE_NAME_VICTORIA,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
  OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
  OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
  OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUMRH', // Manor House
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Harringay Green Lanes',
                  distance: OSI_DISTANCE_HARRINGAY_GREEN_LANES_LONDON_OVERGROUND_MANOR_HOUSE_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LONDON_OVERGROUND,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: 'HUBMYB', // Marylebone
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_HAMMERSMITH_CITY,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_HAMMERSMITH_CITY,
            },
            {
              id: SERVICE_ID_METROPOLITAN,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
              ],
              labels: [
                {
                  text: 'Baker Street',
                  distance: OSI_DISTANCE_BAKER_STREET_TUBE_MARYLEBONE_NATIONAL_RAIL,
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
    topMostParentId: '930GMHT', // Masthouse Terrace Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Mudchute',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DLR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GMBK', // Millbank Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_VICTORIA,
              labels: [
                {
                  text: 'Pimlico',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_VICTORIA,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '940GZZLUMMT', // Monument
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CENTRAL,
              labels: [
                {
                  text: 'Bank',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CENTRAL,
            },
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Bank',
                  distance: OSI_DISTANCE_BANK_TUBE_MONUMENT_TUBE,
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
    topMostParentId: '940GZZCRMDN', // Morden Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'South Wimbledon',
                  distance: OSI_DISTANCE_MORDEN_ROAD_TRAM_SOUTH_WIMBLEDON_TUBE,
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
    topMostParentId: '940GZZDLMUD', // Mudchute
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Masthouse Terrace Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Masthouse Terrace Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Masthouse Terrace Pier',
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
];

export default stationEmbellishments;
