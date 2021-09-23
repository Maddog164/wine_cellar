

export const addUser = user => {
    console.log("useractions", user)
    console.log(user.first_name, user.last_name)
    
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            credentials: 'include', 
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify({
                user
            })
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

export const getUserWines = (user) => {
    return (dispatch) => {
        dispatch({type: 'LOADING_WINES', loading: true})
        fetch(`http://localhost:3001/api/v1/users/${user.id}/wines`)
        .then(response => response.json())
        .then(response => dispatch({type: "GET_USER_WINES", wines: response}))
    }
}