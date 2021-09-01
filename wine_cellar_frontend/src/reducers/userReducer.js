// function userReducer(state = {users: [], loading: false}, action) {
//     // function userReducer(state = {users: [], loading: false}, action) {
const userReducer = (state = [], action) => {
//     // const wineReducer = (state = [], action) => {

//     console.log( action.payload)
    // console.log("userReducer", state.users)
    // console.log(action)
    // console.log(state)
    // console.log(action.user)

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