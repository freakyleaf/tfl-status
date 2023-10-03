import { createSlice } from '@reduxjs/toolkit';

import {
  THEME_AUTO,
  THEME_DARK,
  THEME_LIGHT,
} from '@constants/theme';

const initialState = {
  pageMainHeight: 0,
  pageMainScrollTop: 0,
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  themeApp: THEME_AUTO,
  themeSystem: window.matchMedia('(prefers-color-scheme: dark)').matches ? THEME_DARK : THEME_LIGHT,
};

export const storeSliceSettings = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setPageMainHeight: (state, action) => {
      const { payload } = action;
      state.pageMainHeight = payload;
    },
    setPageMainScrollTop: (state, action) => {
      const { payload } = action;
      state.pageMainScrollTop = payload;
    },
    setThemeApp: (state, action) => {
      const { payload } = action;
      state.themeApp = payload;
    },
  },
});

export const {
  setPageMainHeight,
  setPageMainScrollTop,
  setThemeApp,
} = storeSliceSettings.actions;

export default storeSliceSettings.reducer;
