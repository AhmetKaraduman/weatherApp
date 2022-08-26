import React, { useState } from "react";
import { apikeySliceAction } from "../features/apikey/apikeySlice";
import { useDispatch } from "react-redux";

function ApiKeyInputBox() {
	const dispatch = useDispatch();

	const savedApiKey = sessionStorage.getItem("apiKey") || "";
	const [apiKey, setApiKey] = useState(savedApiKey);
	const [isEmpty, setIsEmpty] = useState(false);

	const submitHandler = (e) => {
		if (!apiKey) {
			e.preventDefault();
			setIsEmpty(true);
			setTimeout(() => setIsEmpty(false), 2000);
		} else {
			e.preventDefault();
			setIsEmpty(false);
			dispatch(apikeySliceAction.saveApiKey(apiKey));
			sessionStorage.setItem("apiKey", apiKey);
			document.querySelector(".backdrop").style.display = "none";
		}
	};

	const backdropClickHandler = (e) => {
		if (e.target.classList.contains("backdrop")) {
			if (!apiKey) {
				setIsEmpty(true);
				setTimeout(() => setIsEmpty(false), 2000);
			}
			dispatch(apikeySliceAction.saveApiKey(apiKey));
			sessionStorage.setItem("apiKey", apiKey);
		}
	};

	return (
		<div className="backdrop" onClick={(e) => backdropClickHandler(e)}>
			<div id="apiKey_box">
				<form>
					{isEmpty && <p className="warning">API KEY must not be empty!</p>}
					<input
						type="text"
						placeholder="Please enter your API key..."
						value={apiKey}
						onChange={(e) => (setApiKey(e.target.value), setIsEmpty(false))}
					/>
					<button className="btn btn-white" onClick={(e) => submitHandler(e)}>
						Save API key
					</button>
				</form>
			</div>
		</div>
	);
}

export default ApiKeyInputBox;
