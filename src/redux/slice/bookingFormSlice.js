import { createSlice } from "@reduxjs/toolkit";

const initialState = {}

const bookingFormSlice = createSlice({
    name: 'bookingForm',
    initialState,
    reducers:{
        setBookingForm: (state, action)=>{
            return action.payload;
        }
    }
});
export const {setBookingForm} = bookingFormSlice.actions;
export default bookingFormSlice.reducer;