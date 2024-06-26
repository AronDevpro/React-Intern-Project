import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isAuthenticated: false
}
export const loginSlice = createSlice({
    name: 'authentication',
    initialState: initialState,
    reducers: {
        login: (state) =>{
            state.isAuthenticated = true;
        },
        logout: (state) =>{
            state.isAuthenticated = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;