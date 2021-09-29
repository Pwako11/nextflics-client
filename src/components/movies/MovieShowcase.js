import React, { useState } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard.js';

const MovieShowcase = ({cards, loggedIn}) => { 
    console.log({cards})
    const [showMovies, setShowMovies] = useState(false);
    const [alphaCards, alphaSortList] = useState([]);
   
    console.log({alphaCards})
   
    const handleChange = () =>{
        setShowMovies(!showMovies)
    }

    const aSortMovies = () => {
        console.log("you are in aSorted")
       if(alphaCards.length > 0){
        alphaSortList([])
       }else {
        const sortedCards = [...cards].sort((a,b) =>{
        console.log({alphaCards})
        if(a.attributes.title < b.attributes.title) return -1;
        if(a.attributes.title > b.attributes.title) return 1;
        return 0;
            });
    
        alphaSortList(sortedCards)
       } 
    }

    const movieCard = alphaCards.length > 0 ? alphaCards.map( function(list) {
        return <MovieCard key={list.id} card={list} />
        })
        : cards.map( function(list) {
            return <MovieCard key={list.id} card={list} />
            });

    const optoinOne = <>
        <button className="btn btn-secondary" id= "movieButton" onClick={handleChange}>{showMovies? 'hide movies' : 'show Movies'}</button>
       {showMovies && <div id= "movie_showcase">{ movieCard }</div> } </>

    const movieButton = loggedIn ? optoinOne : <div id= "movie_showcase">{ movieCard }</div>  

    const sortMoviesA = <button className="btn btn-secondary" id= "sortButton" onClick={aSortMovies}>sort movies A - Z </button>
 
    return (
       <div className= "movie-showcase" >
            {movieButton}{sortMoviesA}
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