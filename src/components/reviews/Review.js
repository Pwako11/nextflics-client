import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

const Reviews = ({reviews, history}) =>{
    let path;

    if (typeof history === 'undefined'){
        path = ""
    }else{
        path = history.location.pathname
    };

    const reviewHeading =  path === "/reviews" ? <h5>Here is your movie review list. Select a movie for more options</h5> : "" ;

    const reviewCards = reviews.length > 0 ?
    reviews.map(rev => (<li><Link key={rev.id} to={`/reviews/${rev.id}`}>{rev.attributes.content} </Link><br/></li>)) : null

    return (

        <div className="reviewList">
            {reviewHeading}
            <ol>
                {reviewCards}
            </ol>
        </div>       
    )
}

const mapStateToProps = state => {

    return {
        reviews: state.review
    }
}

export default connect(mapStateToProps) (Reviews)