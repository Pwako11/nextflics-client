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
        console.log("in componentDidUpdate - props are", this.props)
        console.log("in componentDidUpdate - Previous props are", this.prevProps) 
        this.props.review && !prevProps.review && this.props.preSetFormDataForEdit(this.props.review)
     }

    componentWillUnmount() {
        console.log("in componentWillUnmoint - props are", this.props)
        this.props.resetReviewForm()
    }

    handleSubmit = (formData, userId)=>{
        console.log( "review edit handle submit")
        
        const {updateReview, review, history } = this.props
        updateReview(formData, userId, review, history)
        .then((id)=> {
            console.log( "retrun of patch value is =", id)
            history.push(`/reviews/${id}`) 
        })
    } 
    
    render() {
        // const {history, handleSubmit} = this.props
        return <ReviewForm editMode  handleSubmit={this.handleSubmit} />
    }
};

export default connect(null, {updateReview, preSetFormDataForEdit, resetReviewForm})(ReviewEditFormWrapper);