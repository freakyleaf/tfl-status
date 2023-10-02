import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pageMainHeight: 0,
  pageMainScrollTop: 0,
  prefersReducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
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
  },
});

export const {
  setPageMainHeight,
  setPageMainScrollTop,
} = storeSliceSettings.actions;

export default storeSliceSettings.reducer;
