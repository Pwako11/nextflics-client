export const setMovies = movies =>{
    return {
        type: "SET_MOVIES",
        movies
    }
}

export const getMovies = () => {
    return dispatch => { 
        return fetch("http://localhost:3000/api/v1/movies", {
            credentials: "include",
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then( response => response.json())
        .then(response =>{
            console.log("movie fetch", response)
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setMovies (response))
            }
        })
        .catch(console.log)
    }
}

// export const UpdateMovieRating = () => {
//     return dispatch => {
//         return fetch("http://localhost:3000/api/v1/movies", {
//             method: "POST",
//             headers:{
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify()
//         })
//         .then( response => response.json())
//         .then(response =>{
//             console.log( "this the POST fetch return for movies", response)
//             if(response.error){
//                 alert(response.error)
//             }else{
//                 dispatch(setMovies (response))
//             }
//         })
//         .catch(console.log)
//     }
// }