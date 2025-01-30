import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import rootReducer from "./rootReducer";
import strapiAxios from "../utils/axios/strapi.axios";

// Import your reducers here

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: {
          apiService: {
            strapi: strapiAxios,
          },
        },
      },
    }),
});

// Optional: Setup type inference for the dispatch function
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
