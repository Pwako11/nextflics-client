import React from 'react'
import {connect} from 'react-redux';
import {deleteWishlist} from '../../actions/wishlist';


const WishlistCard = ({wishlists, card, history, deleteWishlist}) => {
    console.log("here is the value for history", history.location.pathname)
    return (
        <div>
            <h5> Would you like to remove this movie from your list? </h5>
            
                <li>{card.attributes.name}    <button className="btn btn-secondary" onClick={()=>deleteWishlist(card, wishlists, history)}>Delete this Wishlist</button> </li>
        </div>
    )
}

const mapStateToProps = (state) => {
    
    return { 
        wishlists: state.wishlist
    }
}

export default connect(mapStateToProps, {deleteWishlist}) (WishlistCard)
