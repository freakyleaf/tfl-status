import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  globalLoading: false,
  menuOpen: false,
  pageMainHeight: 0,
  pageMainScrollTop: 0,
  settingsOpen: false,
  viewMode: null,
  viewType: null,
};

export const storeSliceState = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      const { payload } = action;
      state.globalLoading = payload;
    },
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
    setViewMode: (state, action) => {
      const { payload } = action;
      state.viewMode = payload;
    },
    setViewType: (state, action) => {
      const { payload } = action;
      state.viewType = payload;
    },
  },
});

export const {
  setGlobalLoading,
  setMenuOpen,
  setPageMainHeight,
  setPageMainScrollTop,
  setSettingsOpen,
  setViewMode,
  setViewType,
} = storeSliceState.actions;

export default storeSliceState.reducer;
