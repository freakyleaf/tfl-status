import {
  SERVICE_GROUP_BUS,
  SERVICE_GROUP_CORE,
  SERVICE_GROUP_NATIONAL_RAIL,
  SERVICE_GROUP_RIVER_BUS,
} from '@constants/serviceGroups';

import {
  SERVICE_MODE_BUS,
  SERVICE_MODE_NATIONAL_RAIL,
  SERVICE_MODE_RIVER_BUS,
} from '@constants/serviceModes';

import {
  SERVICE_NAME_BUS,
  SERVICE_NAME_CORE,
  SERVICE_NAME_NATIONAL_RAIL,
  SERVICE_NAME_RIVER_BUS,
} from '@constants/serviceNames';

const getPretty = (string) => {
  switch (string) {
  case SERVICE_GROUP_BUS:
  case SERVICE_MODE_BUS:
    return SERVICE_NAME_BUS;

  case SERVICE_GROUP_CORE:
    return SERVICE_NAME_CORE;

  case SERVICE_GROUP_NATIONAL_RAIL:
  case SERVICE_MODE_NATIONAL_RAIL:
    return SERVICE_NAME_NATIONAL_RAIL;

  case SERVICE_GROUP_RIVER_BUS:
  case SERVICE_MODE_RIVER_BUS:
    return SERVICE_NAME_RIVER_BUS;
  }
};

export default getPretty;
