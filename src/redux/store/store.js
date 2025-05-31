import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../slice/destinationSlice';
import bookingFormReducer from '../slice/bookingFormSlice';
const store = configureStore({
    reducer: {
        destination: destinationReducer,
        bookingForm: bookingFormReducer,
    },
});

export default store;