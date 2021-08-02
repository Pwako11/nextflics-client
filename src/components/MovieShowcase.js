import React from 'react';
import {connect} from 'react-redux'
import MovieCard from './MovieCard.js'
import {getMovies} from '../actions/movies'

const MovieShowcase = ({cards}) => {
   console.log("Here are your cards", cards)
   cards.forEach(list => console.log(list))
  const movieCard = cards.length > 0 ? cards.map(  function(list) {
  return <MovieCard key={list.id} card={list}/>
 })
   : null
  console.log( "here is single movie", movieCard)
  return (
      movieCard
  )
}

const mapStateToProps = (state) => {
  console.log( "In movies state", state)
  console.log( "In movies state", state.movies)
 

    return {
        state
    }
}
export default connect(mapStateToProps) (MovieShowcase)