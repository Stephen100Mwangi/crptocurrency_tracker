import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/CryptoAPI";

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
});
