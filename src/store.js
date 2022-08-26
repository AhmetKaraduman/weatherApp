import { configureStore } from "@reduxjs/toolkit";
import apikeySlice from "./features/apikey/apikeySlice";
import weatherSlice from "./features/weather/weatherSlice";

export const store = configureStore({
	reducer: {
		apiKey: apikeySlice.reducer,
		weather: weatherSlice.reducer,
	},
});
