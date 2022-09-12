import axios from "axios";
import xxx from "../apis/api";
export const addStudent = (payload) => {
    return async dispatch => {
        const response = await axios.post(
            "http://localhost:3001/students",
            payload
        );
        dispatch({
            type: "add",
            payload: payload
        });
    };
}


export const getStudent = () => {
    return async dispatch => {
        const response = await xxx.get(
            "http://localhost:8000/users"
        );
        dispatch({
            type: "list",
            payload: response.data
        });
    };
};
