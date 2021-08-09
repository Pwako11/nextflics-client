import { resetNewRecommendationForm } from "./newRecommendationForm.js"

//sync actions  
export const setRecommendation = recommendation =>{
    return {
        type: "SET_RECOMMENDATION",
        recommendation
    }
}
export const addRecommendation = list =>{
    console.log( "We are adding a recommendation", list)
    return{
        type: "ADD_RECOMMENDATION",
        list
    }
}

export const clearRecommendation = () => {
    return{
        type: "CLEAR_REVIEW"
    }
}


// async actions
export const getRecommendations = () =>{
    return dispatch =>{
        return fetch("http://localhost:3000/api/v1/recommendations", {
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

export const createRecommendation = (recommendationData, credentials, history ) => {
console.log("RecommenationData ", recommendationData)
    return dispatch => {
        const userInfo = {
            user: credentials 
        } 
        const setDataTransfer ={
             recommendation: {
                name: recommendationData.name,
                user_id: recommendationData.user_id, 
                movie_id: recommendationData.movie_id
            }
        }
        console.log("in create Recommendation post", setDataTransfer)

        return fetch("http://localhost:3000/api/v1/recommendations", {
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
                history.push('/recommendations/${response.data.id}')
            }
        })
        .catch(console.log)
    }
}