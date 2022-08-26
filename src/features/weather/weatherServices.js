import axios from "axios";

// get cart items
const getWeatherInfo = async (city, API_KEY) => {
	const WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

	const { data } = await axios.get(WEATHER_URL);

	return data;
};

const weatherServices = {
	getWeatherInfo,
};

export default weatherServices;
