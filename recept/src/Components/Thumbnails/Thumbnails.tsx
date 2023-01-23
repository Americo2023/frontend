import React, { useEffect } from "react";
import { getMaltid } from "../../Requests/AppData";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../Store/state";
import {
	gettingMaltidAction,
	gotMaltidAction,
} from "../../Store/Actions/maltid";
import Categories from "../Categories/Categories";
import Courses from "../Maltid/Maltid";

const Thumbnails = () => {
	const dispatch = useDispatch();
	const maltid = useSelector((state: AppState) => state.maltid.maltid);

	useEffect(() => {
		let cancelled = false;
		let doGetMaltid = async () => {
			dispatch(gettingMaltidAction());
			const maltid = await getMaltid();
			if (!cancelled) {
				dispatch(gotMaltidAction(maltid));
			}
		};
		doGetMaltid();
		return () => {
			cancelled = true;
		};
	}, [dispatch]);

	console.log("courses ", maltid);
	return (
		<>
			<Categories />
			<Courses />
		</>
	);
};

export default Thumbnails;
