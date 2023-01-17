import { createSlice, createSelector, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const postsAdapter = createEntityAdapter();

const initialState = postsAdapter.getInitialState({
	postsLoadingStatus: "idle"
});

export const fetchPosts = createAsyncThunk(
	"posts/fetchHeroes",
	() => {
		const { request } = useHttp()
		return request("http://localhost:3001/posts")
	}
)


const postListSlice = createSlice({
	name: "posts",
	initialState,
	reducers: {
		PostCreated: (state, action) => {
			postsAdapter.addOne(state, action.payload);
		},
		postsLoadingStatusChange: (state, action) => { state.postsLoadingStatus = action.payload }
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPosts.pending, state => { state.postsLoadingStatus = "loading" })
			.addCase(fetchPosts.fulfilled, (state, action) => {
				state.postsLoadingStatus = "idle";
				postsAdapter.setAll(state, action.payload);
			}).addCase(fetchPosts.rejected, state => { state.postsLoadingStatus = "error" })
			.addDefaultCase(() => { })
	}
}
);

const { actions, reducer } = postListSlice;

export default reducer;

const { selectAll } = postsAdapter.getSelectors(state => state.posts)

export const PostCardsSelector = createSelector(
	selectAll,
	(posts) => {
		return posts
	}
);
export const {
	postsLoadingStatusChange,
	PostCreated
} = actions;