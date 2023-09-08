import { configureStore } from "@reduxjs/toolkit";
import users from "./slice/users";

const store=configureStore({
    reducer:{
        users:users
    }
})

export default store