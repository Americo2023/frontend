import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
	getAmountsByRecipe,
	getRecipeById,
	getStepsById,
} from "../../Requests/AppData";
import {
	gettingAmountAction,
	gotAmountAction,
} from "../../Store/Actions/amount";
import {
	gettingOneRecipeAction,
	gotOneRecipeAction,
} from "../../Store/Actions/recipe";
import { gettingStepsAction, gotStepsAction } from "../../Store/Actions/step";
import { AppState } from "../../Store/state";

const Recipe = () => {
	const { id } = useParams();
	const dispatch = useDispatch();
	const steps = useSelector((state: AppState) => state.steps.steps);
	const recipe = useSelector((state: AppState) => state.recipe.recipe);
	const amounts = useSelector((state: AppState) => state.amounts.amounts);

	useEffect(() => {
		let cancelled = false;
		let doGetSteps = async (id: number) => {
			dispatch(gettingStepsAction());
			dispatch(gettingOneRecipeAction());
			dispatch(gettingAmountAction());
			const steps = await getStepsById(id);
			const recipe = await getRecipeById(id);
			const amounts = await getAmountsByRecipe(id);
			if (!cancelled) {
				dispatch(gotStepsAction(steps));
				dispatch(gotOneRecipeAction(recipe));
				dispatch(gotAmountAction(amounts));
			}
		};

		doGetSteps(Number(id));
		return () => {
			cancelled = true;
		};
	}, [dispatch, id]);

	return <div>Recipe Component</div>;
};

export default Recipe;
