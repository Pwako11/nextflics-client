import currentUser from "./currentUser"

const initialState = {
    name:"",
    user_id: "",
    movie_id: "" 
}

export default (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_NEW_WISHLIST_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_WISHLIST_FORM":
            return initialState
        default:
            return state
    }

}