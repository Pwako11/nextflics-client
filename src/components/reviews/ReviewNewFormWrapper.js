import React from 'react';
import { connect } from 'react-redux';
import { createReview } from "../../actions/reviews.js";
import ReviewForm from "./ReviewForm.js";


const ReviewNewFormWrapper = ({ history, location, createReview }) => {

    const movieID = location.state.movieID;
    const movieName = location.state.movieName

    const handleSubmit = (formData, reviews, userId) => {
        createReview(formData, reviews, userId, movieID)
        .then((id)=> {
            history.push(`/reviews/${id}`)
         })
    }
    return (
         <>
            <h4>Write a review and rate: {movieName}</h4>
            < ReviewForm history={history} handleSubmit={handleSubmit} />
        </>
    )
};



export default connect(null, { createReview })(ReviewNewFormWrapper);