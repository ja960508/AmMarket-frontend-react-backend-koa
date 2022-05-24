import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import * as authAPI from "../lib/api/auth";

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    const response = await authAPI.login({ username, password });

    return response.data;
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password }) => {
    const response = await authAPI.register({ username, password });

    return response.data;
  }
);

export const check = createAsyncThunk("auth/check", async () => {
  const response = await authAPI.check();

  return response.data;
});

export const logout = createAsyncThunk("auth/logout", async () => {
  const response = await authAPI.logout();

  return response.data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, error: null, loading: false },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: {
    [login.pending]: (state) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [login.rejected]: (state) => {
      state.loading = false;
      state.error = "error!!!";
    },
    [register.pending]: (state) => {
      state.loading = true;
    },
    [register.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [register.rejected]: (state) => {
      state.loading = false;
      state.error = "error!!!";
    },
    [logout.pending]: (state) => {
      state.loading = true;
    },
    [logout.fulfilled]: (state) => {
      state.loading = false;
      state.user = "";
    },
    [logout.rejected]: (state) => {
      state.loading = false;
      state.error = "error!!!";
    },
    [check.pending]: (state) => {
      state.loading = true;
    },
    [check.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [check.rejected]: (state) => {
      state.loading = false;
      state.error = "error!!!";
    },
  },
});

export default authSlice.reducer;
