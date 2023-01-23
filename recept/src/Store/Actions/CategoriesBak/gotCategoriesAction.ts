import { CategoryModel } from "../../../Models/CategoryModel";

export const GOTCATEGORIES = "GotCategories";
export const gotCategoriesAction = (categories: CategoryModel[]) =>
	({ type: GOTCATEGORIES, categories: categories } as const);
