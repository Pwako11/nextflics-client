import React from 'react';
import {connect} from 'react-redux'
import MovieCard from './MovieCard.js'
import {getMovies} from '../actions/movies'

const MovieShowcase = ({cards}) => {
   cards.forEach(list => console.log(list))
  const movieCard = cards.length > 0 ? cards.map(  function(list) {
  return <MovieCard key={list.id} card={list}/>
 })
   : null
  return (
      <div className= "movie-cards" >
          { movieCard }
      </div>
      
  )
}

const mapStateToProps = (state) => {

    return {
        state
    }
}
export default connect(mapStateToProps) (MovieShowcase)