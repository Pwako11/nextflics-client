import React from 'react';
import {connect} from 'react-redux';
import {deleteRecommendation} from '../../actions/recommendations';


const RecommendationCard = ({recommendations, recommendation, history, deleteRecommendation}) =>{

    console.log( "in recommendationCard", recommendation)

    const movieID = recommendation.relationships.movie.data.id
    const movieName = recommendation.attributes.name 
        
   
    return(
        <div className={movieID}>

            <p>{movieName} <button onClick={()=>deleteRecommendation(recommendations, recommendation, history)}>Delete this Recommendation</button> </p>
           
        </div>
    ) 
}
const mapStateToProps = (state) => {

    console.log("In recommendation state", state)

    return {
        recommendations: state.recommendation
    }
}

export default connect(mapStateToProps, {deleteRecommendation}) (RecommendationCard)