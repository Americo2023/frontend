import { CourseModel } from "../Models/CourseModel";
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
