import { useState } from "react";

export const Register=(props)=>{

    const {userName, setUser}=useState('');
    const {password, setPass}=useState('');
    const{email, setEmail} =useState('');
    const {aadhar, setAadhar}=useState('');
    const {mobile_no, setMobile}=useState('');
    const {firstname, setFirstName}= useState('');
    const {lastname, setLastName}= useState('');

    const handleSubmit=(e)=>{

        e.preventDefault();
        console.log(userName);

    }


    return  <>
    <div className="auth-form-container">

    
 
    <h2>Register</h2>
    <form className="Register_form" >


                <label htmlFor="text">FirstName</label> 
             <input  value ={firstname}  type ="text" placeholder="FirstName" id="firstName" name ="firstName"/>
             <label htmlFor="text">LasttName</label> 
             <input  value ={lastname}  type ="text" placeholder="LasttName" id="lasttName" name ="laststName"/>
             <label htmlFor="number">Mobile no</label> 
             <input  value ={mobile_no}  type ="number" placeholder="Mobile no" id="mobile_no" name ="mobile_no"/>
             <label htmlFor="text">Aadhar</label> 
             <input  value ={aadhar}  type ="text" placeholder="Aadhar" id="aadhar" name ="aadhar"/>


             <label htmlFor="email">Email</label> 
             <input  value ={email}  type ="email" placeholder="email" id="email" name ="email"/>

             <label htmlFor="text">Username</label> 
             <input  value ={userName}  type ="text" placeholder="username" id="userName" name ="userName"/>
                <label htmlFor="password">password</label> 
                <input value ={password}  type ="password" placeholder="******" id="password" name ="password"  />
                <br/>
                
                <button type="submit">Log In</button>
            </form>
            <br/>
           <button onClick={()=>props.onFormSwitch('login')}> Dont have an account? Register Here</button>

           </div>

    </>
}