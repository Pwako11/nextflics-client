export default (state = [], action) =>{
    switch (action.type) {
        case "SET_MOVIES":
            return action.movies
        case "UPDATE_MOVIE":
            return state.map(movie => movie.id === action.movie.id? action.movie : movie)
        default:
            return state 
    }   
   }