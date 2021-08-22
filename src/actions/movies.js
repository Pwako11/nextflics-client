export const setMovies = movies =>{
    return {
        type: "SET_MOVIES",
        movies
    }
}

export const getMovies = () => {
    let allMovies;

    return dispatch => { 
        return fetch("http://localhost:3010/api/v1/movies", {
            credentials: "include",
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then( response => response.json())
        .then(response =>{
            console.log( "in get movies fetch response", response)
            allMovies = response.data
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setMovies (allMovies))
            }
        })
        .catch(console.log)
    }
}

export const updateMovieSuccess = movie => {
    return{
        type: "UPDATE_MOVIE",
        movie
    }
}

// export const UpdateMovieRating = () => {
//     return dispatch => {
//         return fetch("http://localhost:3010/api/v1/movies", {
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

export const updateLikes = (movie, movies) => {
    console.log("In updateLikes - movie", movie)
    console.log("Step 1")
    let updatedMovie;
    const movieId = movie.id

    return dispatch =>{
        console.log("step 2")

        fetch(`http://localhost:3010/api/v1/movies/${movieId}`, {
            credentials: "include",
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({likes: movie.likes += 1})
            })
            .then( resp => resp.json())
            .then(response =>{
                console.log("step 3")
                console.log("in movie fetch reponse", response)
                updatedMovie = response.data
            if(response.error){
               alert(response.error)
            }else{
               dispatch(updateMovieSuccess(updatedMovie))
               dispatch(setMovies (movies))
            }
        })
    .catch(console.log)
    }
}