import {React} from "react";
import axios from 'axios';
import { useState } from "react";


function PatientForm(){
    const url="http:localhost:5000/a/patient"
    const [data,setData]=useState({
        name:"",
        //surname:"",
        age:"",
        // gender:"",
        contactno:"",
    })
    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name:data.name,
            //surname:data.surname,
            age:data.age,
            contactno:data.contactno,
        })
    }
    function handle(e){
        const newdata={...data}
        newdata[e.target.id]=e.target.value
        setData(newdata)
        console.log(newdata)
    }
    return(
      
    <form action="http:localhost:5000/a/patient">
        <div class="container">
            <center><h1>Patient Details</h1></center>
            <hr/>
            <label>Userid</label><input></input>
            <label>Name: </label><input onChange={(e)=>handle(e)} value={data.name} type="text" name="name" placeholder= "Name" size="20" required/>&emsp;
            {/* <label>Surname: </label><input onChange={(e)=>handle(e)} value={data.surname} type="text" name="surname" placeholder="Surname" size="15" required/> */}
            <label>Age: </label><input onChange={(e)=>handle(e)} value={data.age} type="number" name="age" placeholder="Age" min="0" max="99" required/>
            {/* <label>Gender: </label><br/>
                <input type="radio" value="Male" name="gender" unchecked required />Male
                <input type="radio" value="Female" name="gender"/>Female
                <input type="radio" value="Other" name="gender"/>Other
                 */}
            <label>Contact Number:</label>
                <input onChange={(e)=>handle(e)} value={data.contactno} type="text" name="phone" placeholder="Mobile Number" size="10" pattern="[7-9]{1}[0-9]{9}" required/>
            <button type="submit" class="registerbtn">Register</button>
        </div>
    </form>
        
    )
}

export default PatientForm;