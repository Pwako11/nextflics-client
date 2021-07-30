export const setWishlist = wishlist =>{
    return {
        type: "SET_WISHLIST",
        wishlist
    }
}

export const getWishlist = () =>{
    return dispatch =>{
        return fetch("http://localhost:3000/api/v1/wishlists", {
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

export const clearWishlist = () => {
    return{
        type: "CLEAR_WISHLIST"
    }
}