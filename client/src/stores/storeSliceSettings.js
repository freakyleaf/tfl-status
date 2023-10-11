import { createSlice } from '@reduxjs/toolkit';

import {
  THEME_AUTO,
  THEME_DARK,
  THEME_LIGHT,
} from '@constants/theme';

const initialState = {
  menuOpen: false,
  pageMainHeight: 0,
  pageMainScrollTop: 0,
  pinned: {},
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  settingsOpen: false,
  themeApp: THEME_AUTO,
  themeSystem: window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT,
};

export const storeSliceSettings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMenuOpen: (state, action) => {
      const { payload } = action;
      state.menuOpen = payload;
    },
    setPageMainHeight: (state, action) => {
      const { payload } = action;
      state.pageMainHeight = payload;
    },
    setPageMainScrollTop: (state, action) => {
      const { payload } = action;
      state.pageMainScrollTop = payload;
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
    setSettingsOpen: (state, action) => {
      const { payload } = action;
      state.settingsOpen = payload;
    },
    setThemeApp: (state, action) => {
      const { payload } = action;
      state.themeApp = payload;
    },
  },
});

export const {
  setMenuOpen,
  setPageMainHeight,
  setPageMainScrollTop,
  setPinned,
  setPinnedItem,
  setSettingsOpen,
  setThemeApp,
} = storeSliceSettings.actions;

export default storeSliceSettings.reducer;
