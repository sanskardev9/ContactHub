import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authslice";
import contactReducer from './contact-slice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        contact: contactReducer,
    }
});

export default store;
