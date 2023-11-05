import React from "react";
import "../Styles/login.css"

const Login = () => {
    return (

        <div className="loginContainer">
            <h3>Login</h3>
           <div>
            <input type='email' name ="email" placeholder="phone,username or Email"/>
           </div>
           <div>
            <input type="password" name ="password" placeholder="Password"/>
           </div>
           <button> Login </button>
           <button className="link">Don't have an account? Sign up</button>
        </div>
       
    );
}
export default Login