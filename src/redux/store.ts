import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";
import authReducer from "./slices/authSlice";
import customCountryReducer from "./slices/customCountrySlice";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["auth", "customCountry"],
};

const rootReducer = combineReducers({
    auth: authReducer,
    customCountry: customCountryReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
