import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HeaderComponent from "./HeaderComponent";
import SidebarComponent from "./SidebarComponent";
import MainTitleComponent from "./MainTitleComponent";
import ColumnsComponent from "./ColumnsComponent";
import DescriptionComponent from "./DescriptionComponent";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<HeaderComponent />
		<SidebarComponent />
		<MainTitleComponent />
		<DescriptionComponent />
		<ColumnsComponent />
	</React.StrictMode>
);

reportWebVitals();
