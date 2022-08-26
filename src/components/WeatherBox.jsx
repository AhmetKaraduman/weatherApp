import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWeatherInfo } from "../features/weather/weatherAction";
import Loader from "./Loader";

function WeatherBox() {
	const dispatch = useDispatch();

	const { weatherInfo, isLoading, isSuccess, selectedCity } = useSelector(
		(state) => state.weather
	);
	const { apiKey } = useSelector((state) => state.apiKey);

	useEffect(() => {
		if (apiKey && selectedCity) {
			dispatch(getWeatherInfo(selectedCity));
		}
	}, [dispatch, selectedCity, apiKey]);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			{isSuccess && weatherInfo && (
				<div className="container">
					<div className="row">
						<h1 className="header__city">
							{weatherInfo.name.split(" ")[0]}, {weatherInfo.sys.country}
						</h1>
						<div className="times">
							<p className="sun__rise">
								Sunrise:{" "}
								{new Date(weatherInfo.sys.sunrise * 1000).getHours().toString()
									.length === 1
									? `0${new Date(weatherInfo.sys.sunrise * 1000).getHours()}`
									: new Date(weatherInfo.sys.sunrise * 1000).getHours()}
								:
								{new Date(weatherInfo.sys.sunrise * 1000)
									.getMinutes()
									.toString().length === 1
									? `0${new Date(weatherInfo.sys.sunrise * 1000).getMinutes()}`
									: new Date(weatherInfo.sys.sunrise * 1000).getMinutes()}
							</p>
							<img
								src={`https://openweathermap.org/img/wn/${weatherInfo.weather[0].icon}@2x.png`}
								alt="weather-icon"
							/>
							<p className="sun-set">
								Sunset:{" "}
								{new Date(weatherInfo.sys.sunset * 1000).getHours().toString()
									.length === 1
									? `0${new Date(weatherInfo.sys.sunset * 1000).getHours()}`
									: new Date(weatherInfo.sys.sunset * 1000).getHours()}
								:
								{new Date(weatherInfo.sys.sunset * 1000).getMinutes().toString()
									.length === 1
									? `0${new Date(weatherInfo.sys.sunset * 1000).getMinutes()}`
									: new Date(weatherInfo.sys.sunset * 1000).getMinutes()}
							</p>
						</div>
						<h3 className="header__temp">
							{" "}
							Temperature: &nbsp;
							{(weatherInfo.main.temp - 273.15).toFixed(0)}&deg;C
						</h3>
						<h3 className="header__main">{weatherInfo.weather[0].main}</h3>
						<p className="list__description">
							{weatherInfo.weather[0].description}
						</p>
						<p className="list__humidity">
							Humidity: &nbsp;{weatherInfo.main.humidity}%
						</p>
						<p className="list__pressure">
							Pressure: &nbsp;{weatherInfo.main.pressure / 1000} hPa
						</p>
						<p className="list__wind">
							Wind:&nbsp;
							{(weatherInfo.wind.speed * 3.6).toFixed(0)} km/sa, &nbsp;
							{weatherInfo.wind.deg}&deg;
						</p>
					</div>
				</div>
			)}
		</>
	);
}

export default WeatherBox;
