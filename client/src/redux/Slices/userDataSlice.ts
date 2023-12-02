import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import IUser from "../../models/IUser";
import AuthService from "../../services/AuthService";
import axios from "axios";
import { AuthResponse } from "../../models/response/AuthResponse";
import { API_URL } from "../../http";
import { RootState } from "../store";
import { setValue } from "./isLoadingSlice";

const initialState = {
  user: {} as IUser,
  isAuth: false,
};

export const login = createAsyncThunk(
  "/login",
  async (payload: { email: string; password: string }) => {
    const response = await AuthService.login(payload.email, payload.password);
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
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
    const response = await AuthService.registration(
      payload.type,
      payload.name,
      payload.surname,
      payload.email,
      payload.password
    );
    localStorage.setItem("token", response.data.accessToken);
    return response.data; // Возвращаем данные для обработки в extraReducers
  }
);

export const checkAuth = createAsyncThunk("/refresh", async () => {
  setValue(true);
  try {
    const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem("token", response.data.accessToken);
    return response.data;
  } catch (e) {
    console.log(e);
  } finally {
    setValue(false);
  }
});

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
      AuthService.logout();
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
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.isAuth = true;
        state.user = action.payload.user; // Set the user data from the action payload
      })
      .addCase(checkAuth.rejected, (state) => {
        state.isAuth = false;
        state.user = {} as IUser;
      });
  },
});
export const { setAuth, setUser, logout } = authDataSlice.actions;
export default authDataSlice.reducer;

export const selectIsAuth = (state: RootState) => state.userDataSlice.isAuth;
export const userDataSelector = (state: RootState) => state.userDataSlice.user;
