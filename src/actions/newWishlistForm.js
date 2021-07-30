export const updateNewWishlistForm = (name, value) =>{
    return {
        type: "UPDATE_NEW_WISHLIST_FORM", 
        formData: {name, value}
    }
}

export const resetNewWishlistForm = () =>{
    return {
        type: "RESET_NEW_WISHLIST_FORM"
    }
}