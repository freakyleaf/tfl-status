import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lines: {},
};

export const storeSliceLines = createSlice({
  name: 'lines',
  initialState,
  reducers: {
    resetLines: (state) => {
      state.lines = {};
    },
    setLine: (state, action) => {
      const { payload } = action;
      const { data, id } = payload;
      state.lines[id] = data;
    },
  },
});

export const {
  resetLines,
  setLine,
} = storeSliceLines.actions;

export default storeSliceLines.reducer;
