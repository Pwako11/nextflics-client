export const setCurrentUser = user =>{
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () =>{
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const login = credentials => {
    console.log("Credentials are", credentials)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then( response => response.json())
        .then(user =>{
            if(user.error){
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
            }
        })
        .catch(console.log)
    }
}

export const logout = () =>{
   return dispatch =>{
       dispatch(clearCurrentUser)
      return fetch("http://localhost:3000/api/v1/logout",{
      credentials: "include",
      method: "DELETE"
        }) 
    }
}
    
export const getCurrentUser = () =>{
    console.log("Dispatching get current user")
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then( response => response.json())
        .then(user =>{
            if(user.error){
                alert(user.error)
            }else{
                dispatch(setCurrentUser(user))
                console.log("in get current user fetch", user)
            }
        })
        .catch(console.log)
    }
}