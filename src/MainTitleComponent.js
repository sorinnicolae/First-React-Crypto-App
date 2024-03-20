import React, { useState, useEffect } from "react";
import "./MainTitleComponent.css";

const MainTitleComponent = () => {
	const [language, setLanguage] = useState("English");

	useEffect(() => {
		const languages = ["Russian", "Spanish", "Arabic"];

		const intervalId = setInterval(() => {
			const randomIndex = Math.floor(Math.random() * languages.length);
			setLanguage(languages[randomIndex]);
		}, 2000);

		return () => clearInterval(intervalId);
	}, []);

	let ethereumText = "";
	switch (language) {
		case "Russian":
			ethereumText = "Эфириума";
			break;
		case "Spanish":
			ethereumText = "Ethereum";
			break;
		case "Arabic":
			ethereumText = "الإيثيريوم";
			break;
		default:
			ethereumText = "Ethereum";
	}

	return (
		<div className="main-title">
			<h1>DeFi for {ethereumText}</h1>
		</div>
	);
};

export default MainTitleComponent;
