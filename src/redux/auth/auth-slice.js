import { createSlice } from "@reduxjs/toolkit";
import { register, logIn, logOut } from "./auth-operations";


const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing:false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: {
[register.fulfilled](state, action) {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
},
[logIn.fulfilled](state, action) {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
},
[logOut.fulfilled](state) {
    state.user = { name: null, email: null };
    state.isLoggedIn = false;
    state.token = null;
  },
  [refreshUser.pending](state) {
    state.isRefreshing = true;
  },
  [refreshUser.fulfilled](state, action) {
    state.isRefreshing = false;
    state.user = action.payload;
    state.isLoggedIn = true;
  },
  [refreshUser.rejected](state) {
    state.isRefreshing = false;
  },
    },
});


export const authReducer =  authSlice.reducer;