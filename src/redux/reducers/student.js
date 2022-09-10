const initialState = []
const students = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                action.payload
            ]
        case "list":
            return action.payload
        default:
            return state
    }
}

export default students;
