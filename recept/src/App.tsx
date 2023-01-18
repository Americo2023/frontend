/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { fontFamily, fontSize } from "./Styles/styles";
import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./Store/store";
import Thumbnails from "./Components/Thumbnails/Thumbnails";

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<div
				className="App"
				css={css`
					font-family: ${fontFamily};
					font-size: ${fontSize};
				`}
			>
				<Thumbnails />
			</div>
		</Provider>
	);
}

export default App;
