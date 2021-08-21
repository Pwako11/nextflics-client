import { resetNewWishlistForm } from "./newWishlistForm.js"

// sync actions

export const setWishlist = wishlist =>{
    return {
        type: "SET_WISHLIST",
        wishlist
    }
}
export const addWishlist = list =>{
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

export const createWishlist = (wishlistData) => {

    let data;

    return dispatch => {

        const setDataTransfer ={
            wishlist: {
                name: wishlistData.location.state.movieName,
                user_id: wishlistData.userId, 
                movie_id: wishlistData.location.state.movieID
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
            if(response.error){
                alert(response.error)
            }else{
                data = response.data;
            }
            return dispatch(addWishlist(response))
        }).then(()=>{
            return dispatch(setWishlist([...wishlistData.wishlists, data]))
        }).then(()=>{
            return dispatch(resetNewWishlistForm())
        }).then(()=>{
            return data.id
        })
        .catch(console.log)
    }
}

export const deleteWishlist = (wishlist, wishlists, history) => {

    let updatedWishlists; 

    const wishlistId = wishlist.id 

    return dispatch => {
   
        return fetch(`http://localhost:3010/api/v1/wishlists/${wishlistId}`, {
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
                updatedWishlists= wishlists.filter(wishlist => wishlist.id === wishlistId ? false : true)
                dispatch(deleteWishlistSuccess(wishlistId)) 
                history.push(`/wishlists`) 
            }
            
        }).then(()=>{
            return dispatch(setWishlist(updatedWishlists))
        })
        .catch(console.log)
    }
}