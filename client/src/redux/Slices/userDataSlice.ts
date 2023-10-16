import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../models/IUser";
import AuthService from "../../services/AuthService";

const initialState = {
  user: {} as IUser,
  isAuth: false,
};

export const login = createAsyncThunk(
  "/login",
  async (payload: { email: string; password: string }) => {
    try {
      const response = await AuthService.login(payload.email, payload.password);
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const register = createAsyncThunk(
  "/signup",
  async (payload: {
    surname: string;
    name: string;
    type: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await AuthService.registration(
        payload.type,
        payload.name,
        payload.surname,
        payload.email,
        payload.password
      );
      console.log(response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

const authDataSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      state.isAuth = false;
      state.user = {} as IUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);
        state.isAuth = true;
        state.user = action.payload.user;
      })
      .addCase(register.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload.accessToken);
        state.isAuth = true;
        state.user = action.payload.user;
      });
  },
});

export const { setAuth, setUser, logout } = authDataSlice.actions;

export default authDataSlice.reducer;
