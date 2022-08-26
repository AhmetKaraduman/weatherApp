import React, { useEffect } from "react";
import ApiBox from "../components/ApiKeyInputBox";
import WeatherBox from "../components/WeatherBox";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import SearchBox from "../components/SearchBox";
import { apikeySliceAction } from "../features/apikey/apikeySlice";

function HomePage() {
	const { apiKey } = useSelector((state) => state.apiKey);
	const { isError, message } = useSelector((state) => state.weather);
	const dispatch = useDispatch();

	useEffect(() => {
		if (isError) {
			document.getElementById("msg").classList.toggle("show");
			setTimeout(
				() => document.getElementById("msg").classList.toggle("show"),
				2000
			);
		}
	}, [isError]);

	const apiChangeHandler = () => {
		dispatch(apikeySliceAction.reset());
	};

	return (
		<>
			<Message variant="danger" message={message.split(".")[0]} />
			<h1>Weather App</h1>
			{!apiKey && <ApiBox />}
			<SearchBox />
			<button className="btn btn-dark" onClick={apiChangeHandler}>
				Change API Key
			</button>
			<WeatherBox />
		</>
	);
}

export default HomePage;
