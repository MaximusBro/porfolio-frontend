import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: null,
	email: null,
	id: null,
	avatarSRC: null,
	token: null
}

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser(state, action) {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.id = action.payload.id;
			state.avatarSRC = action.payload.avatarSRC;
			state.token = action.payload.token;
		},
		removeUser(state) {
			state.name = null;
			state.email = null;
			state.id = null;
			state.avatarSRC = null;
			state.token = null;
		}
	},
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer