import { createSlice } from "@reduxjs/toolkit";
import { getWeatherInfo } from "./weatherAction";

const initialState = {
	weatherInfo: {},
	selectedCity: "",
	isLoading: false,
	isError: false,
	isSuccess: false,
	message: "",
};

const weatherSlice = createSlice({
	name: "weather",
	initialState: initialState,
	reducers: {
		setSelectedCity: (state, action) => {
			state.selectedCity = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getWeatherInfo.pending, (state) => {
				state.isLoading = true;
				state.isError = false;
				state.isSuccess = false;
			})
			.addCase(getWeatherInfo.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.isSuccess = false;
				state.message = action.payload;
			})
			.addCase(getWeatherInfo.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.isError = false;
				state.message = "";
				state.weatherInfo = action.payload;
			});
	},
});

export default weatherSlice;
export const weatherSliceAction = weatherSlice.actions;
