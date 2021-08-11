import React from 'react';
import {connect} from 'react-redux';
import {updateReview} from "../../actions/reviews.js";
import {preSetFormDataForEdit, resetReviewForm} from "../../actions/reviewForm.js";
import ReviewForm from './ReviewForm'

class ReviewEditFormWrapper extends React.Component{

     componentDidMount(){
        this.props.review && this.props.preSetFormDataForEdit(this.props.review)
    }

     componentDidUpdate(prevProps){
         this.props.review && !prevProps.review && this.props.preSetFormDataForEdit(this.props.review)
     }

    // componentWillUnmount() {
    //     this.props.resetReviewForm()
    // }

    handleSubmit = (event, formData, userId )=>{
        const {updateReview, review, history} = this.props
        event.preventDefault()
        console.log("In handle Submit event is", event)
        updateReview({formData, userId
        },
        history
        )
        
    } 
    
    render() {
        const {history, handleSubmit} = this.props
        return < ReviewForm history={history} handleSubmit={handleSubmit} />
    }
};

export default connect(null, {updateReview}, preSetFormDataForEdit, resetReviewForm)(ReviewEditFormWrapper);