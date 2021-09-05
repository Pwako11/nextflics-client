import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {deleteReview} from '../../actions/reviews';

const ReviewCard = (props) =>{
 
    const movieID = props.review.relationships.movie.data.id;
    const reviewedMovie = props.movies.find(element => element.id == movieID);
    const moviePoster = reviewedMovie.attributes.poster_path
    const movieName = reviewedMovie.attributes.title
    const reviewID = props.review.id
    const recommendationPath = `/recommendations/new`

    const recommendationRouteChange = () =>{
        props.history.push(recommendationPath, {
            movieID: movieID,
            movieName: reviewedMovie.attributes.title,
            reviewID: reviewID
        })
    }
   
    return (
        <div className="reviewcard" >
            <p>{`Review for ${reviewedMovie.attributes.title}:`}</p>
            {<img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" />}
            <p>{props.review.attributes.content }</p> 

            <p>Rating: {props.review.attributes.rate }</p>

            <Link to={`/reviews/${props.review.id}/edit`}>Edit this review</Link>
            <br/>
            <p> Would you like to recommend this movie to other?<br/> <button className="btn btn-secondary" onClick={recommendationRouteChange}>Add to Recommendations </button></p>
            
            <button className="btn btn-secondary" onClick={()=>props.deleteReview(props.reviews, props.review, props.history)}>Delete this review</button>
            <>
                <button className="btn btn-secondary" onClick={() => props.history.goBack()}>Back</button>
            </>
           
        </div>
    )
}

const mapStateToProps = (state) => {

        return {
        movies: state.movies,
        reviews: state.review
    }
}

export default connect(mapStateToProps, {deleteReview}) (ReviewCard)
