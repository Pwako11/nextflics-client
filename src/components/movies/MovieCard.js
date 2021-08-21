import React, { Component } from 'react';
// import NewWishlistForm from './NewWishlistForm.js';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom';
import {updateLikes} from '../../actions/movies';
// import CardFront from './CardFront.js';
// import CardBack from './CardBack.js';

const MovieCard = ({movies, card, history, updateLikes}) => {

    console.log("In movieCard - card", card)
    console.log("In movieCard - history", history)
    console.log("In movieCard - updateLikes", updateLikes)

    const movieID = card.id
    const movieName = card.title
    const wishlistPath = `/wishlists/new`
    const newReviewPath = '/reviews/new'
  
    
    const wishlistRouteChange = () =>{
        history.push(wishlistPath, {
            movieID: movieID,
            movieName: movieName
        })
    }
    
    const reviewRouteChange = () =>{
        history.push(newReviewPath, {
            movieID: movieID,
            movieName: movieName
        })
    }

    return (
        <div className= { movieID } >
            <h3 className="title">{card.title}</h3>
            <h5>{card.genre}</h5>
            <h5>content rating: { 
                card.adult == true ? 
                <h4>This movie has adult content</h4> : <h4>This movie is not adult rated</h4>
            }
            </h5>
            <h5>rating:{card.rating}</h5>
            <h5>release date:{card.release_date}</h5>  
            <p>overview:{card.overview}</p>
            <p>{card.likes} Likes </p>
            
            <button className="movie_like_btn" onClick={() =>updateLikes(card, movies)}>Like {'<3'}</button>
            
            <button className="movie_selector_button" onClick={wishlistRouteChange}>Add to Wishlist </button>
            <button className="movie_selector_button" onClick={reviewRouteChange}>Write a Review </button> 
           
           
        </div>

    )
}
const mapStateToProps = state => {

    console.log( "in Movie state", state)

    return {
        movies: state.movies        
    }
}

export default withRouter(connect (mapStateToProps, {updateLikes}) (MovieCard))