import { resetNewWishlistForm } from "./newWishlistForm.js"

// sync actions

export const setWishlist = wishlist =>{
    return {
        type: "SET_WISHLIST",
        wishlist
    }
}
export const addWishlist = list =>{
    console.log( "We are adding a movie", list)
    return{
        type: "ADD_WISHLIST",
        list
    }
}

export const clearWishlist = () => {
    return{
        type: "CLEAR_WISHLIST"
    }
}

// async actions
export const getWishlist = () =>{
    return dispatch =>{
        return fetch("http://localhost:3010/api/v1/wishlists", {
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
                dispatch(setWishlist(response.data))
            }
        })
        .catch(console.log)
    }
}

export const createWishlist = (wishlistData, credentials, history) => {

    return dispatch => {
        const userInfo = {
            user: credentials 
        } 
        const setDataTransfer ={
            wishlist: {
                name: wishlistData.name,
                user_id: wishlistData.userId, 
                movie_id: wishlistData.movie_id
            }
        }
        
        return fetch("http://localhost:3010/api/v1/wishlists", {
            credentials: "include",
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(setDataTransfer)
        })
        .then( response => response.json())
        .then(response =>{
            console.log( "this the fetch return for wishlist create", response)
            if(response.error){
                alert(response.error)
            }else{
                dispatch(addWishlist(response))
                dispatch(setWishlist(response))
                dispatch(resetNewWishlistForm())
                history.push(`/wishlists/${response.data.id}`)
            }
        })
        .catch(console.log)
    }
}