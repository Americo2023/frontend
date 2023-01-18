import { CourseModel } from "../Models/CourseModel";
import { FoodCategoryModel } from "../Models/FoodCategoryModel";

export interface CourseState {
	readonly loading: boolean;
	readonly courses: CourseModel[];
	readonly searched: CourseModel[];
}

export interface CategoryState {
	readonly loading: boolean;
	readonly categories: FoodCategoryModel[];
	readonly searched: FoodCategoryModel[];
}

export const initialCourseState: CourseState = {
	loading: false,
	courses: [],
	searched: [],
};

export const initialCategoryState: CategoryState = {
	loading: false,
	categories: [],
	searched: [],
};

export interface AppState {
	readonly courses: CourseState;
	readonly categories: CategoryState;
}
