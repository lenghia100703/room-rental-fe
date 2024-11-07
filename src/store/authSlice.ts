import { createSlice } from "@reduxjs/toolkit";
import { putLocalStorage, removeLocalStorage } from '@/helpers/localStorageHelper.ts'
import { LOCAL_STORAGE_KEYS } from '@/constants/localStorageKey.ts'
import { loginAction, getCurrentUserAction } from './authAction.ts'

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null
    },
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            removeLocalStorage(LOCAL_STORAGE_KEYS.INFO)
            removeLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATION_TOKEN)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.fulfilled, (state, action) => {
                // @ts-ignore
                putLocalStorage(LOCAL_STORAGE_KEYS.AUTHENTICATION_TOKEN, action.payload.data.accessToken)
            })
            .addCase(getCurrentUserAction.fulfilled, (state, action) => {
                // @ts-ignore
                state.isAuthenticated = true
                putLocalStorage(LOCAL_STORAGE_KEYS.INFO, JSON.stringify(action.payload.data))
                // @ts-ignore
                state.user = action.payload.data
            })
            .addCase(getCurrentUserAction.rejected, (state, action) => {
                // @ts-ignore
                state.isAuthenticated = false
                state.user = null
                removeLocalStorage(LOCAL_STORAGE_KEYS.INFO)
            })
    },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;
