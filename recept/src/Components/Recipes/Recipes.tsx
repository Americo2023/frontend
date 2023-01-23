import {
	Container,
	createStyles,
	Grid,
	makeStyles,
	Paper,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getRecipesByCategory } from "../../Requests/AppData";
import {
	gettingRecipeAction,
	gotRecipeAction,
} from "../../Store/Actions/recipe";
import { AppState } from "../../Store/state";

const useStyles = makeStyles(() =>
	createStyles({
		paper: {
			height: 250,
			width: 250,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	})
);

const Recipes = () => {
	const navigate = useNavigate();
	const { id } = useParams();
	const dispatch = useDispatch();
	const recipes = useSelector((state: AppState) => state.recipes.recipes);
	const classes = useStyles();

	useEffect(() => {
		let cancelled = false;
		let doGetRecipes = async (typeId: number) => {
			dispatch(gettingRecipeAction());
			const recipes = await getRecipesByCategory(typeId);
			if (!cancelled) {
				dispatch(gotRecipeAction(recipes));
			}
		};

		doGetRecipes(Number(id));
		return () => {
			cancelled = true;
		};
	}, [dispatch, id]);

	const handleClick = (id: number) => {
		navigate(`./recipe/${id}`);
	};

	return (
		<Container className="mb-3">
			<h3 className="block mt-0">Recept</h3>
			<Grid container spacing={4}>
				{recipes.map((r) => (
					<Grid item key={r.recipe_id}>
						<Paper
							className={classes.paper}
							style={{
								backgroundImage: `linear-gradient(
							rgba(0, 0, 0, 0.4), 
							rgba(0, 0, 0, 0.4)
						  ), url("/Assets/${r.recipe_img}")`,
								backgroundSize: "cover",
							}}
							onClick={() => handleClick(r.recipe_id)}
						>
							<figcaption>{r.recipe_name}</figcaption>
						</Paper>
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

export default Recipes;
