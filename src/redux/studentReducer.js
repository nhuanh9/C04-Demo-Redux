const initialState = [
    {
        name: 'NA',
        age: 12,
        class: 'C04'
    },
    {
        name: 'NAL',
        age: 18,
        class: 'C04'
    }
]
const students = (state= initialState, action) => {
    switch (action.type) {
        case "add":
            return [
                ...state,
                action.payload
            ]
        default:
            return state
    }
}

export default students;
