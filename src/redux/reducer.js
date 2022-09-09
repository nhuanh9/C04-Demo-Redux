import {combineReducers} from "redux";
import students from "./studentReducer";
import products from "./productReducer";

const reducers = combineReducers({
    students: students,
    products: products
})

export default reducers;
