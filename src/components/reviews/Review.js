import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const Reviews = ({reviews}) =>{

    const reviewCards = reviews.length > 0 ?
    reviews.map(rev => (<><Link key={rev.id} to={`/reviews/${rev.id}`}>{rev.attributes.content} </Link><br/></>)) : null

    return (
        
        reviewCards
    )

}

const mapStateToProps = (state) => {

    return {
        reviews: state.review
    }
}

export default connect(mapStateToProps) (Reviews)