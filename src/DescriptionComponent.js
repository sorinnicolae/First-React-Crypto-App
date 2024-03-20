import React from "react";
import "./DescriptionComponent.css";

const DescriptionComponent = () => {
	const descriptionText =
		"Explore a full range of dApps and protocols built with ❤️ for the Ethereum Network.";

	return (
		<div className="description">
			<p>{descriptionText}</p>
		</div>
	);
};

export default DescriptionComponent;
