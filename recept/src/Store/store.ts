import {
	Store,
	legacy_createStore as createStore,
	combineReducers,
} from "redux";
import { categoryReducer } from "./Reducers/CategoryReducer";
import { courseReducer } from "./Reducers/CourseReducer";
import { AppState } from "./state";

const rootReducer = combineReducers<AppState>({
	courses: courseReducer,
	categories: categoryReducer,
});

export function configureStore(): Store<AppState> {
	const store = createStore(rootReducer, undefined);
	return store;
}
