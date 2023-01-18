import {
	Store,
	legacy_createStore as createStore,
	combineReducers,
} from "redux";
import { courseReducer } from "./Reducers/CourseReducer";
import { AppState } from "./state";

const rootReducer = combineReducers<AppState>({
	courses: courseReducer,
});

export function configureStore(): Store<AppState> {
	const store = createStore(rootReducer, undefined);
	return store;
}
