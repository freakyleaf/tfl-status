import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: null,
};

export const storeSliceStatus = createSlice({
  name: 'status',
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = null;
    },
    setStatusFromFetch: (state, action) => {
      const { payload } = action;
      state.status = payload;
    },
  },
});

export const {
  resetStatus,
  setStatusFromFetch,
} = storeSliceStatus.actions;

export default storeSliceStatus.reducer;
