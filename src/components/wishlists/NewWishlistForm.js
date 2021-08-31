import React from 'react' ;
import {connect} from 'react-redux';
import {updateNewWishlistForm} from "../../actions/newWishlistForm.js";
import {createWishlist} from "../../actions/wishlist.js";

const NewWishlistForm = ({updateNewWishlistFormData, history, location, updateNewWishlistForm, createWishlist, userId,wishlists}) => {
      
    const movieId = location.state.movieID
    const movieName = location.state.movieName

    const {name, user_id, movie_id} = updateNewWishlistFormData

     const handleChange=(event)=>{
        console.log("trigger wishlistform handle change")
        const {name, value} = event.target
        updateNewWishlistForm(name, value)
    } 

    const handleSubmit = event =>{
        event.preventDefault()
        createWishlist({
            updateNewWishlistFormData,
            userId, 
            location,
            wishlists
        })
        .then((id)=> {
    
            history.push(`/wishlists/${id}`) 
        })
    } 

    return(
    <form class="mb-3 row" onSubmit={handleSubmit} >
        <div class="col-auto">
        
        <label for="WishlistForm" class="form-label">Would you like to add this movie to your Wishlist? </label>
        <input
            readonly class="form-control-plaintext" 
            id="movieName"
            name="name"
            onChange={handleChange}
            value= {movieName}
            
        />    
        <input
            placeholder = "User ID "
            type="hidden"
            name="user_id"
            onChange={handleChange}
            value= {userId}
        />
        <input
            placeholder= "Movie ID"
            type="hidden"
            name="movie_id"
            onChange={handleChange}
            value= {movieId}
        />
        <br/>
        <input type="submit" className="btn btn-secondary" value="Add to wishlist" />
        </div>
    </form> 
    )
};

const mapStateToProps = state => {
 
    const userId = state.currentUser ? state.currentUser.data.id : ""
    return {
        updateNewWishlistFormData: state.newWishlistForm,
        userId,
        wishlists: state.wishlist
    }
}


export default connect(mapStateToProps, {updateNewWishlistForm, createWishlist}) (NewWishlistForm);