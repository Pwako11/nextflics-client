import { resetNewRecommendationForm } from "./newRecommendationForm.js"

//sync actions  
export const setRecommendation = recommendation =>{
    console.log("sync action  Recommendation", recommendation)
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
        type: "CLEAR_RECOMMENDATION"
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

export const createRecommendation = (recommendation ) => {
console.log("Inside createRecommenation - check for props ", recommendation)

    let data;
    
    return dispatch => {
         
        const setDataTransfer ={
             recommendation: {
                name: recommendation.movieName,
                user_id: recommendation.userId, 
                movie_id: recommendation.movieId, 
                review_id: recommendation.reviewId
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
                data = response.data
            }
            return dispatch(addRecommendation(response))
        }).then(()=>{
            return dispatch(setRecommendation([...recommendation.recommendations, data]))
        }).then(()=>{
            return dispatch(resetNewRecommendationForm())
        }).then(()=>{
            return data.id
        })

        .catch(console.log)
    }
}

export const deleteRecommendation = (recommendations, recommendation, history) => {

    let updateRecommendations;
    const recommendationId = recommendation.id 
    console.log("recommendationId", recommendationId)

    const baseUrl = `http://localhost:3010/api/v1/recommendations/${recommendationId}`

    console.log("baseUrl", baseUrl)

    
    return dispatch => {
        console.log("fetch step 1")
    
        return fetch (baseUrl, {
          
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then( response =>{
            console.log("fetch step 2")
            console.log("In delete recommendation response", response )
            if(response.error){
                alert(response.error)
            }else{
                console.log("fetch step 3")
                updateRecommendations = recommendations.filter(recommendation => recommendation.id === recommendationId ? false : true)
                console.log("fetch step 4")
                history.push(`/recommendations`)
                console.log("fetch step 5")
                dispatch(deleteRecommendationSuccess(recommendationId))
            }
        }).then(()=>{
            console.log("fetch step 6")
            return dispatch(setRecommendation(updateRecommendations))
        })
        .catch(console.log)
    }
}