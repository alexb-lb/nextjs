import { combineReducers } from "@reduxjs/toolkit";
// Import your slices here

import navigationSlice from "./slices/navigation/navigation.slice";
import loaderSlice from "./slices/loader/loader.slice";
import homeSlice from "./slices/home/home.slice";

const rootReducer = combineReducers({
  navigation: navigationSlice,
  loader: loaderSlice,
  home: homeSlice,
});

export default rootReducer;
