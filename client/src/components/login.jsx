import { useState } from "react";
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './login.css';

export const Login=(props)=>{
    const {userName, setUser}=useState('');
    const {password, setPass}=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userName);
    }
    return <>
    <div>
        <Navbar bg="dark" variant="dark">
            <Container>
            <a href="#" class="pull-left" >
                <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSjNDNJOScUxbrXKIE_T0nWSxXhWaZzbOh_A&usqp=CAU" width={200} height={100}/>
            </a>
            <Navbar.Brand href="#home"><h3><i><b>&emsp;Book My Bed</b></i></h3></Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link  href="#login">Login</Nav.Link>
                <Nav.Link  href="register">Register</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        <div className="auth-form-container">
            <h1><i>Book your Hospital Bed at Ease</i></h1>
            <h2>Log In</h2>
            <form className="login_form" >
                <label htmlFor="text">Username&emsp;</label>
                <input value ={userName}  type ="text" placeholder="Username" id="userName" name ="userName" pattern="[a-z]{1}[a-z0-9]{3,9}" required/><br></br><br/>
                <label htmlFor="password">Password&emsp;</label>
                <input value ={password}  type ="password" placeholder="******" id="password" name ="password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,9}" required/><br></br><br/>
                <button type="submit">Log In</button>
            </form>
            <br/>
            <button onClick={()=>props.onFormSwitch('register')}> Don't have an account ? Register Here</button>
        </div>
        <footer>
            <h2><i>Book My Bed&emsp;</i></h2>
            <p>Book your hospital bed at ease&emsp;</p>
        </footer>
    </div>
    </>
}