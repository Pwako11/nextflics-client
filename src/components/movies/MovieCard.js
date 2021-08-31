import React from 'react';
import {connect} from "react-redux"
import {withRouter} from 'react-router-dom';
import {updateLikes} from '../../actions/movies';

const MovieCard = ({movies, card, history, updateLikes, loggedIn}) => {

    console.log({card})
    const movieID = card.id
    const movieName = card.attributes.title
    const moviePoster = card.attributes.poster_path
    const wishlistPath = `/wishlists/new`
    const newReviewPath = '/reviews/new'
    console.log("path to poster", moviePoster)
    
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

    const likeButton = loggedIn ? <><button className="movie_like_btn" onClick={() =>updateLikes(card, movies)}>{'♡'}</button><p>{card.attributes.likes} likes </p></> : ""
    const wishlistButton = loggedIn ? <><button className="btn btn-secondary" onClick={wishlistRouteChange}>Add to Wishlist </button></> : ""
    const reviewButton = loggedIn ? <><button className="btn btn-secondary" onClick={reviewRouteChange}>Write a Review </button> </> : ""

    return (
        <div className= "movie-card"  >

            <h3 className="title">{card.attributes.title}</h3>
            <img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" />
            <h5>{card.attributes.genre}</h5>
            <h5>content rating: { 
                card.attributes.adult === true ? 
                <h4>This movie has adult content</h4> : <h4>This movie is not adult rated</h4>
            }
            </h5>
            <h5>rating:{card.attributes.rating}</h5>
            <h5>release date:{card.attributes.release_date}</h5>  
            <p>overview:{card.attributes.overview}</p>
            {likeButton}
            {wishlistButton}
            {reviewButton}   
        </div>

    )
}
const mapStateToProps = state => {

    console.log( "in Movie state", state)

    return {
        movies: state.movies,
        loggedIn: !!state.currentUser        
    }
}

export default withRouter(connect (mapStateToProps, {updateLikes}) (MovieCard))