import { CourseModel } from "../../../Models/CourseModel";

export const GOTCOURSES = "GotCourses";

export const gotCoursesAction = (courses: CourseModel[]) =>
	({ type: GOTCOURSES, courses: courses } as const);
