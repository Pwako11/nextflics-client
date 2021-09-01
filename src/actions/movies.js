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

export const updateLikes = (movie, movies, movieID) => {

    let updatedMovie;

    return dispatch =>{
         
        fetch(`http://localhost:3010/api/v1/movies/${movieID}`, {
            credentials: "include",
            method: 'PATCH',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify({likes: movie.attributes.likes += 1})
            })
            .then( resp => resp.json())
            .then(response =>{
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