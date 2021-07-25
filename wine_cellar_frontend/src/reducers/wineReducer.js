const wineReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_WINE":
            return [...state, action.wine]

        default:
            return state;
    }
}
export default wineReducer