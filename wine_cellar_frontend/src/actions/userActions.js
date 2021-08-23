

export const addUser = user => {
    console.log("useractions", user)
    console.log(user.first_name, user.last_name)
    // let formData = user
    // console.log(formData)
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            credentials: 'include', 
            headers: {
                "content-type": 'application/json'
            //     "Accept": "application/json"
            },
            body: JSON.stringify({
                user
            })
       })
        .then(response => response.json())
        .then(response => dispatch({type: "ADD_USER", user: response}))
        //.then(users => dispatch({type: 'ADD_USER', payload: user}))
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
        fetch("http://localhost:3001/api/v1/wines/${user.id}")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_USER_WINES", wines: response}))
    }
}