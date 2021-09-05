import {resetReviewForm } from "./reviewForm.js";
import {setRecommendation} from "./recommendations.js";

// sync actions

export const setReview = review =>{
    return {
        type: "SET_REVIEW",
        review
    }
}
export const addReview = list =>{
    return{
        type: "ADD_REVIEW",
        list
    }
}

export const clearReview = () => {
    return{
        type: "CLEAR_REVIEW"
    }
}

export const updateReviewSuccess = review => {
    return{
        type: "UPDATE_REVIEW",
        review
    }
}

export const deleteReviewSuccess = review => {
    return{
        type: "DELETE_REVIEW",
        review
    }
}

// async actions
export const getReviews = () =>{
    return dispatch =>{
        return fetch("http://localhost:3010/api/v1/reviews", {
            credentials: "include",
            method: "GET",
            headers:{
                "Content-Type": "application/json"
            },
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setReview(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createReview = (reviewData, reviews, userId, movieID) => {

    let data; 
  
    return dispatch => { 
        const setDataTransfer ={
            review: {
                content: reviewData.content,
                rate: reviewData.rate,
                user_id: userId,
                movie_id: movieID
            }
        }
        
        return fetch("http://localhost:3010/api/v1/reviews", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setDataTransfer)
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                data = response.data 
            }
            return dispatch(addReview(response))
        }).then(()=>{
            dispatch(setReview([...reviews, data]))
        }).then(()=>{
            dispatch(resetReviewForm ())
        }).then(()=> {
            return data.id
        })
        .catch(console.log)
    }
}

export const updateReview = (reviewData, reviews, review, history) => {

    let updatedReview;
    const reviewId = review.id
      return dispatch => {
          const setDataTransfer ={
              review: {
                  content: reviewData.content,
                  rate: reviewData.rate,
                  user_id: reviewData.user_id,
                  movie_id: reviewData.movie_id
              }
          }
          
          return fetch(`http://localhost:3010/api/v1/reviews/${reviewId}`, {
              credentials: "include",
              method: "PATCH",
              headers:{
                  "Content-Type": "application/json"
              },
              body: JSON.stringify(setDataTransfer)
          })
          .then( response => response.json())
          .then(response =>{
            updatedReview = response.data
              console.log( "this the fetch return for review create", response.data )
              if(response.error){
                  alert(response.error)
              }else{
                    dispatch(updateReviewSuccess(updatedReview))
                    return reviewId
              }
          })
          .catch(console.log)
      }
  }

export const deleteReview = (reviews, review, history) => {
    console.log("delete review step #1")
    console.log("delete review", review)
    let updatedReviews; 

    const reviewId = review.id 
    console.log( "reviewId", reviewId)

    return dispatch => {
        console.log("delete review step #2")
        return fetch(`http://localhost:3010/api/v1/reviews/${reviewId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then(response =>{
            console.log("delete review step #3")
            console.log( "In delete review response", response )
            if(response.error){
                alert(response.error)
            }else{
                updatedReviews = reviews.filter(review => review.id === reviewId ? false : true)
                console.log( "After delete updatedReviews", updatedReviews)
                console.log("delete review step #4")
                dispatch(deleteReviewSuccess(reviewId))
                history.push(`/reviews`)
            }
        }).then(()=>{
            console.log("delete review step #5")
            dispatch(setReview(updatedReviews))
        })
        .catch(console.log)
    }
}