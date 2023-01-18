import { FoodCategoryModel } from "../../../Models/FoodCategoryModel";

export const GOTCATEGORIES = "GotCategories";
export const gotCategoriesAction = (categories: FoodCategoryModel[]) =>
	({ type: GOTCATEGORIES, categories: categories } as const);
