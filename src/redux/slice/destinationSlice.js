import { createSlice } from '@reduxjs/toolkit';

const destinationSlice = createSlice({
    name: 'destination',
    initialState: {
        destination: {},
        loading: false,
        error: null,
    },
    reducers:{
        setDestination: (state, action)=>{
            state.destination = action.payload; 
         }
    }
});

export const {setDestination} = destinationSlice.actions;
export default destinationSlice.reducer;