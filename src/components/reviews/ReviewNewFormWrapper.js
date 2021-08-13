import React from 'react';
import { connect } from 'react-redux';
import { createReview } from "../../actions/reviews.js";
import ReviewForm from "./ReviewForm.js";


const ReviewNewFormWrapper = ({ history, location, createReview }) => {

    const movieID = location.state.movieID;

    const handleSubmit = (formData, userId, history) => {
        createReview(formData, userId, movieID, history )
        .then((id)=> {

            history.push(`/reviews/${id}`)
        })

    }
    return (
        <>
            < ReviewForm history={history} handleSubmit={handleSubmit} />

        </>
    )


};

export default connect(null, { createReview })(ReviewNewFormWrapper);