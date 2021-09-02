import React from 'react'
import {connect} from 'react-redux';
import {deleteWishlist} from '../../actions/wishlist';


const WishlistCard = ({wishlists, card, movies, history, deleteWishlist}) => {
    
    const movieId = card.relationships.movie.data.id
    const movie = movies.find(list => list.id === movieId)
    const moviePoster = movie.attributes.poster_path
    const movieName = movie.attributes.title
    
    return (
        <div className="wishlistcard">
            <h5> Would you like to remove this movie from your list? </h5>
            
                <li>{card.attributes.name} <br/>{<img src={moviePoster} alt={movieName} className="movie-poster"  width="250" height="325" />}   {<br/>} <button className="btn btn-secondary" onClick={()=>deleteWishlist(card, wishlists, history)}>Delete this Wishlist</button> </li>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        wishlists: state.wishlist, 
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteWishlist}) (WishlistCard)
