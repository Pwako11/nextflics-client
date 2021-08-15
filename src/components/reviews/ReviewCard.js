import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteReview} from '../../actions/reviews';

const ReviewCard = ({review, movies, history, deleteReview}) =>{
   
    const movieID = review.relationships.movie.data.id;
    const reviewedMovie = movies.find(element => element.id == movieID);
   
    return (
        <div  >
            <p>{`Review for ${reviewedMovie.title}:  `}{review.attributes.content }</p> 

            <p>Rating: {review.attributes.rate }</p>

            <Link to={`/reviews/${review.id}/edit`}>Edit this review</Link>
            <br/>
            <br/>
            <button onClick={()=>deleteReview(review, history)}>Delete this review</button>
           
        </div>
    )
}

const mapStateToProps = (state) => {

        return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteReview}) (ReviewCard)