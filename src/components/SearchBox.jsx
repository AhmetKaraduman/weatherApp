import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { weatherSliceAction } from "../features/weather/weatherSlice";

function SearchBox() {
	const cities = {
		Ankara: "Ankara",
		İstanbul: "Istanbul",
		İzmir: "Izmir",
		Adana: "Adana",
		Adıyaman: "Adiyaman",
		Afyonkarahisar: "Afyonkarahisar",
		Ağrı: "Agri",
		Aksaray: "Aksaray",
		Amasya: "Amasya",
		Antalya: "Antalya",
		Ardahan: "Ardahan",
		Artvin: "Artvin",
		Aydın: "Aydin",
		Balıkesir: "Balikesir",
		Bartın: "Bartin",
		Batman: "Batman",
		Bayburt: "Bayburt",
		Bilecik: "Bilecik",
		Bingöl: "Bingol",
		Bitlis: "Bitlis",
		Bolu: "Bolu",
		Burdur: "Burdur",
		Bursa: "Bursa",
		Çanakkale: "Canakkale",
		Çankırı: "Cankiri",
		Çorum: "Corum",
		Denizli: "Denizli",
		Diyarbakır: "Diyarbakir",
		Düzce: "Düzce",
		Edirne: "Edirne",
		Elazığ: "Elazig",
		Erzincan: "Erzincan",
		Erzurum: "Erzurum",
		Eskişehir: "Eskisehir",
		Gaziantap: "Gaziantep",
		Giresun: "Giresun",
		Gümüşhane: "Gümüşhane",
		Hakkari: "Hakkari",
		Hatay: "Hatay",
		Iğdır: "Igdir",
		Isparta: "Isparta",
		Kahramanmaraş: "Maraş",
		Karabük: "Karabuk",
		Karaman: "Karaman",
		Kars: "Kars",
		Kastamonu: "Kastamonu",
		Kayseri: "Kayseri",
		Kırıkkale: "Kirikkale",
		Kırklareli: "Kirklareli",
		Kırşehir: "Kirsehir",
		Kilis: "Kilis",
		Kocaeli: "Kocaeli",
		Konya: "Konya",
		Kütahya: "Kutahya",
		Malatya: "Malatya",
		Manisa: "Manisa",
		Mardin: "Mardin",
		Mersin: "Mersin",
		Muğla: "Mugla",
		Muş: "Mus",
		Nevşehir: "Nevsehir",
		Niğde: "Nigde",
		Ordu: "Ordu",
		Osmaniye: "Osmaniye",
		Rize: "Rize",
		Sakarya: "Sakarya",
		Samsun: "Samsun",
		Siirt: "Siirt",
		Sinop: "Sinop",
		Sivas: "Sivas",
		Şanlıurfa: "Sanliurfa",
		Şırnak: "Sirnak",
		Tekirdağ: "Tekirdag",
		Tokat: "Tokat",
		Trabzon: "Trabzon",
		Tunceli: "Tunceli",
		Uşak: "Usak",
		Van: "Van",
		Yalova: "Yalova",
		Yozgat: "Yozgat",
		Zonguldak: "Zonguldak",
	};

	const arrCities = Object.keys(cities).map((key) => key);

	const [city, setCity] = useState("Ankara");
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(weatherSliceAction.setSelectedCity(cities[city]));
		// eslint-disable-next-line
	}, [city, dispatch]);

	return (
		<div className="search-box">
			<select id="cities" onChange={(e) => setCity(e.target.value)}>
				{arrCities.map((city) => (
					<option value={city} key={city}>
						{city}
					</option>
				))}
			</select>
		</div>
	);
}

export default SearchBox;
