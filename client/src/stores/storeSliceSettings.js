import { createSlice } from '@reduxjs/toolkit';

import {
  THEME_AUTO,
  THEME_DARK,
  THEME_LIGHT,
} from '@constants/theme';

const initialState = {
  currentMapRoutes: {},
  highContrastModeEnabled: window.matchMedia('(forced-colors: active)').matches,
  mapVisibilityInterchanges: {},
  mapVisibilityStepFreeAccess: true,
  pinned: {},
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  themeApp: THEME_AUTO,
  themeSystem: window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT,
};

export const storeSliceSettings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setCurrentMapRoute: (state, action) => {
      const { payload } = action;
      const { id, map } = payload;
      state.currentMapRoutes[id] = map;
    },
    setHighContrastModeEnabled: (state, action) => {
      const { payload } = action;
      state.highContrastModeEnabled = payload;
    },
    setMapVisibilityInterchangeItem: (state, action) => {
      const { payload } = action;
      const { id, visible } = payload;
      if (visible) {
        state.mapVisibilityInterchanges[id] = visible;
      } else {
        delete state.mapVisibilityInterchanges[id];
      }
    },
    setMapVisibilityInterchanges: (state, action) => {
      const { payload } = action;
      state.mapVisibilityInterchanges = payload;
    },
    setMapVisibilityStepFreeAccess: (state, action) => {
      const { payload } = action;
      state.mapVisibilityStepFreeAccess = payload;
    },
    setPinned: (state, action) => {
      const { payload } = action;
      state.pinned = payload;
    },
    setPinnedItem: (state, action) => {
      const { payload } = action;
      const { id, pinned } = payload;
      if (pinned) {
        state.pinned[id] = pinned;
      } else {
        delete state.pinned[id];
      }
    },
    setThemeApp: (state, action) => {
      const { payload } = action;
      state.themeApp = payload;
    },
  },
});

export const {
  setCurrentMapRoute,
  setHighContrastModeEnabled,
  setMapVisibilityInterchangeItem,
  setMapVisibilityInterchanges,
  setMapVisibilityStepFreeAccess,
  setPinned,
  setPinnedItem,
  setThemeApp,
} = storeSliceSettings.actions;

export default storeSliceSettings.reducer;
