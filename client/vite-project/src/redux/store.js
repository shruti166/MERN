import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from '../redux/loaderSlice'
import userReducer  from "../redux/userSlice";

const store = configureStore({
    reducer: {
        loader:loaderReducer,
        user: userReducer
    }
})

export default store