import { resetLoginForm } from "./loginForm.js"
import { getWishlist, clearWishlist } from "./wishlist.js"
import {resetSignupForm} from "./signupForm.js"
import {getReviews, clearReview} from "./reviews.js"
import {getRecommendations, clearRecommendation} from "./recommendations.js"

export const setCurrentUser = user =>{
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () =>{
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
        const userInfo = {
            user: credentials 
        } 
        return fetch("http://localhost:3000/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setCurrentUser(response))
                dispatch(getWishlist())
                dispatch(getReviews())
                dispatch(getRecommendations())
                dispatch(resetSignupForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then( response => response.json())
        .then(response =>{
            if(response.error){
                alert(response.error)
            }else{
                dispatch(setCurrentUser(response))
                dispatch(getWishlist())
                dispatch(getReviews())
                dispatch(getRecommendations())
                dispatch(resetLoginForm())
                history.push('/')
            }
        })
        .catch(console.log)
    }
}

export const logout = () =>{
   return dispatch =>{
    dispatch(clearCurrentUser())
    dispatch(clearWishlist())
    dispatch(clearReview())
    dispatch(clearRecommendation()) 
    return fetch("http://localhost:3000/api/v1/logout", {
        credentials: "include",
        method: "DELETE"
        })
    }
}
    
export const getCurrentUser = () =>{

    return dispatch => {
        return fetch("http://localhost:3000/api/v1/get_current_user", {
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
                dispatch(setCurrentUser(response))
                dispatch(getRecommendations())
                dispatch(getReviews())
                dispatch(getWishlist())
            }
        })
        .catch(console.log)
    }
}