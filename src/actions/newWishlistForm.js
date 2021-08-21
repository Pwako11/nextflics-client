export const updateNewWishlistForm = (name, value) =>{
    const formData= {name, value}
    console.log({formData})
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