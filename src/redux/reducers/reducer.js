import {combineReducers} from "redux";
import students from "./student";
import products from "./product";

const reducers = combineReducers({
    students: students,
    products: products
})

export default reducers;
