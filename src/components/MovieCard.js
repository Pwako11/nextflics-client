import React, { Component } from 'react';
import NewWishlistForm from './NewWishlistForm.js';
import {connect} from "react-redux"
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
// import CardFront from './CardFront.js';
// import CardBack from './CardBack.js';

const MovieCard = ({card, history}) => {
    
    const parentPointer = history.location.pathname
    const movieID = card.id
    const wishlistPath = `/wishlists/${movieID}/edit`
    const reviewPath = `/reviews/${movieID}/edit`
    const recommendationPath = `/recommendations/${movieID}/edit`
    
    const wishlistRouteChange = () =>{
        history.push(wishlistPath)
    }
    
    const reviewRouteChange = () =>{
        history.push(reviewPath)
    }

    const recommendationRouteChange = () =>{
        history.push(recommendationPath)
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
            
            <button className="movie_selector_button" onClick={wishlistRouteChange}>Add to Wishlist </button>
            <button className="movie_selector_button" onClick={reviewRouteChange}>Write a Review </button> 
            <button className="movie_selector_button" onClick={recommendationRouteChange}>Add to Recommended </button>
           
        </div>

    )
}
const mapStateToProps = state => {
    
    return {
        
    }
}

export default withRouter(connect (mapStateToProps) (MovieCard))