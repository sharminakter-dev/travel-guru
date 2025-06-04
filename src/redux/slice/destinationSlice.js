import { createSlice } from '@reduxjs/toolkit';

const initialState = {}

const destinationSlice = createSlice({
    name: 'destination',
    initialState,
    reducers:{
        setDestination: (state, action)=>{
            return action.payload; 
         }
    }
});

export const {setDestination} = destinationSlice.actions;
export default destinationSlice.reducer;