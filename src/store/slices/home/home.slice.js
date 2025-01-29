import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navLinks: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
});

export default homeSlice.reducer;
