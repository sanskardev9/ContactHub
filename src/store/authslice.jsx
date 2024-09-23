import { createSlice } from "@reduxjs/toolkit";
import { login, refreshToken } from "./contactThunks";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Login
    builder
    .addCase(login.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken = accessToken;
      state.user = user;
      console.log(accessToken, user);
    });
    // RefreshToken
    builder
    .addCase(refreshToken.fulfilled, (state, action) => {
        const newAccessToken = action.payload;
        state.accessToken = newAccessToken;
        console.log('NewAccessToken : ',newAccessToken);
        
    })
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
