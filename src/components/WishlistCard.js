import React from 'react'

const WishlistCard = ({card}) => {
    return (
        <div>
            <p>{card.attributes.name}</p>
        </div>

    )
}

export default WishlistCard