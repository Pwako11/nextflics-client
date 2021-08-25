import React from 'react' ;
import {connect} from 'react-redux';
import {updateReviewForm} from "../../actions/reviewForm.js";

const ReviewForm = ({formData, reviews, updateReviewForm, userId, handleSubmit, editMode}) => {

    const {content, rate, user_id, movie_id} = formData

    const handleChange=(event)=>{
        const {name, value} = event.target
        updateReviewForm(name, value)
    }  

    return(
    <form  onSubmit={event =>{
        event.preventDefault()
        handleSubmit(formData, reviews, userId)
        } } >
        <label>
            <textarea name= "content" placeholder= "Type your review here " onChange={handleChange} value= {content} ></textarea>
        </label>
        
        <br/>
        <select name="rate" placeholder= "Rate this movie " onChange={handleChange}>
            <option value= ""> select a movie rate ...</option>
            <option value= "0"> Zero </option>
            <option value= "1"> 1 star</option>
            <option value= "2"> 2 stars</option>
            <option value= "3"> 3 stars</option>
            <option value= "4"> 4 stars</option>
            <option value= "5"> 5 stars</option>
        </select>
        <br/>
        <input
            type="hidden"
            placeholder = "User ID "
            name="user_id"
            onChange={handleChange}
            value= {user_id}
        />
        <input
            type="hidden"
            placeholder= "Movie ID"
            name="movie_id"
            onChange={handleChange}
            value= {movie_id}
        />
        <br/>
        <input type="submit" value={editMode ? "update review" : "Post your review"}/>
        <br/>
    </form>
 
    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        formData: state.reviewForm,
        reviews: state.review,
        userId
    }
}


export default connect(mapStateToProps, {updateReviewForm}) (ReviewForm);