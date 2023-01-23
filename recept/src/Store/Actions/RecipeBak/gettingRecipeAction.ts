export const GETTINGRECIPE = "GettingRecipe";
export const gettingRecipeAction = () => ({ type: GETTINGRECIPE } as const);

export const GETTINGONERECIPE = "GettingOneRecipe";
export const gettingOneRecipeAction = () =>
	({ type: GETTINGONERECIPE } as const);
