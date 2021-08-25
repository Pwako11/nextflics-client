import React, { useState } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard.js';

const MovieShowcase = ({cards}) => { 

    const [showMovies, setShowMovies] = useState(false);

    console.log("firsrt showMovies", showMovies)
    
    const handleChange = () =>{

        setShowMovies(!showMovies)
    }

    console.log("after handle Change", showMovies)

    const movieCard = cards.length > 0 ? cards.map(  function(list) {
        return <MovieCard key={list.id} card={list} />
        })
        : null;

    return (
       <div className= "movie-showcase" >
            <button className="movie_display_button" onClick={handleChange}>{showMovies? 'hide movies' : 'show Movies'}</button>
            {showMovies && <div id= "movie_showcase">{ movieCard }</div> }
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        state 
    }
}
export default connect(mapStateToProps) (MovieShowcase)