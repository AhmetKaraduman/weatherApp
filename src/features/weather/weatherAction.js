import { createAsyncThunk } from "@reduxjs/toolkit";
import weatherServices from "./weatherServices";

// get weather info
export const getWeatherInfo = createAsyncThunk(
	"weather/getInfo",

	async (city, thunkAPI) => {
		try {
			const API_KEY = thunkAPI.getState().apiKey.apiKey;
			return await weatherServices.getWeatherInfo(city, API_KEY);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);
