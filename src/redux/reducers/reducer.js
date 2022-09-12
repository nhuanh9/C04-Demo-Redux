import {combineReducers} from "redux";
import students from "./student";
import products from "./product";
import userReducer from "../slice/userSlice";
import userSlice from "../slice/userSlice";

const reducers = combineReducers({
    students: students,
    products: products,
    users: userSlice
})

export default reducers;
