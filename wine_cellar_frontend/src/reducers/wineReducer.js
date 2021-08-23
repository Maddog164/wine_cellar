const wineReducer = (state = [], action) => {
    //     // const wineReducer = (state = [], action) => {
    
    //     console.log( action.payload)
        // console.log("userReducer", state.users)
        console.log(action)
        console.log(state)
        console.log(action.wine)
    
        switch (action.type) {
            
            // case "ADD_WINE":
            //     return {...state, wines: [...state.wines, action.wine]}        
    
            case "LOADING_WINES":
                return {...state.wines, loading: true}
            case "GET_ALL_WINES":
                return {...state, wines: action.wines, loading: false}
            default:
               return state
        }
    }
    
    export default wineReducer