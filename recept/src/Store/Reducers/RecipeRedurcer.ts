import {
	GETTINGONERECIPE,
	GETTINGRECIPE,
	GOTONERECIPE,
	GOTRECIPE,
	gettingRecipeAction,
	gettingOneRecipeAction,
	gotRecipeAction,
	gotOneRecipeAction,
} from "../Actions/recipe";
import { initialRecipeState, initialRecipesState } from "../state";

type recipeActions =
	| ReturnType<typeof gettingRecipeAction>
	| ReturnType<typeof gotRecipeAction>
	| ReturnType<typeof gettingOneRecipeAction>
	| ReturnType<typeof gotOneRecipeAction>;

export const recipeReducer = (
	state = initialRecipeState,
	action: recipeActions
) => {
	switch (action.type) {
		case GETTINGONERECIPE: {
			return {
				...state,
				loading: true,
			};
		}
		case GOTONERECIPE: {
			console.log(action.recipe);
			return {
				...state,
				recipe: action.recipe,
				loading: false,
			};
		}
	}

	return state;
};

export const recipesReducer = (
	state = initialRecipesState,
	action: recipeActions
) => {
	switch (action.type) {
		case GETTINGRECIPE: {
			return {
				...state,
				loading: true,
			};
		}
		case GOTRECIPE: {
			return {
				...state,
				recipes: action.recipes,
				loading: false,
			};
		}
	}

	return state;
};
