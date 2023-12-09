import {
  VIEW_MODE_BUS,
  VIEW_MODE_RIVER_BUS,
  VIEW_MODE_TUBE,
} from '@constants/viewModes';

const getSuffix = (mode) => {
  switch (mode) {
  case VIEW_MODE_BUS:
    return ' bus';
  case VIEW_MODE_RIVER_BUS:
    return ' river bus';
  case VIEW_MODE_TUBE:
    return ' line';
  default:
    return '';
  }
};

export default function screenReaderLineName({ mode, name }) {
  return `${name}${getSuffix(mode)}`;
}
