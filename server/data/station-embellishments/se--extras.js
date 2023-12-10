import {
  SERVICE_GROUP_EXTRA,
} from '../../constants/serviceGroups.js';

import {
  SERVICE_MODE_AEROPLANE,
  SERVICE_MODE_EUROSTAR,
} from '../../constants/serviceModes.js';

const stationEmbellishments = [
  {
    topMostParentId: '910GASHFKY', // Ashford International
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GBHAMINT', // Birmingham International
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GEBSFDOM', // Ebbsfleet International
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GGTWK', // Gatwick Airport
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GLUTOAPY', // Luton Airport Parkway
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GMNCRIAP', // Manchester Airport
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '9100SOTPKWY1', // Southampton Airport Parkway
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GSTHEAIR', // Southend Airport
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '920GSTN1', // Stansted Airport
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_AEROPLANE,
            },
          ],
        },
      ],
    },
  },
  {
    topMostParentId: '910GSTFODOM', // Stratford International (Southeastern)
    embellishments: {
      interchanges: [
        {
          group: SERVICE_GROUP_EXTRA,
          lines: [
            {
              mode: SERVICE_MODE_EUROSTAR,
            },
          ],
        },
      ],
    },
  },
];

export default stationEmbellishments;
