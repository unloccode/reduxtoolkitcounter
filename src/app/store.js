import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice';
import contactSlice from "../features/counter/contactSlice";

//our store
//this creates a Redux store and automatically configure the Redux DevTools extension
export default configureStore({
    reducer: {
        counter: counterReducer,
        simu: contactSlice,
    },
});