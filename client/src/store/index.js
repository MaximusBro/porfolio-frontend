import { configureStore } from '@reduxjs/toolkit';
import posts from '../components/postList/PostListSlice';
import user from "./slices/userSlices"
/* 
const store = configureStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()) */

const stringMiddleware = () => (dispatch) => (action) => {
	if (typeof action === "string") {
		return dispatch({
			type: action
		})
	}
	return dispatch(action)
};


const store = configureStore({
	reducer: { posts, user },
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
	devTools: process.env.NODE_ENV !== "production",

})

	/* compose(
		enhancer,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	) */;

export default store;