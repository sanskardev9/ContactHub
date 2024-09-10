import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        accessToken: null,
    },
    reducers: {
        setAccessToken(state, action) {
            state.accessToken = action.payload;
            console.log(action.payload);
        },
        clearAccessToken(state) {
            state.accessToken = null;
        }
    }
});

export const { setAccessToken, clearAccessToken } = authSlice.actions;
export default authSlice.reducer;