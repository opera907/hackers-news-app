import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { hackersApi } from "./services/api";

export const store = configureStore({
  reducer: {
    [hackersApi.reducerPath]: hackersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hackersApi.middleware),
});

setupListeners(store.dispatch);
