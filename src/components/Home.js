import React from 'react' ;
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        
        <div className ="welcome-loggedOut">
            <h2>Welcome, please <Link to="/Signup">sign up</Link> or <Link to="/Login">login</Link></h2>  

            <p>Millions of movies, TV shows and people to discover. Sign up now  to explore more features. </p>                
            
        </div>
    )
}

export default Home;