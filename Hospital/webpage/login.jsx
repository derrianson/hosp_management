import { useState } from "react";

export const Login=(props)=>{
    const {userName, setUser}=useState('');
    const {password, setPass}=useState('');

    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(userName);

    }

    return <>
    <div className="auth-form-container">
    
 
    <h2>Login</h2>
    <form className="login_form" >


                <label htmlFor="text">Username</label>
             <input  value ={userName}  type ="text" placeholder="username" id="userName" name ="userName"/>
                <label htmlFor="password">password</label>
                <input value ={password}  type ="password" placeholder="******" id="password" name ="password"  />
                
                <button type="submit">Register</button>
            </form>
           <button onClick={()=>props.onFormSwitch('register')}> Already have an account? Login Here</button>
           </div>

    </>
}