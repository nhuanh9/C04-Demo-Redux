const initialState = [
    {
        name: 'NA',
        price: 12
    },
    {
        name: 'NAL',
        price: 18
    }
]
const products = (state= initialState, action) => {
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

export default products;
