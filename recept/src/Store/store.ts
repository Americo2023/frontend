import {
	Store,
	legacy_createStore as createStore,
	combineReducers,
} from "redux";
import { categoryReducer } from "./Reducers/CategoryReducer";
import { maltidReducer } from "./Reducers/MaltidReducer";
import { recipesReducer, recipeReducer } from "./Reducers/RecipeRedurcer";
import { stepReducer } from "./Reducers/StepReducer";
import { amountReducer } from "./Reducers/AmountReducer";
import { AppState } from "./state";

const rootReducer = combineReducers<AppState>({
	maltid: maltidReducer,
	categories: categoryReducer,
	recipes: recipesReducer,
	recipe: recipeReducer,
	steps: stepReducer,
	amounts: amountReducer,
});

export function configureStore(): Store<AppState> {
	const store = createStore(rootReducer, undefined);
	return store;
}
