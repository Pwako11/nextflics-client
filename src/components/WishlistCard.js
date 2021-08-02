import React from 'react'
import {Link} from 'react-router-dom'

const WishlistCard = ({card}) => {

    console.log( "wishlist card ", card)

    return (
        <div>
            {/* <p>{card.name}</p>
            <Link to={`/wishlist/${card.id}/edit`}>Edit this wishlist</Link> */}
        </div>

    )
}

export default WishlistCard