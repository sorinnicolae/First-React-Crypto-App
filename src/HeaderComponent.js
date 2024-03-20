import React from "react";
import EthereumIcon from "./assets/Ethereum_logo_2014.svg.png";

function HeaderComponent() {
	return (
		<div className="header" onClick={() => window.location.reload()}>
			<img src={EthereumIcon} alt="Ethereum Icon" width={20} height={20} />
			<span>EverETH</span>
			<div className="beta">V2 BETA</div>
			<div className="connect-button">Connect Wallet</div>{" "}
		</div>
	);
}

export default HeaderComponent;
