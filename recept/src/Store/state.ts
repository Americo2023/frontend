import { CourseModel } from "../Models/CourseModel";

export interface CourseState {
	readonly loading: boolean;
	readonly courses: CourseModel[];
	readonly searched: CourseModel[];
}

export const initialCourseState: CourseState = {
	loading: false,
	courses: [],
	searched: [],
};

export interface AppState {
	readonly courses: CourseState;
}
