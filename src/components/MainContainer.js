import React from 'react' 
import Wishlist from "./wishlists/Wishlist.js"
import Recommendation from './recommendations/Recommendation.js'
import Reviews from './reviews/Review.js'

const MainContainer = () => {
    return (
        <div className="mainContainer">
            <div className= "whislists">
                <h5>Your current wishlist</h5>
                <Wishlist />
            </div>
            
            <div className= "recommendation">
                <h5>Your list of recommendations </h5>
                <Recommendation />
            </div>
            
            <div className= "reviews">
                <h5>Your list of Reviews </h5>
                <Reviews />
            </div>
            

        </div>
    )
}

export default MainContainer