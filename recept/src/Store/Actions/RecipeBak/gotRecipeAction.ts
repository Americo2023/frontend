import { RecipeModel } from "../../../Models/RecipeModel";

export const GOTRECIPE = "GotRecipe";
export const gotRecipeAction = (recipes: RecipeModel[]) =>
	({ type: GOTRECIPE, recipes: recipes } as const);

export const GOTONERECIPE = "GotOneRecipe";
export const gotOneRecipeAction = (recipe: RecipeModel) =>
	({ type: GOTONERECIPE, recipe: recipe } as const);
