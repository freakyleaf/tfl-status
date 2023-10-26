import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stations: {},
};

export const storeSliceStations = createSlice({
  name: 'stations',
  initialState,
  reducers: {
    resetStations: (state) => {
      state.stations = {};
    },
    setStation: (state, action) => {
      const { payload } = action;
      const { data, id } = payload;
      state.stations[id] = data;
    },
  },
});

export const {
  resetStations,
  setStation,
} = storeSliceStations.actions;

export default storeSliceStations.reducer;
