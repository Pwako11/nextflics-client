
const initialState = {
    name:"",
    user_id: "",
    movie_id: "" 
}

export default (state = initialState, action) => {
    switch (action.type){
        case "UPDATE_NEW_RECOMMENDATION_FORM":
            return {
                ...state, 
                [action.formData.name]: action.formData.value
            }
        case "RESET_NEW_RECOMMENDATION_FORM":
            return initialState
        default:
            return state
    }

}