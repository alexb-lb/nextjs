import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {
    startLoader: (state) => {
      state.isLoading = true;
    },
    stopLoader: (state) => {
      state.isLoading = true;
    },
  },
});

export const { startLoader, stopLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
