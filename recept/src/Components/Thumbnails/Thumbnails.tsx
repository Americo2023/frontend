import React, { useEffect } from "react";
import { getCourses } from "../../Requests/AppData";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Store/state";
import { gettingCoursesAction } from "../../Store/Actions/Course/gettingCoursesAction";
import { gotCoursesAction } from "../../Store/Actions/Course/gotCourseAction";

const Thumbnails = () => {
	const dispatch = useDispatch();
	const courses = useSelector((state: AppState) => state.courses.courses);

	useEffect(() => {
		let cancelled = false;
		let doGetCourses = async () => {
			dispatch(gettingCoursesAction());
			const courses = await getCourses();
			if (!cancelled) {
				dispatch(gotCoursesAction(courses));
			}
		};
		doGetCourses();
		return () => {
			cancelled = true;
		};
	}, [dispatch]);

	console.log("courses ", courses);
	return <div>Thumbnails Component</div>;
};

export default Thumbnails;
