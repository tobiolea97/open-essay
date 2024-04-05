import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: localStorage.getItem('token') || null,
    status: "idle",
    error: ""
};

const loginSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            state.token = null
            localStorage.removeItem('token');
        },
        login: (state, action) => {
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        }
    }
});

export const selectCurrentUser = (state) => state.token;
export const { logout, login } = loginSlice.actions

export default loginSlice.reducer;