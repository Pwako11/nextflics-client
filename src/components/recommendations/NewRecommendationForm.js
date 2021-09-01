import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewRecommendationForm} from "../../actions/newRecommendationForm.js";
import {createRecommendation} from "../../actions/recommendations.js";

const NewRecommendationForm = ({updateNewRecommendationFormData, history, location, updateNewRecommendationForm, createRecommendation, userId, recommendations}) => {
     
    const movieId = location.state.movieID
    const movieName = location.state.movieName
    const reviewId = location.state.reviewID

    
    console.log( "here is the location prop from state", location)
    console.log( "here is the movieId", movieId)
    console.log( "here is the movieName", movieName)
  
    const {name, user_id, movie_id, review_id} = updateNewRecommendationFormData

    const handleChange=(event)=>{
        console.log("trigger recommendationform handle change")
        const {name, value} = event.target
        updateNewRecommendationForm(name, value)
    } 

    const handleSubmit = event =>{
        
        console.log("inside Handle submit", updateNewRecommendationForm)
        
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
       <div> 
           <p>If youe would like to recommend {movieName} to others, click the button below</p>
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
                <input type="submit" value="Add to Recommendations" />
            </form>

            <p>If you would like to recommend a different movie return to the previos page</p>
            <>
                <button onClick={() => history.goBack()}>Back</button>
            </>
    </div>

    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""

    console.log(" you are in NewRecommendation Form state ", state)
    return {
        updateNewRecommendationFormData: state.newRecommendationForm,
        userId,
        recommendations: state.recommendation
    }
    
}


export default connect(mapStateToProps, {updateNewRecommendationForm, createRecommendation}) (NewRecommendationForm);