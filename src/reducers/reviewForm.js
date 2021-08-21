
const initialState = {
    content:"",
    rate: "",
    user_id: "",
    movie_id: "" 
}

export default (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_REVIEW_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case "RESET_REVIEW_FORM":
            return initialState
        case "PRE_SET_FORM_DATA_FOR_EDIT":
            return action.reviewFormData
        default:
            return state
    }

}