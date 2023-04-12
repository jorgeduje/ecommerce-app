import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    token: '',
    user: {},
    isLogged: false,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLogged = true
        },
        logout: (state, action) => {
            state.isLogged = false
        },
    },
    extraReducers: (builder) => {},
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
