import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    user: {},
    isNewUser: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        setUser : (state, action)=>{
            state.user  = action.payload;
        },
        setIsNewUser: (state, action)=>{
            state.isNewUser = action.payload;
        },
        signOutUser: (state, action)=>{
            state.user = action.payload;
        },
    }
});

export const { setUser, signOutUser, isNewUser } = authSlice.actions;
export default authSlice.reducer;


