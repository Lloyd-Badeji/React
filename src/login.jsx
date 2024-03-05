import React from 'react'
import './both.css'

function Login(){
    return(
        <div className='Sign'>
            <h1>Log In</h1>

           <h5>Email</h5>
           <input type="Email" placeholder='Email' id="Email" />
           
           <h5>Password</h5>
           <input type="Password" placeholder='Password' id="Password" /> <br />
           <button>Submit</button>
        </div>
    )
}

export default Login