import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    isAuthenticated: false,
    isNewUser: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser : (state, action)=>{
            state.user  = action.payload;
            state.isAuthenticated = true;
        },
        setIsNewUser: (state, action)=>{
            state.isNewUser = action.payload;
        },
        signOutUser: (state, action)=>{
            state.user = action.payload;
            state.isAuthenticated = false;
        },
    }
});

export const { setUser, signOutUser, setIsnewUser } = authSlice.actions;
export default authSlice.reducer;


