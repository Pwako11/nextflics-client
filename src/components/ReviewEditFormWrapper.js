import React from 'react';
import {connect} from 'react-redux';
import {updateReview} from "../actions/reviews.js";
import {preSetFormDataForEdit} from "../actions/reviewForm.js";
import ReviewForm from "./ReviewForm.js";


class ReviewEditFormWrapper extends React.Component{

    componentDidMount(){

        console.log("in Edit Review component did mount", this.props)
        this.props.review && this.props.preSetFormDataForEdit(this.props.review)
    }

    handleSubmit = (event, formData, userId, history )=>{
        const {updateReview} = this.props
        event.preventDefault()
        console.log("In handle Submit event is", event)
        updateReview({
            ... formData,
            userId
        },
        history
        )
        
    } 
    
    render() {
        const {history, handleSubmit} = this.props
        return < ReviewForm history={history} handleSubmit={handleSubmit} />
    }
};

export default connect(null, {updateReview}, preSetFormDataForEdit,  )(ReviewEditFormWrapper);