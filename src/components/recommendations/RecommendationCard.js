import React from 'react';
import {connect} from 'react-redux';
import {deleteRecommendation} from '../../actions/recommendations';


const RecommendationCard = ({movies, recommendation, history, deleteRecommendation}) =>{

    console.log( "in recommendationCard", movies)

    const movieID = recommendation.relationships.movie.data.id
    const movieName = recommendation.attributes.name 
        
   
    return(
        <div className={movieID}>

            <p>{movieName} <button onClick={()=>deleteRecommendation(recommendation, history)}>Delete this Recommendation</button> </p>
           
        </div>
    ) 
}
const mapStateToProps = (state) => {

    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteRecommendation}) (RecommendationCard)