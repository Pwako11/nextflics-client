import React from 'react' ;
import {connect} from 'react-redux';
import {updateReviewForm} from "../../actions/reviewForm.js";

// import {Link} from 'react-router-dom'

const ReviewForm = ({formData, updateReviewForm, userId, handleSubmit, editMode}) => {
    console.log( "here is the review prop from state", formData)
    const {content, rate, user_id, movie_id} = formData

    const handleChange=(event)=>{
        console.log("trigger reviewform handle change")
        const {name, value} = event.target
        updateReviewForm(name, value)
    }  

    return(
    <form  onSubmit={event =>{
        event.preventDefault()
        console.log("In review form Submit")
        handleSubmit(formData, userId)
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
            type="hidden"
            placeholder = "User ID "
            name="user_id"
            onChange={handleChange}
            value= {user_id}
        />
        <br/>

        <input
            type="hidden"
            placeholder= "Movie ID"
            name="movie_id"
            onChange={handleChange}
            value= {movie_id}
        />
        <br/>
        
        <input type="submit" value={editMode ? "update review" : "Post your review"}/>
    </form> 
    )
};

const mapStateToProps = state => {

    // console.log("Review Form state", state)
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        formData: state.reviewForm,
        userId
    }
}


export default connect(mapStateToProps, {updateReviewForm}) (ReviewForm);