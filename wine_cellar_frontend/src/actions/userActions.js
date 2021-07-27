

export const addUser = user => {
    console.log("useractions", user)
    return {
        type: "ADD_USER",
        user: user
    }
}

// export const getAllUsers = () => {
//     return (dispatch) => {
//         dispatch({type: "LOADING_USERS", loading: true})
//         fetch("http://localhost:3001/users")
//         .then(response => response.json())
//         .then(response => dispatch({type: "GET_ALL_USERS", users: response}))
//     }
// }