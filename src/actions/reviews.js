import {resetReviewForm } from "./reviewForm.js";

export const setReview = review =>{
    return {
        type: "SET_REVIEW",
        review
    }
}
export const addReview = list =>{
    console.log( "We are adding a review", list)
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

export const createReview = (reviewData, userId, movieID) => {
  console.log("in  review create- reviewData",)
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
            console.log( "this the fetch return for review create", response)
            if(response.error){
                alert(response.error)
            }else{
                dispatch(addReview(response))
                dispatch(setReview(response))
                dispatch(resetReviewForm ())
                return response.data.id
            }
        })
        .catch(console.log)
    }
}

export const updateReview = (reviewData, credentials, review, history) => {
    const reviewId = review.id
      return dispatch => {
          const userInfo = {
              user: credentials 
          } 
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
              console.log( "this the fetch return for review create", response.data )
              if(response.error){
                  alert(response.error)
              }else{
                    dispatch(updateReviewSuccess(response))
                     return reviewId
              }
          })
          .catch(console.log)
      }
  }

export const deleteReview = (review, history) => {
const reviewId = review.id 
    return dispatch => {
                
    return fetch(`http://localhost:3010/api/v1/reviews/${reviewId}`, {
        credentials: "include",
        method: "DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
        .then( response => response.json())
        .then(response =>{
            console.log( "this the fetch return for review delete", response )
            if(response.error){
                alert(response.error)
            }else{
                dispatch(deleteReviewSuccess(reviewId))
                history.push(`/reviews`) 
                // return response.data.id
            }
        })
        .catch(console.log)
    }
}