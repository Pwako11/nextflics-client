
const initialState = {
    content:"",
    rate: "",
    user_id: "",
    movie_id: "" 
}

export default (state = initialState, action) => {
    console.log("this is the incoming action", action)
    switch (action.type){
        case "UPDATE_REVIEW_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case "RESET_REVIEW_FORM":
            return initialState
        case "PRE_SET_FORM_DATA_FOR_EDIT":
            console.log("In reducer pre-set-from Data", action.reviewFormData)
            return action.reviewFormData
        default:
            return state
    }

}