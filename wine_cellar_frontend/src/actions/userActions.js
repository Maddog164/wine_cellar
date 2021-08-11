

export const addUser = user => {
    console.log("useractions", user)
    console.log(user.first_name, user.last_name)
    let formData = user
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            credentials: 'include', 
            headers: {
                "content-type": 'application/json'
            //     "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(response => dispatch({type: "ADD_USER", user: response}))
    }
}

export const getAllUsers = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_USERS', loading: true})
        fetch("http://localhost:3001/api/v1/users")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_ALL_USERS", users: response}))
    }
}

// export const addUser = user => {
//     console.log("useractions", user)
//     return {
//         type: "ADD_USER",
//         user: user
//     }
// }

// export const getAllUsers = () => {
//     return (dispatch) => {
//         dispatch({type: "LOADING_USERS", loading: true})
//         fetch("http://localhost:3000/users")
//         .then(response => response.json())
//         .then(response => dispatch({type: "GET_ALL_USERS", users: response}))
//     }
// }