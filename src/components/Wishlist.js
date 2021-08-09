import React from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'

const wishlist = ({wishlists}) => {
 
    const wishlistCards = wishlists.length > 0 ? 
    wishlists.map(list => (<> <Link key={list.id} to={`/wishlists/${list.id}`}> {list.attributes.name} </Link><br/></>)) : null
    
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