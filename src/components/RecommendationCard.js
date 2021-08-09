import React from 'react';
import {Link} from 'react-router-dom'

const RecommendationCard = ({card}) =>{

    const movieID = card.relationships.movie.data.id
   
    return(
        <div className={movieID}>

            <p>{card.attributes.name}</p>
            <Link to={`/wishlist/${card.id}/edit`}>Edit this recommomendation</Link>
           
        </div>
    ) 
}

export default RecommendationCard