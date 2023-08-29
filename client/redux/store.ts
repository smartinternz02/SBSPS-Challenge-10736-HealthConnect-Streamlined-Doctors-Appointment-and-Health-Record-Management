import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import appointmentSlice from "./appointmentSlice";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

const rootReducers = combineReducers({
  auth: authSlice,
  appointment: appointmentSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["auth", "appointment"],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
