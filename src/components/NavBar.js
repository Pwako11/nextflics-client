import React from 'react' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from "./users/Logout.js"

const NavBar = ({loggedIn}) => {

  return (
    <nav className= "nav nav-pills flex-column flex-sm-row">
      <NavLink exact class="nav-link active" to="/" >Home </NavLink>
      <NavLink exact class="nav-link active" to="/wishlists" >My Wishlist</NavLink>
      <NavLink exact class="nav-link active" to="/recommendations">Recommendations</NavLink>
      <NavLink exact class="nav-link active" to="/reviews">My Reviews</NavLink>

      {loggedIn ? <Logout /> : null}
    </nav>
  )
}

const mapStateToProps = ({currentUser}) => {
    return{
      currentUser,
      loggedIn: !!currentUser
    }
  }

export default connect(mapStateToProps) (NavBar)