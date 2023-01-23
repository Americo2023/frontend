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
import { getMaltid } from "../../Requests/AppData";
import {
	gettingMaltidAction,
	gotMaltidAction,
} from "../../Store/Actions/maltid";
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

const Maltid = () => {
	const dispatch = useDispatch();
	const maltid = useSelector((state: AppState) => state.maltid.maltid);
	const classes = useStyles();

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

	return (
		<>
			<Container className="mb-3">
				<h3 className="block mt-0">Måltid</h3>
				<Grid container spacing={4}>
					{maltid.map((c) => (
						<Grid item key={c.maltid_id}>
							<Paper
								className={classes.paper}
								style={{
									backgroundImage: `linear-gradient(
								rgba(0, 0, 0, 0.4), 
								rgba(0, 0, 0, 0.4)
							  ), url("/Assets/${c.maltid_img}")`,
									backgroundSize: "cover",
								}}
							>
								<figcaption>{c.maltid_name}</figcaption>
							</Paper>
						</Grid>
					))}
				</Grid>
			</Container>
		</>
	);
};

export default Maltid;
