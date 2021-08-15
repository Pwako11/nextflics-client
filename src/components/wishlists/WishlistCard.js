import React from 'react'
import {connect} from 'react-redux';
import {deleteWishlist} from '../../actions/wishlist';


const WishlistCard = ({movies, card, history, deleteWishlist}) => {

    return (
        <div>
            <p>{card.attributes.name} <button onClick={()=>deleteWishlist(card, history)}>Delete this Wishlist</button> </p>
        </div>

    )
}

const mapStateToProps = (state) => {

    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, {deleteWishlist}) (WishlistCard)
