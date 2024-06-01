import React from 'react';
import "./login.css";
import { Link } from "react-router-dom";
import Signup from '../signup/Signup';

const Login=()=>{
    return(
        <div className="addUser">
            <h3>Sign In</h3>
            <form className='addUserForm' action='/Signup' method='GET'>
                <div className='inputGroup'>
                    <label htmlFor='email'>Email:</label>
                    <input
                    type='email'
                    id="email"
                    autoComplete='off'
                    placeholder='Enter your Email'
                    />
                    <label htmlFor='name'>Password:</label>
                    <input
                    type='password'
                    id="password"
                    autoComplete='off'
                    placeholder='Enter Pssword'
                    />
                    <button type="submit" class="btn btn-primary">Login</button>

                                   
                </div>
                <div className='login'>
                <p>Don't have account?</p>
                <input type='submit' value='Signup'/>
            </div>
            </form>
            {/* <div className='login'>
                <p>Don't have account?</p>
                <Link to="/" type="submit" class="btn btn-success">Sign Up</Link>

            </div> */}
        </div>
       
    );
        
    
};

export default Login 