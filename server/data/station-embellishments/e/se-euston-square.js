import {
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
} from '../../../constants/serviceGroups.js';

import {
  SERVICE_ID_AVANTI_WEST_COAST,
  SERVICE_ID_LIONESS,
  SERVICE_ID_NORTHERN,
  SERVICE_ID_VICTORIA,
  SERVICE_ID_WEST_MIDLANDS_TRAINS,
} from '../../../constants/serviceIds.js';

import {
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_OVERGROUND,
  SERVICE_MODE_TUBE,
} from '../../../constants/serviceModes.js';

import {
  SERVICE_NAME_AVANTI_WEST_COAST,
  SERVICE_NAME_LIONESS,
  SERVICE_NAME_NORTHERN,
  SERVICE_NAME_VICTORIA,
  SERVICE_NAME_WEST_MIDLANDS_TRAINS,
} from '../../../constants/serviceNames.js';

import {
  OSI_DISTANCE_EUSTON_LONDON_OVERGROUND_EUSTON_SQUARE_TUBE,
  OSI_DISTANCE_EUSTON_NATIONAL_RAIL_EUSTON_SQUARE_TUBE,
  OSI_DISTANCE_EUSTON_TUBE_EUSTON_SQUARE_TUBE,
} from '../../osiDistances.js';

export default [
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
              id: SERVICE_ID_LIONESS,
              labels: [
                {
                  text: 'Euston',
                  distance: OSI_DISTANCE_EUSTON_LONDON_OVERGROUND_EUSTON_SQUARE_TUBE,
                },
              ],
              mode: SERVICE_MODE_OVERGROUND,
              name: SERVICE_NAME_LIONESS,
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
