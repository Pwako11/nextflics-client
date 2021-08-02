import React, { Component } from 'react';
import {Link} from 'react-router-dom';
// import CardFront from './CardFront.js';
// import CardBack from './CardBack.js';

const MovieCard = ({card}) => {
     console.log("inside Moviecard this is your prop", card)

    return (
        <div className="movie-card">
            <h3 className="title">{card.title}</h3>
            <h5>{card.genre}</h5>
            <h5>content rating: { 
                card.adult == true ? 
                <h5>This movie has adult content</h5> : <h5>This movie is not adult rated</h5>
            }
            </h5>
            <h5>rating:{card.rating}</h5>
            <h5>release date:{card.release_date}</h5>  
            <p>overview:{card.overview}</p>
            
            <button className="movie_selector_button" onClick={() => <Link activeClassName="active" to="/wishlist/new"> </Link>}>Add to Wishlist</button> 
           
            {/* <Link to={`/wishlist/${card.id}/edit`}>Edit this wishlist</Link>} */}
        </div>

    )
}

export default MovieCard