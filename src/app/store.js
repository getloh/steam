import { configureStore } from '@reduxjs/toolkit';
import apiSlice from '../features/api/apiSlice';
import uiSlice from '../features/ui/uiSlice';

export const store = configureStore({
  reducer: {
    api: apiSlice,
    ui: uiSlice,
  },
});


/*
api
    steamId: [],
    userNum: 1,
    apiUserData: [],
    apiData: [],
    status: "initial",
    apikey: "",


ui
  input: "76561197964454963",
  mode: "",


*/