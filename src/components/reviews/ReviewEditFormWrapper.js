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

    componentWillUnmount() {
        // this.props.resetReviewForm()
    }

    handleSubmit = (event, formData, userId, history )=>{
        event.preventDefault()
        console.log( "review edit handle submit", this.props)
        const {updateReview, review } = this.props
        
        console.log("In handle Submit event is", event)
        updateReview(formData, userId, review)
    } 
    
    render() {
        const {history, handleSubmit} = this.props
        return <ReviewForm editMode history={history}  handleSubmit={handleSubmit} />
    }
};

export default connect(null, {updateReview, preSetFormDataForEdit, resetReviewForm})(ReviewEditFormWrapper);