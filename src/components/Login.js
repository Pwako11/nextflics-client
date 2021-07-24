import React from 'react' 
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm.js'
import {login} from '../actions/currentUser.js'

const Login = ({loginForm, updateLoginForm, login}) => {
    const handleInputChange = event =>{
        const {name, value} = event.target
        const updatedFormInfo = {
            ...loginForm,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" value= {loginForm.username} name= "username" type="text" onChange={handleInputChange} />
            <input placeholder="password" value= {loginForm.password} name= "password" type="text" onChange= {handleInputChange} />
            <input type="submit" value="Log In"/>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login}) (Login)