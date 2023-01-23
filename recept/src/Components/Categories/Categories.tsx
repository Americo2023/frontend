import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getCategories } from "../../Requests/AppData";
import {
	gotCategoriesAction,
	gettingCategoriesAction,
} from "../../Store/Actions/category";
import { AppState } from "../../Store/state";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Container, createStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { useNavigate } from "react-router-dom";

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

const Categories = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const categories = useSelector(
		(state: AppState) => state.categories.categories
	);
	const classes = useStyles();

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

	const handleClick = (id: number) => {
		navigate(`recipes/${id}`);
	};

	return (
		<>
			<Container className="mb-3">
				<h3 className="block mt-0">Huvudkategori</h3>
				<Grid container spacing={4}>
					{categories.map((cat) => (
						<Grid item key={cat.category_id}>
							<Paper
								className={classes.paper}
								style={{
									backgroundImage: `linear-gradient(
								rgba(0, 0, 0, 0.4), 
								rgba(0, 0, 0, 0.4)
							  ), url("/Assets/${cat.category_img}")`,
									backgroundSize: "cover",
								}}
								onClick={() => handleClick(cat.category_id)}
							>
								<figcaption>{cat.category_name}</figcaption>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Categories;
