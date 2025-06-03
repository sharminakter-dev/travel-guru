import { configureStore } from '@reduxjs/toolkit';
import destinationReducer from '../slice/destinationSlice';
import bookingFormReducer from '../slice/bookingFormSlice';
import authReducer, {initialState as authInitialState} from '../slice/authSlice';


const store = configureStore({
    reducer: {
        destination: destinationReducer,
        bookingForm: bookingFormReducer,
        auth: authReducer, 
    },
});


export default store;