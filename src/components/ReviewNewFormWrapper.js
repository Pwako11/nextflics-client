import React from 'react';
import {connect} from 'react-redux';
import {createReview} from "../actions/reviews.js";
import ReviewForm from "./ReviewForm.js";


const ReviewNewFormWrapper = ({history, createReview}) => {

    const handleSubmit = (event, formData, userId, history )=>{
        event.preventDefault()
        console.log("In handle Submit event is", event)
        createReview({
            ... formData,
            userId
        },
        history
        )
        
    } 
    return (

        < ReviewForm history={history} handleSubmit={handleSubmit} />

    )
    

};

export default connect(null, {createReview} )(ReviewNewFormWrapper);