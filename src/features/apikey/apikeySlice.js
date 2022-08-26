import { createSlice } from "@reduxjs/toolkit";

const API_KEY = sessionStorage.getItem("apiKey") || "";

const initialState = {
	apiKey: API_KEY,
};

const apikeySlice = createSlice({
	name: "apikey",
	initialState: initialState,
	reducers: {
		saveApiKey: (state, action) => {
			state.apiKey = action.payload;
		},
		reset: (state) => {
			state.apiKey = "";
		},
	},
});

export default apikeySlice;
export const apikeySliceAction = apikeySlice.actions;
