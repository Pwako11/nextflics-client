import { resetNewRecommendationForm } from "./newRecommendationForm.js"

//sync actions  
export const setRecommendation = recommendation =>{
    return {
        type: "SET_RECOMMENDATION",
        recommendation
    }
}
export const addRecommendation = recommendation =>{
    console.log( "We are adding a recommendation", recommendation)
    return{
        type: "ADD_RECOMMENDATION",
        recommendation
    }
}

export const clearRecommendation = () => {
    return{
        type: "CLEAR_REVIEW"
    }
}

export const deleteRecommendationSuccess = recommendation => {
    console.log("in delete Recommendation ", recommendation)
    return{
        type: "DELETE_RECOMMENDATION",
        recommendation
    }
}
// async actions
export const getRecommendations = () =>{
    return dispatch =>{
        return fetch("http://localhost:3010/api/v1/recommendations", {
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
                dispatch(setRecommendation(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createRecommendation = (recommendationData, movieName, userId, movieId, reviewId, history ) => {
console.log("Inside createRecommenation - check for reviewID ", reviewId)
    return dispatch => {
         
        const setDataTransfer ={
             recommendation: {
                name: movieName,
                user_id: userId, 
                movie_id: movieId, 
                review_id: reviewId
            }
        }
        console.log("in create Recommendation post", setDataTransfer)

        return fetch("http://localhost:3010/api/v1/recommendations", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setDataTransfer)
        })
        .then( response => response.json())
        .then(response =>{
            console.log( "this the fetch return for recommendations create", response)
            if(response.error){
                alert(response.error)
            }else{
                dispatch(addRecommendation(response))
                dispatch(setRecommendation(response))
                dispatch(resetNewRecommendationForm())
                history.push(`/recommendations/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}

export const deleteRecommendation = (recommendation, history) => {

    const recommendationId = recommendation.id 
    
    return dispatch => {
   
        return fetch(`http://localhost:3010/api/v1/recommendations/${recommendationId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then( response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(deleteRecommendationSuccess(recommendationId))
                history.push(`/recommendations`) 
                // return response.data.id
            }
        })
        .catch(console.log)
    }
}