import React from "react";
import "../Styles/register.css"
const Register = () =>{
    return(
        <div className="registerContainer">
            <h3>Register</h3>
        <div>
        <input type='email' name ="email" placeholder="phone no ,username or Email"/>
        </div>
        <div>
         <input type="password" name ="password" placeholder="password"/>
        </div>
        <button>Signup</button>
        <button className="link">Already have an account? login </button>
     </div>
    )
}

export default Register;