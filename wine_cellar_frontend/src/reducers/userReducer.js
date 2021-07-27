function userReducer(state = {users: [], loading: false}, action) {

    console.log("userReducer", state.users)

    switch (action.type) {
        
        case "ADD_USER":
            return {...state, users: [...state.users, action.user]}        

        case "LOADING_USERS":
            return {...state.users, loading: true}
        case "GET_ALL_USERS":
            return {...state, users: action.users, loading: false}
        default:
           return state
    }
}

export default userReducer