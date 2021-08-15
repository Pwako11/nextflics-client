import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewRecommendationForm} from "../../actions/newRecommendationForm.js";
import {createRecommendation} from "../../actions/recommendations.js";
// import {Link} from 'react-router-dom'

const NewRecommendationForm = ({updateNewRecommendationFormData, history, location, updateNewRecommendationForm, createRecommendation, userId}) => {
     
    const movieId = location.state.movieID
    const movieName = location.state.movieName

    console.log( "here is the location prop from state", location)

    const {name, user_id, movie_id} = updateNewRecommendationFormData

    const handleChange=(event)=>{
        console.log("trigger recommendationform handle change")
        const {name, value} = event.target
        updateNewRecommendationForm(name, value)
    } 

    const handleSubmit = event =>{
        
        console.log("inside Handle submit", updateNewRecommendationForm)
        
        event.preventDefault()
        createRecommendation( 
            updateNewRecommendationFormData,
            movieName,
            userId,
            movieId,
            history
        ) 
    } 

    return(
        <form  onSubmit={handleSubmit} >
        <input
            placeholder= "Movie name"
            name="name"
            onChange={handleChange}
            value= {movieName}
        />
        <br/>
        
        <input
            placeholder = "User ID "
            name="user_id"
            onChange={handleChange}
            value= {userId}
        />
        <br/>

        <input
            placeholder= "Movie ID"
            name="movie_id"
            onChange={handleChange}
            value= {movieId}
        />
        <br/>
        
        <input type="submit" value="Add to Recommendations" />
    </form>

    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""


    console.log ( "in recommendation state" , state)
    return {
        updateNewRecommendationFormData: state.newRecommendationForm,
        userId
    }
    
}


export default connect(mapStateToProps, {updateNewRecommendationForm, createRecommendation}) (NewRecommendationForm);