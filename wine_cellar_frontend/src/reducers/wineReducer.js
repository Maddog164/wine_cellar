const wineReducer = (state = [], action) => {
       
        switch (action.type) {
               
            case "LOADING_WINES":
                return {...state.wines, loading: true}
            case "GET_ALL_WINES":
                return {...state, wines: action.wines, loading: false}
            default:
               return state
        }
    }
    
    export default wineReducer