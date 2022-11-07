import { useState } from "react";
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Register.css';

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
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <a href="#" class="pull-left" >
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjNDNJOScUxbrXKIE_T0nWSxXhWaZzbOh_A&usqp=CAU" width={200} height={100}/>
            </a>
            <Navbar.Brand href="#home"><h3><i><b>&emsp;Book My Bed</b></i></h3></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link  href="login">Login</Nav.Link>
                <Nav.Link  href="#Register">Register</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div className="auth-form-container1">
        <h2>Register</h2>
        <form className="Register_form">
            <label htmlFor="text">First Name&emsp;</label>
            <input  value ={firstname}  type ="text" placeholder="First Name" id="firstName" name ="firstName" pattern="[a-zA-Z]{1,10}" required/><br></br><br/>
            <label htmlFor="text">Last Name&emsp;</label> 
            <input  value ={lastname}  type ="text" placeholder="Last Name" id="lasttName" name ="laststName" pattern="[a-zA-Z]{1,10}" required/><br></br><br/>
            <label htmlFor="text">Mobile Number&emsp;</label> 
            <input  value ={mobile_no}  type ="text" placeholder="Mobile Number" id="mobile_no" name ="mobile_no" pattern="[7-9]{1}[0-9]{9}" required/><br></br><br/>
            <label htmlFor="text">Aadhar Number&emsp;</label> 
            <input  value ={aadhar}  type ="text" placeholder="Aadhar Number" id="aadhar" name ="aadhar" pattern="[1-9]{1}[0-9]{11}" required/><br></br><br/>
            <label htmlFor="email">Email ID&emsp;</label> 
            <input  value ={email}  type ="email" placeholder="Email ID" id="email" name ="email" pattern="[a-z0-9](\.?[a-z0-9]){5,20}@g(oogle)?mail\.com" required/><br></br><br/>
            <label htmlFor="text">Username&emsp;</label> 
            <input  value ={userName}  type ="text" placeholder="Username" id="userName" name ="userName" pattern="[a-z]{1}[a-z0-9]{3,9}" required/><br></br><br/>
            <label htmlFor="password">Password&emsp;</label> 
            <input value ={password}  type ="password" placeholder="******" id="password" name ="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,9}" required/><br></br><br/>
            <button type="submit">Register</button>
        </form><br/>
        <button onClick={()=>props.onFormSwitch('login')}> Already have an account !!! Log In Here</button><br/>
        </div>
        <footer>
            <h2><i>Book My Bed&emsp;</i></h2>
            <p>Book your hospital bed at ease&emsp;</p>
        </footer>
    </div>
    </>
}