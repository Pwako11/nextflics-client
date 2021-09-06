import React from 'react';
import {connect} from 'react-redux';
import {deleteRecommendation} from '../../actions/recommendations';


const RecommendationCard = ({recommendations, movies, recommendation, history, deleteRecommendation}) =>{

    

    const movieID = recommendation.relationships.movie.data.id
    const recommendedMovie = movies.find(element => element.id == movieID);
    const moviePoster = recommendedMovie.attributes.poster_path
    const movieName = recommendation.attributes.name 
        
   
    return(
        <div className="recommendationCard">

            <p>{movieName} <br/> <img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" /><br/><button  class="btn btn-secondary" onClick={()=>deleteRecommendation(recommendations, recommendation, history)}>Delete this Recommendation</button>  <button className="btn btn-secondary" onClick={() => history.goBack()}>Back</button></p>
           
        </div>
    ) 
}
const mapStateToProps = (state) => {

    return {
        recommendations: state.recommendation, 
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteRecommendation}) (RecommendationCard)