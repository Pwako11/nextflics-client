import React from 'react' ;
import {Link} from 'react-router-dom'

const Home = () => {

    return (
        
        <div>
            <h2>Welcome, please <Link to="/Signup">sign up</Link> or <Link to="/Login">login</Link></h2>                 
            
        </div>
    )
}

export default Home;