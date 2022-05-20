import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewRecommendationForm} from "../../actions/newRecommendationForm.js";
import {createRecommendation} from "../../actions/recommendations.js";

const NewRecommendationForm = ({updateNewRecommendationFormData, history, location, movies, updateNewRecommendationForm, createRecommendation, userId, recommendations}) => {
    const movieId = location.state.movieID
    const recommendedMovie = movies.find(element => element.id === movieId);
    const moviePoster = recommendedMovie.attributes.poster_path
    const movieName = location.state.movieName
    const reviewId = location.state.reviewID

    // const {name, user_id, movie_id, review_id} = updateNewRecommendationFormData

    const handleChange=(event)=>{
        const {name, value} = event.target
        updateNewRecommendationForm(name, value)
    } 

    const handleSubmit = event =>{    
        event.preventDefault()
        createRecommendation({
            updateNewRecommendationFormData,
            movieName,
            userId,
            movieId,
            reviewId,
            recommendations,
            history} 
            
        ).then((id)=> {
                history.push(`/recommendations/${id}`) 
        })
    } 

    return(
       <div className="recommendationForm"> 
       <img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" />
       <br/>
           <p>If you would like to recommend {movieName} to others, click the button below</p>
            <form  onSubmit={handleSubmit} >
                <input
                    type="hidden"
                    placeholder= "Movie name"
                    name="name"
                    onChange={handleChange}
                    value= {movieName}
                />
                <input
                    type="hidden"
                    placeholder = "User ID "
                    name="user_id"
                    onChange={handleChange}
                    value= {userId}
                />
                <input
                    type="hidden"
                    placeholder= "Movie ID"
                    name="movie_id"
                    onChange={handleChange}
                    value= {movieId}
                />
                <input
                    type="hidden"
                    placeholder= "Review ID"
                    name="review_id"
                    onChange={handleChange}
                    value= {reviewId}
                />
                <input className="btn btn-secondary" type="submit" value="Add to Recommendations" />
            </form>

            <p>If you would like to recommend a different movie return to the previos page</p>
            <>
                <button className="btn btn-secondary" onClick={() => history.goBack()}>Back</button>
            </>
    </div>

    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""

    return {
        updateNewRecommendationFormData: state.newRecommendationForm,
        userId,
        recommendations: state.recommendation, 
        movies: state.movies
    }
    
}

export default connect(mapStateToProps, {updateNewRecommendationForm, createRecommendation}) (NewRecommendationForm);