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
  setSettingsOpen,
  setThemeApp,
} = storeSliceSettings.actions;

export default storeSliceSettings.reducer;
