import React from 'react';
import "./signup.css";
import { Link } from "react-router-dom";
const Signup=()=>{
    return(
        <div className="addUser">
            <h3>Signup</h3>
            <form className='addUserForm'>
                <div className='inputGroup'>
                    <label htmlFor='name'>Name:</label>
                    <input
                    type='text'
                    id="name"
                    autoComplete='off'
                    placeholder='Enter your name'
                    />
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
                    <button type="submit" class="btn btn-success">Sign Up</button>

                                   
                </div>
            </form>
            <div className='login'>
                <p>Already have an account?</p>
                <Link to="/" type="submit" class="btn btn-primary">Login</Link>

            </div>
        </div>
       
    );
        
    
};

export default Signup