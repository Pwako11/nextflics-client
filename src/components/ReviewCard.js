import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const ReviewCard = ({review, movies}) =>{
   
    console.log( "Review Card props value for movies ", review)
    const movieID = review.relationships.movie.data.id;
    
    const reviewedMovie = movies.find(element => element.id == movieID);
   
    return (
        <div  >

            <p>{`Review for ${reviewedMovie.title}:  `}{review.attributes.content }</p> 

            <p>Rating: {review.attributes.rate }</p>

            <Link to={`/reviews/${review.id}/edit`}>Edit this review</Link>
        </div>
    )

}

const mapStateToProps = (state) => {

        return {
        movies: state.movies
    }
}

export default connect(mapStateToProps) (ReviewCard)