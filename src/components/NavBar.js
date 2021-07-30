// import { render } from '@testing-library/react'
import React from 'react' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Login from "./Login.js"
import Logout from "./Logout.js"
import Signup from "./Signup.js"

const NavBar = ({currentUser, loggedIn}) => {
  console.log("Navbar Current User", currentUser)
  return (
    <div className= "nav">
      <NavLink exact activeClassName="active" to="/wishlist" >My Wishlist  |  </NavLink>
      <NavLink exact activeClassName="active" to="/wishlist/new">Add to Wishlist  |  </NavLink>
      {loggedIn ? <Logout /> : null}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
    return{
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps) (NavBar)