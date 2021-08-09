export const updateNewRecommendationForm = (name, value) =>{
    const formData= {name, value}
    console.log(formData)
    return {
        type: "UPDATE_NEW_RECOMMENDATION_FORM", 
        formData: {name, value}
    }
}

export const resetNewRecommendationForm = () =>{
    return {
        type: "RESET_NEW_RECOMMENDATION_FORM"
    }
}