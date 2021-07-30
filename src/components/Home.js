import React from 'react' ;
import Signup from "./Signup.js";
import Login from "./Login.js";
import {Link} from 'react-router-dom'

const Home = ({}) => (

        <div>
            <h2>Welcome, please <Link to="/Signup">sign up</Link> or <Link to="/Login">login</Link></h2>                 
            
        </div>


);

export default Home;