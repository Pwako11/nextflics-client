import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteReview} from '../../actions/reviews';

const ReviewCard = ({review, movies, history, deleteReview}) =>{
  
    const movieID = review.relationships.movie.data.id;
    const reviewedMovie = movies.find(element => element.id == movieID);
    const reviewID = review.id
    const recommendationPath = `/recommendations/new`

    const recommendationRouteChange = () =>{
        history.push(recommendationPath, {
            movieID: movieID,
            movieName: reviewedMovie.title,
            reviewID: reviewID
        })
    }
   
    return (
        <div  >
            <p>{`Review for ${reviewedMovie.title}:  `}{review.attributes.content }</p> 

            <p>Rating: {review.attributes.rate }</p>

            <Link to={`/reviews/${review.id}/edit`}>Edit this review</Link>
            <br/>
            <p> Would you like to recomment this movie to other? <button className="review_selector_button" onClick={recommendationRouteChange}>Add to Recommendations </button></p>
            
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