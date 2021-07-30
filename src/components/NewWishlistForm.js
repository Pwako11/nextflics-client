import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewWishlistForm} from "../actions/newWishlistForm.js";
// import {Link} from 'react-router-dom'

const NewWishlistForm = ({formData, history}) => {
    
    // const {name, user_id, movie_id} = formData

    const handleChange=(event)=>{
        const {name, value} = event.target
        updateNewWishlistForm(name, value)
    } 

    return(
    <form >
        <input
            placeholder= "Movie name"
            name="name"
            onchange={handleChange}
            // value= {name}
        />

        <input
            placeholder = "User ID "
            name="user_id"
            onchange={handleChange}
            // value= {user_id}
        />

        <input
            placeholder= "Movie ID"
            name="movie_id"
            onchange={handleChange}
            // value= {movie_id}
        />
        <input type="submit" value="Add to wishlist" />
    </form> 
)};

const mapStateToProps = state => {
    return {
        updateNewWishlistFormData: state.newWishlistForm
    }
}


export default connect(mapStateToProps, {updateNewWishlistForm}) (NewWishlistForm);