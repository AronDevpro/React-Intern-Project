import {configureStore} from "@reduxjs/toolkit";
import todoSliceReducer from "../Features/Todo.js";
import loginSliceReducar from "../Features/Login.js";

const store = configureStore({
    reducer: {
        todo: todoSliceReducer,
        login: loginSliceReducar,
    }
})
export default store;