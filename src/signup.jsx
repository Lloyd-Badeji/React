import React from 'react'
import './both.css'

function SignUp(){
    return(
        <div className='Sign'>
            <h1>Sign Up</h1>
           <h5>Name</h5>
           <input type="Name" placeholder='Name' id="Name" />

           <h5>Email</h5>
           <input type="Email" placeholder='Email' id="Email" />

           <h5>Password</h5>
           <input type="Password" placeholder='Password' id="Password" /> <br />

           <button>Submit</button>
        </div>
    )
}

export default SignUp