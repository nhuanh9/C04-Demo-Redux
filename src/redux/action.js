import axios from "axios";
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
        const response = await axios.get(
            "http://localhost:3001/students"
        );
        dispatch({
            type: "list",
            payload: response.data
        });
    };
};
