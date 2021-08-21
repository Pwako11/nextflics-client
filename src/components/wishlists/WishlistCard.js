import React from 'react'
import {connect} from 'react-redux';
import {deleteWishlist} from '../../actions/wishlist';


const WishlistCard = ({wishlists, card, history, deleteWishlist}) => {

    return (
        <div>
            <p>{card.attributes.name} <button onClick={()=>deleteWishlist(card, wishlists, history)}>Delete this Wishlist</button> </p>
        </div>

    )
}

const mapStateToProps = (state) => {
    
    return { 
        wishlists: state.wishlist
    }
}

export default connect(mapStateToProps, {deleteWishlist}) (WishlistCard)
