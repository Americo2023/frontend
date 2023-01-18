/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Thumbnail } from "../../Styles/styles";

import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Requests/AppData";
import { gettingCategoriesAction } from "../../Store/Actions/Categories/gettingCategoriesAction";
import { gotCategoriesAction } from "../../Store/Actions/Categories/gotCategoriesAction";
import { AppState } from "../../Store/state";

const Categories = () => {
	const dispatch = useDispatch();
	const categories = useSelector(
		(state: AppState) => state.categories.categories
	);

	useEffect(() => {
		let cancelled = false;
		let doGetCategories = async () => {
			dispatch(gettingCategoriesAction());
			const categories = await getCategories();
			if (!cancelled) {
				dispatch(gotCategoriesAction(categories));
			}
		};

		doGetCategories();
		return () => {
			cancelled = true;
		};
	}, [dispatch]);

	console.log("categories", categories);

	return (
		<div
			css={css`
				width: 1300px;
				display: flex;
				flex-flow: row;
				flex-wrap: wrap;
				justify-content: space-evenly;
			`}
		>
			{categories.map((cat) => (
				<Thumbnail key={cat.food_cat_id} />
			))}
		</div>
	);
};

export default Categories;
