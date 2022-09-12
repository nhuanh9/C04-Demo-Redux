import {createSlice} from "@reduxjs/toolkit";
import xxx from "../../apis/api";

const userSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        add(action, state) {

        },
        findAll(state, action) {
            state = action.payload;
        }
    }
})
export const getUsers = () => {
    return async dispatch => {
        const response = await xxx.get(
            "http://localhost:8000/users"
        );
        dispatch(findAll(response.data));
    };
};

export const {add, findAll} = userSlice.actions;
export default userSlice.reducer
