export const addWine = wine => {
        
    return (dispatch) => {
        fetch("http://localhost:3001/api/v1/wines", {
            method: "POST",
            credentials: 'include', 
            headers: {
                "content-type": 'application/json'
        },
            body: JSON.stringify({
                wine
            })
       })
        .then(response => response.json())
        .then(response => dispatch({type: "ADD_USER", wine: response}))
    }
}

export const getAllWines = () => {
    return (dispatch) => {
        dispatch({type: 'LOADING_WINES', loading: true})
        fetch("http://localhost:3001/api/v1/wines")
        .then(response => response.json())
        .then(response => dispatch({type: "GET_ALL_WINES", wines: response}))
    }
}
