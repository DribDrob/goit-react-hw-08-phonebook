import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/authApi';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk(
  'auth/register',
  async (_, { rejectWithValue }) => {
    try {
        const data = await authApi.registerUser();
        token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/login',
  async (_, { rejectWithValue }) => {
    try {
        const data = await authApi.logIn();
         token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
        await authApi.logOut();
        token.unset();
          } catch (error) {
      return rejectWithValue(error);
    }
  },
);

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      console.log('Токена нет, уходим из fetchCurrentUser');
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
        const data = await authApi.fetchCurrentUser();
        token.unset();
      return data;
    } catch (error) {
        console.log(error.message);
    }
  },
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;