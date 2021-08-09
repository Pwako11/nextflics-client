import React from 'react' ;
import {connect} from 'react-redux';
import {updateReviewForm} from "../actions/reviewForm.js";

// import {Link} from 'react-router-dom'

const ReviewForm = ({formData, history, updateReviewForm, createReview, userId, handleSubmit}) => {
    console.log( "here is the user ID prop from state", formData)
    const {content, rate, user_id, movie_id} = FormData

    const handleChange=(event)=>{
        console.log("trigger reviewform handle change")
        const {name, value} = event.target
        updateReviewForm(name, value)
    }  

    return(
    <form  onSubmit={event =>{
        console.log("In on Submit")
        handleSubmit(event, formData, userId, history)
    } } >
        <input
            placeholder= "Type your review here "
            name="content"
            onChange={handleChange}
            value= {content}
        />
        <br/>
        <input
            placeholder= "Rate this movie "
            name="rate"
            onChange={handleChange}
            value= {rate}
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
        
        <input type="submit" value="Post your Review" />
    </form> 
    )
};

const mapStateToProps = state => {

    console.log("Review Form", state)
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        formData: state.reviewForm,
        userId
    }
}


export default connect(mapStateToProps, {updateReviewForm}) (ReviewForm);