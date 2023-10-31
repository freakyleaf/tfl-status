import { store } from '@stores/store';

import {
  setViewMode,
  setViewType,
} from '@stores/storeSliceState';

const setView = ({ viewMode, viewType }) => {
  store.dispatch(setViewMode(viewMode));
  store.dispatch(setViewType(viewType));
};

export default setView;
