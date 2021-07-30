import React from 'react'
import { connect } from 'react-redux'
import WishlistCard from './WishlistCard.js'

const wishlist = ({wishlists}) => {
 
    const wishlistCards = wishlists.length > 0 ? wishlists.map(list => <WishlistCard key={list.id} card={list}/>) : null
    
    return (
        wishlistCards
    )
}

const mapStateToProps = state => {
    return {
        wishlists: state.wishlist
    }
}

export default connect(mapStateToProps)(wishlist)