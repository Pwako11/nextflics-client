import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewWishlistForm} from "../actions/newWishlistForm.js";
import {createWishlist} from "../actions/wishlist.js";
// import {Link} from 'react-router-dom'

const NewWishlistForm = ({updateNewWishlistFormData, history, updateNewWishlistForm, createWishlist, userId}) => {
    console.log( "here is the user ID prop from state", userId)
    const {name, user_id, movie_id} = updateNewWishlistFormData

    const handleChange=(event)=>{
        console.log("trigger wishlistform handle change")
        const {name, value} = event.target
        updateNewWishlistForm(name, value)
    } 

    const handleSubmit = event =>{
        event.preventDefault()
        createWishlist({
            ... updateNewWishlistFormData,
            userId
        },
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
        
        <input type="submit" value="Add to wishlist" />
    </form> 
    )
};

const mapStateToProps = state => {
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        updateNewWishlistFormData: state.newWishlistForm,
        userId
    }
}


export default connect(mapStateToProps, {updateNewWishlistForm, createWishlist}) (NewWishlistForm);