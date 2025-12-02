import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import channelReducer from "./slice/ChannelSlice";


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["channel"],
};
const rootReducer = combineReducers({
  channel: channelReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);