import { resetNewRecommendationForm } from "./newRecommendationForm.js"

//sync actions  
export const setRecommendation = recommendation =>{
    return {
        type: "SET_RECOMMENDATION",
        recommendation
    }
}
export const addRecommendation = recommendation =>{
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

    console.log({recommendations})
    console.log({recommendation})
    console.log({history})
    let updateRecommendations;
   
    const recommendationId = recommendation.id 
    
    return dispatch => {
        console.log("fetch step 1")
    
        return fetch(`http://localhost:3010/api/v1/recommendations/${recommendationId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( resp => resp.json())
        .then( response =>{
            console.log("step 2")
            if(response.error){
                alert(response.error)
            }else{
                console.log("step 3")
                updateRecommendations = recommendations.filter(recommendation => recommendation.id === recommendationId ? false : true)
                console.log("step 4")
                dispatch(deleteRecommendationSuccess(recommendationId))
                console.log("step 5")
                history.push(`/recommendations`)
            }
        }).then(()=>{
            return dispatch(setRecommendation(updateRecommendations))
        })
        .catch(console.log)
    }
}