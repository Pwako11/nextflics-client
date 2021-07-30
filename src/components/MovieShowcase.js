import React from 'react';
import {connect} from 'react-redux'
// import MovieCard from './card-components/MovieCard.js'

const generateMovieCards = (props) => {
  console.log("here are your Movie props", props)
    // map over your movieData array and return an array of the correct JSX
    // const moviecards = movieData.map((movie, i) => {
    //   <MovieCard key={i} {...movie} />
    //   })
    return (
      <div></div>
    )
  }

// return (
//     <div id="movie-showcase">
//     {this.generateMovieCards()}
//     </div>
// )

const mapStateToProps = state => {
    return {
        generateMovieCards: state.generateMovieCards
    }
}
export default connect(mapStateToProps)(generateMovieCards)