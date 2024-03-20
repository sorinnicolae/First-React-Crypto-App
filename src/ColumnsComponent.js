import React from "react";
import "./ColumnsComponent.css";
import Stake from "./assets/stake.jpg";
import Yield from "./assets/yield.jpg";
import Marketplace from "./assets/marketplace.jpg";
import Reflect from "./assets/reflect.jpg";
import Dividends from "./assets/dividends.jpg";
import Dex from "./assets/dex.jpg";
import Tools from "./assets/tools.jpg";
import News from "./assets/news.jpg";

const ColumnsComponent = () => {
	return (
		<div className="container">
			<div className="columns-container">
				<div className="column">
					<img src={Stake} alt="Photo1" />
					<div className="text">
						<div className="main-text">Stake</div>
						<div className="sub-text">Decentralized liquid staking.</div>
					</div>
				</div>
				<div className="column">
					<img src={Yield} alt="Photo2" />
					<div className="text">
						<div className="main-text">Yield</div>
						<div className="sub-text">Ethereum DeFi Yield Aggregator.</div>
					</div>
				</div>
				<div className="column">
					<img src={Marketplace} alt="Photo3" />
					<div className="text">
						<div className="main-text">Marketplace</div>
						<div className="sub-text">Marketplace for digital assets.</div>
					</div>
				</div>
				<div className="column">
					<img src={Reflect} alt="Photo4" />
					<div className="text">
						<div className="main-text">Reflect</div>
						<div className="sub-text">
							Earn Ethereum based on transaction volume
						</div>
					</div>
				</div>
				<div className="column">
					<img src={Dividends} alt="Photo5" />
					<div className="text">
						<div className="main-text">Dividends</div>
						<div className="sub-text">Earn Ethereum based on EETH revenue.</div>
					</div>
				</div>
				<div className="column">
					<img src={Dex} alt="Photo6" />
					<div className="text">
						<div className="main-text">DEX</div>
						<div className="sub-text">Dex aggregator.</div>
					</div>
				</div>
				<div className="column">
					<img src={Tools} alt="Photo7" />
					<div className="text">
						<div className="main-text">Tools</div>
						<div className="sub-text">Build on Ethereum. No coding skills</div>
					</div>
				</div>
				<div className="column">
					<img src={News} alt="Photo8" />
					<div className="text">
						<div className="main-text">News</div>
						<div className="sub-text">Latest news on Ethereum.</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ColumnsComponent;
