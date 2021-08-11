import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const Reviews = ({reviews}) =>{

    console.log( "In review component - props", reviews)
    const reviewCards = reviews.length > 0 ?
    reviews.map(rev => (<><Link key={rev.id} to={`/reviews/${rev.id}`}>{rev.attributes.content} </Link><br/></>)) : null

    return (
        
        reviewCards
    )

}

const mapStateToProps = (state) => {

    console.log( "Here is state in Reviews component", state)
    return {
        reviews: state.review
    }
}

export default connect(mapStateToProps) (Reviews)