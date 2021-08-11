import React from 'react'
import {Link} from 'react-router-dom'

const WishlistCard = ({card}) => {

    return (
        <div>
            <p>{card.attributes.name}</p>
            <Link to={`/wishlists/${card.id}/edit`}>Edit this wishlist</Link>
        </div>

    )
}

export default WishlistCard