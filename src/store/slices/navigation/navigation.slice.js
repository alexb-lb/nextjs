import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navLinks: [],
};

const navigationSlice = createSlice({
  name: "navigation",
  initialState,
});

export default navigationSlice.reducer;
