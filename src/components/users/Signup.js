import React from 'react' 
import {connect} from 'react-redux'
import {updateSignupForm} from '../../actions/signupForm.js'
import {signup} from '../../actions/currentUser.js'

const Signup = ({signupFormData, updateSignupForm,signup, history }) => {
    const handleInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData, history)
    }
    return (
        <div>
            <h4>Signup</h4>
            <p>Please complete the signup form to create your count</p>
    
            <form onSubmit={handleSubmit}>
                <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="name" value= {signupFormData.name} name= "name" type="text" onChange={handleInputChange} />
                <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="username" value= {signupFormData.username} name= "username" type="text" onChange= {handleInputChange} />
                <input class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="email" value= {signupFormData.email} name= "email" type="text" onChange={handleInputChange} />
                <input  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" placeholder="password" value= {signupFormData.password} name= "password" onChange= {handleInputChange} />
                
                <input class="btn btn-secondary" type="submit" value="Sing Up"/>
            </form>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup}) (Signup)