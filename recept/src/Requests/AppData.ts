import { CourseModel } from "../Models/CourseModel";
import { FoodCategoryModel } from "../Models/FoodCategoryModel";
import { http } from "./http";

export const getCourses = async (): Promise<CourseModel[]> => {
	let courses: CourseModel[] = [];
	const result = await http<CourseModel[]>({
		path: "/Course",
	});

	if (result.ok && result.body) {
		courses = result.body;
	}

	return courses;
};

export const getCategories = async (): Promise<FoodCategoryModel[]> => {
	let categories: FoodCategoryModel[] = [];

	const result = await http<FoodCategoryModel[]>({
		path: "/FoodCategory",
	});

	if (result.ok && result.body) {
		categories = result.body;
	}

	return categories;
};
