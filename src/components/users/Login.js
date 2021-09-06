import React from 'react' 
import {connect} from 'react-redux'
import {updateLoginForm} from '../../actions/loginForm.js'
import {login} from '../../actions/currentUser.js'

const Login = ({loginFormData, updateLoginForm, login, history}) => {
    const handleInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData, history)
    }
    return (
        <div>
            <h4>Login</h4>
            <p> Welcome, Please enter your login credentials</p>
            
            <form  class="input-group mb-3" onSubmit={handleSubmit}>
                <input class="form-control" placeholder="username" value= {loginFormData.username} name= "username" type="text" onChange={handleInputChange} />
                <input  class="form-control" placeholder="password" value= {loginFormData.password} name= "password" type="text" onChange= {handleInputChange} />
                <input class="btn btn-outline-secondary" type="submit" value="Log In"/>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login}) (Login)