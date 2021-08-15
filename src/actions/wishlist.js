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

export const deleteWishlistSuccess = wishlist => {
    console.log("in delete WishlistSuccess ", wishlist)
    return{
        type: "DELETE_WISHLIST",
        wishlist
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

export const createWishlist = (wishlistData, credentials) => {

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
                return response.data.id
            }
        })
        .catch(console.log)
    }
}

export const deleteWishlist = (wishlist, history) => {
    console.log("inside wishlist delete action - history" , history)
    const wishlistId = wishlist.id 
    
    return dispatch => {

        console.log("inside wishlist delete action - wishlist" , wishlist)
           console.log(" inside wishlist fetch dispatch ")     
        return fetch(`http://localhost:3010/api/v1/wishlists/${wishlistId}`, {
            credentials: "include",
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        })
        .then( response => response.json())
        .then( response =>{
            console.log( "this the fetch return for wishlist delete", response )
            if(response.error){
                alert(response.error)
            }else{
                dispatch(deleteWishlistSuccess(wishlistId))
                history.push(`/wishlists`) 
                // return response.data.id
            }
        })
        .catch(console.log)
    }
}