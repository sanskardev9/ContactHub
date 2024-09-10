import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
        user: null,
    },
    reducers: {
        setAccessToken(state, action) {
            const {token ,user} = action.payload;
            state.accessToken = token;
            state.user = user;
        },
        clearAccessToken(state) {
            state.accessToken = null;
            state.user = null;
        }
    }
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;