import React, { useState } from 'react';
import {connect} from 'react-redux';
import MovieCard from './MovieCard.js';
import MovieSearch from './MovieMatch.js'

const MovieShowcase = ({cards, loggedIn, search}) => { 
    console.log("in MovieShowcase" , {search})
    const [showMovies, setShowMovies] = useState(false);
    const [alphaCards, alphaSortList] = useState([]);
   
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
 
    // const searchResults = for( var key in search) {
    //     if(search[key][content] !== ''){
    //         return true; 
    //     }else{
    //         return false; 
    //     }
    // }


    return (
        <div className= "movie-showcase" >    
            {movieButton}{sortMoviesA}                    
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        state, 
        loggedIn: !!state.currentUser,
        search: state.movieMatchForm
    }
}
export default connect(mapStateToProps) (MovieShowcase)