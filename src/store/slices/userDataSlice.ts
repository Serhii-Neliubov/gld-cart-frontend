import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

import AuthService from "services/AuthService";

import { RootState } from "store/store.ts";

import {API_URL} from "utils/interceptors.ts";

import IUser from "models/IUser";
import { AuthResponse } from "models/response/AuthResponse.ts";

const initialState = {
    user: {} as IUser,
    isAuth: false,
};

export const login = createAsyncThunk(
    "/auth/login",
    async (payload: { email: string; password: string, isRemember:boolean }) => {
        try {
            const response = await AuthService.login(payload.email, payload.password);

            if(payload.isRemember){
                localStorage.setItem("token", response.data.accessToken);
            }

            return response.data;
        } catch (error){
            toast.error('Incorrect password or email');
        }
    }
);

export const register = createAsyncThunk(
    "/auth/signup",
    async (payload: {
        surname: string;
        name: string;
        role: string;
        email: string;
        password: string;
        isRemember: boolean;
    }) => {
        const response = await AuthService.registration(
            payload.role,
            payload.name,
            payload.surname,
            payload.email,
            payload.password
        );

        if(payload.isRemember){
            localStorage.setItem("token", response.data.accessToken);
        }

        return response.data;
    }
);

export const checkAuth = createAsyncThunk("/auth/refresh", async () => {
    try {
        const response = await axios.get<AuthResponse>(`${API_URL}/auth/refresh`, {
            withCredentials: true,
        });
        localStorage.setItem("token", response.data.accessToken);
        return response.data;
    }
    catch (error){
        console.log(error);
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
                try {
                    localStorage.setItem("token", action.payload.accessToken);
                    state.isAuth = true;
                    toast.success("You have successfully been logged!");
                    state.user = action.payload.user;
                } catch (error){
                    console.log(error);
                }
            })
            .addCase(register.fulfilled, (state, action) => {
                try {
                    if (action.payload) {
                        localStorage.setItem("token", action.payload.accessToken);
                        state.isAuth = true;
                        toast.success("You have successfully been registered!");
                        state.user = action.payload.user;
                    }
                } catch (error){
                    console.log(error);
                }
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                try{
                    if (action.payload) {
                        state.isAuth = true;
                        state.user = action.payload.user;
                    }
                } catch (error){
                    console.log(error);
                }
            })
            .addCase(checkAuth.rejected, (state) => {
                state.isAuth = false;
                state.user = {} as IUser;
            });
    },
});
export const { logout } = authDataSlice.actions;
export default authDataSlice.reducer;

export const selectIsAuth = (state: RootState) => state.userDataSlice.isAuth;
export const userDataSelector = (state: RootState) => state.userDataSlice.user;
