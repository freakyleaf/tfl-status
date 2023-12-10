import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_RIVER_BUS,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_ID_BAKERLOO,
  SERVICE_ID_CIRCLE,
  SERVICE_ID_DISTRICT,
  SERVICE_ID_DLR,
  SERVICE_ID_ELIZABETH,
  SERVICE_ID_JUBILEE,
  SERVICE_ID_LONDON_OVERGROUND,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_PICCADILLY,
  SERVICE_ID_RIVER_BUS_1,
  SERVICE_ID_RIVER_BUS_2,
  SERVICE_ID_RIVER_BUS_4,
  SERVICE_ID_RIVER_BUS_6,
} from '../../constants/serviceIds.js';

import {
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_RIVER_BUS,
  SERVICE_MODE_TUBE,
} from '../../constants/serviceModes.js';

import {
  SERVICE_NAME_CIRCLE,
  SERVICE_NAME_DISTRICT,
  SERVICE_NAME_DLR,
  SERVICE_NAME_ELIZABETH,
  SERVICE_NAME_JUBILEE,
  SERVICE_NAME_LONDON_OVERGROUND,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_PICCADILLY,
  SERVICE_NAME_RIVER_BUS_1,
  SERVICE_NAME_RIVER_BUS_2,
  SERVICE_NAME_RIVER_BUS_4,
  SERVICE_NAME_RIVER_BUS_6,
} from '../../constants/serviceNames.js';

import {
  OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
  OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
  OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
  OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
} from '../osiDistances.js';

const stationEmbellishments = [
  {
    topMostParentId: '940GZZLUCAR', // Caledonian Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Caledonian Road & Barnsbury',
                  distance: OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
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
    topMostParentId: '910GCLDNNRB', // Caledonian Road & Barnsbury
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_PICCADILLY,
              labels: [
                {
                  text: 'Caledonian Road',
                  distance: OSI_DISTANCE_CALEDONIAN_ROAD_TUBE_CALEDONIAN_ROAD_BARNSBURY_LONDON_OVERGROUND,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_PICCADILLY,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GCMDNRD', // Camden Road
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Camden Town',
                  distance: OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
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
    topMostParentId: '940GZZLUCTN', // Camden Town
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Camden Road',
                  distance: OSI_DISTANCE_CAMDEN_ROAD_LONDON_OVERGROUND_CAMDEN_TOWN_TUBE,
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
    topMostParentId: 'HUBCAW', // Canary Wharf
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Canary Wharf Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Canary Wharf Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_4,
              labels: [
                {
                  text: 'Canary Wharf Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_4,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Canary Wharf Pier',
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
    topMostParentId: '930GCAW', // Canary Wharf Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_JUBILEE,
              labels: [
                {
                  text: 'Canary Wharf',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_JUBILEE,
            },
            {
              id: SERVICE_ID_ELIZABETH,
              labels: [
                {
                  text: 'Canary Wharf',
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_ELIZABETH,
            },
            {
              id: SERVICE_ID_DLR,
              labels: [
                {
                  text: 'Canary Wharf',
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
    topMostParentId: 'HUBCHX', // Charing Cross
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_CIRCLE,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Embankment',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_CIRCLE,
            },
            {
              id: SERVICE_ID_DISTRICT,
              ignoreLineIds: [
                SERVICE_ID_BAKERLOO,
                SERVICE_ID_NORTHERN,
              ],
              labels: [
                {
                  text: 'Embankment',
                  distance: OSI_DISTANCE_CHARING_CROSS_NATIONAL_RAIL_EMBANKMENT_TUBE,
                },
              ],
              mode: SERVICE_MODE_TUBE,
              name: SERVICE_NAME_DISTRICT,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '930GCHP', // Chelsea Habour Pier
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Imperial Wharf',
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
    topMostParentId: '910GCLPHHS', // Clapham High Street
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_NORTHERN,
              labels: [
                {
                  text: 'Clapham North',
                  distance: OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
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
    topMostParentId: '940GZZLUCPN', // Clapham North
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_CORE,
          lines: [
            {
              id: SERVICE_ID_LONDON_OVERGROUND,
              labels: [
                {
                  text: 'Clapham High Street',
                  distance: OSI_DISTANCE_CLAPHAM_HIGH_STREET_LONDON_OVERGROUND_CLAPHAM_NORTH_TUBE,
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
    topMostParentId: 'HUBCUT', // Cutty Sark
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_RIVER_BUS,
          lines: [
            {
              id: SERVICE_ID_RIVER_BUS_1,
              labels: [
                {
                  text: 'Greenwich Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_1,
            },
            {
              id: SERVICE_ID_RIVER_BUS_2,
              labels: [
                {
                  text: 'Greenwich Pier',
                },
              ],
              mode: SERVICE_MODE_RIVER_BUS,
              name: SERVICE_NAME_RIVER_BUS_2,
            },
            {
              id: SERVICE_ID_RIVER_BUS_6,
              labels: [
                {
                  text: 'Greenwich Pier',
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
