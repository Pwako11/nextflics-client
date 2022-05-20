import React from 'react' 
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from "./users/Logout.js"

const NavBar = ({loggedIn}) => {

  return (
    <nav className= "nav">
      <NavLink exact className="nav-link" to="/" >Home </NavLink>
      <NavLink exact className="nav-link" to="/wishlists" >My Wishlist</NavLink>
      <NavLink exact className="nav-link" to="/recommendations">Recommendations</NavLink>
      <NavLink exact className="nav-link" to="/reviews">My Reviews</NavLink>
      <NavLink exact className="nav-link" to="/movie/search">Search</NavLink>
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