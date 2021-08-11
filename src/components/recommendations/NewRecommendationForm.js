import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewRecommendationForm} from "../../actions/newRecommendationForm.js";
import {createRecommendation} from "../../actions/recommendations.js";
// import {Link} from 'react-router-dom'

const NewRecommendationForm = ({updateNewRecommendationFormData, history, updateNewRecommendationForm, createRecommendation, userId}) => {
    console.log( "here is the FormData prop from state", updateNewRecommendationFormData)
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
            history
        )
        
    } 

    return(
    <form  onSubmit={handleSubmit} >
        <input
            placeholder= "Movie name"
            name="name"
            onChange={handleChange}
            value= {name}
        />
        <br/>
        
        <input
            placeholder = "User ID "
            name="user_id"
            onChange={handleChange}
            value= {user_id}
        />
        <br/>

        <input
            placeholder= "Movie ID"
            name="movie_id"
            onChange={handleChange}
            value= {movie_id}
        />
        <br/>
        
        <input type="submit" value="Add to Recommendations" />
    </form> 
    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        updateNewRecommendationFormData: state.newRecommendationForm,
        userId
    }
    
}


export default connect(mapStateToProps, {updateNewRecommendationForm, createRecommendation}) (NewRecommendationForm);