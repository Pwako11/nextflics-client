import React, { useState } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard.js';

const MovieShowcase = ({cards, loggedIn}) => { 

    const [showMovies, setShowMovies] = useState(false);
    
    const handleChange = () =>{
        setShowMovies(!showMovies)
    }

    const movieCard = cards.length > 0 ? cards.map(  function(list) {
        return <MovieCard key={list.id} card={list} />
        })
        : null;

    const optoinOne = <>
        <button className="btn btn-secondary" onClick={handleChange}>{showMovies? 'hide movies' : 'show Movies'}</button>
       {showMovies && <div id= "movie_showcase">{ movieCard }</div> } </>

    const movieButton = loggedIn ? optoinOne : <div id= "movie_showcase">{ movieCard }</div>  

    return (
       <div className= "movie-showcase" >
             {movieButton}
        </div>
    )
}

const mapStateToProps = state => {

    return {
        state, 
        loggedIn: !!state.currentUser
    }
}
export default connect(mapStateToProps) (MovieShowcase)