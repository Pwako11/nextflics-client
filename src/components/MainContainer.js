import React from 'react' 
import {connect} from 'react-redux';
import Wishlist from "./wishlists/Wishlist.js"
import Recommendation from './recommendations/Recommendation.js'
import Reviews from './reviews/Review.js'

const MainContainer = ({recommendation, review, wishlist}) => {
    
    const wishlistsTag = wishlist.length > 0 ?
    <h5>Your current wishlist:</h5> : null 

    const recommendationTag = recommendation.length > 0 ?
    <h5>Your list of recommendations:</h5> : null 

    const reviewTag = review.length > 0 ?
    <h5>Your list of reviews:</h5> : null

    return (
        <div className="mainContainer">
            <div className= "whislists">
                {wishlistsTag}
                <Wishlist />
            </div>
            
            <div className= "recommendation">
                {recommendationTag}
                <Recommendation />
            </div>
            
            <div className= "reviews">
                {reviewTag}
                <Reviews />
            </div>
            

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        recommendation: state.recommendation, 
        review: state.review, 
        wishlist: state.wishlist
    }
}

export default connect(mapStateToProps) (MainContainer)