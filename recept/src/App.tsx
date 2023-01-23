import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { configureStore } from "./Store/store";
import Thumbnails from "./Components/Thumbnails/Thumbnails";
import Container from "@material-ui/core/Container";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Recipes from "./Components/Recipes/Recipes";
import Recipe from "./Components/Recipe/Recipe";

const store = configureStore();

function App() {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<Container maxWidth="lg">
					<Routes>
						<Route path="/" element={<Thumbnails />} />
						<Route path="recipes/:id" element={<Recipes />} />
						<Route path="recipe/:id" element={<Recipe />} />
					</Routes>
				</Container>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
