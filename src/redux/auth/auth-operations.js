import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

export const register = createAsyncThunk('auth/register', async (dataUser, thunkAPI) => {
    try {
        const response = await axios.post('/user/signup', dataUser);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logIn = createAsyncThunk('auth/login', async (dataUser, thunkAPI) => {
    try {
        const response = await axios.post('/user/login', dataUser);
        token.set(response.data.token);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const logOut = createAsyncThunk('auth/logout', async(_, thunkAPI) => {
    try {
await axios.post('/user/logout');
token.unset()
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})