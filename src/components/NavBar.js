// import { render } from '@testing-library/react'
import React from 'react' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
// import Login from "./Login.js"
import Logout from "./users/Logout.js"
// import Signup from "./Signup.js"

const NavBar = ({loggedIn}) => {

  return (
    <span className= "nav">
      <NavLink exact activeClassName="active" to="/" >Home  |   </NavLink>
      <NavLink exact activeClassName="active" to="/wishlist" >My Wishlist  |  </NavLink>
      <NavLink exact activeClassName="active" to="/recommendations">Recommendations  |  </NavLink>
      <NavLink exact activeClassName="active" to="/reviews">My Reviews  |  </NavLink>

      {loggedIn ? <Logout /> : null}
    </span>
  )
}

const mapStateToProps = ({currentUser}) => {
    return{
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps) (NavBar)