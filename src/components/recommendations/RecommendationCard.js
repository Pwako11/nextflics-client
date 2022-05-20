import React from 'react';
import {connect} from 'react-redux';
import {deleteRecommendation} from '../../actions/recommendations';


const RecommendationCard = (props) =>{

    console.log("you're in Recommendation Card", props)
   
    const movieID = props.recommendation.relationships.movie.data.id
    const recommendedMovie = props.movies.find(element => element.id === movieID);
    const moviePoster = recommendedMovie.attributes.poster_path
    const movieName = props.recommendation.attributes.name 
        
    return(
        <div className="recommendationCard">

            <h5> Would you like to remove this movie from your list? </h5>

            <li>{movieName} <br/> <img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" /><br/><button  className="btn btn-secondary" onClick={()=>props.deleteRecommendation(props.recommendations, props.recommendation, props.history)}>Delete this Recommendation</button>  <button className="btn btn-secondary" onClick={() => props.history.goBack()}>Back</button></li>
           
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