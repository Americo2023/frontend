import { CategoryModel } from "../../Models/CategoryModel";

export const GOTCATEGORIES = "GotCategories";
export const gotCategoriesAction = (categories: CategoryModel[]) =>
	({ type: GOTCATEGORIES, categories: categories } as const);

export const GETTINGCATEGORIES = "GettingCategories";
export const gettingCategoriesAction = () =>
	({ type: GETTINGCATEGORIES } as const);
