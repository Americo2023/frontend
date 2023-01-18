import {
	GETTINGCOURSES,
	gettingCoursesAction,
} from "../Actions/Course/gettingCoursesAction";
import {
	GOTCOURSES,
	gotCoursesAction,
} from "../Actions/Course/gotCourseAction";
import { initialCourseState } from "../state";

type CourseActions =
	| ReturnType<typeof gettingCoursesAction>
	| ReturnType<typeof gotCoursesAction>;

export const courseReducer = (
	state = initialCourseState,
	action: CourseActions
) => {
	switch (action.type) {
		case GETTINGCOURSES: {
			return {
				...state,
				loading: true,
			};
		}
		case GOTCOURSES: {
			return {
				...state,
				courses: action.courses,
				loading: false,
			};
		}
	}

	return state;
};
