// import {React} from "react";
// import axios from 'axios';
// import { useState } from "react";


// function PatientForm(){
//     const url="http:localhost:5000/a/patient"
//     const [data,setData]=useState({
//         name:"",
//         //surname:"",
//         age:"",
//         // gender:"",
//         contactno:"",
//     })
//     function submit(e){
//         e.preventDefault();
//         console.log(data)
//         axios.post(url,{
//             name:data.name,
//             //surname:data.surname,
//             age:data.age,
//             contactno:data.contactno,
//         })
//     }
//     function handle(e){
//         const newdata={...data}
//         newdata[e.target.id]=e.target.value
//         setData(newdata)
//         //console.log(newdata)
//     }
//     return(
      
//     <form onSubmit={(e)=>submit(e)}>
//         <div class="container">
//             <center><h1>Patient Details</h1></center>
//             <hr/>
//             <label>Name: </label><input value={data.name} type="text" name="name" placeholder= "Name" size="20" required/>&emsp;
//             {/* <label>Surname: </label><input onChange={(e)=>handle(e)} value={data.surname} type="text" name="surname" placeholder="Surname" size="15" required/> */}
//             <label>Age: </label><input onChange={(e)=>handle(e)} value={data.age} type="number" name="age" placeholder="Age" min="0" max="99" required/>
//             {/* <label>Gender: </label><br/>
//                 <input type="radio" value="Male" name="gender" unchecked required />Male
//                 <input type="radio" value="Female" name="gender"/>Female
//                 <input type="radio" value="Other" name="gender"/>Other
//                  */}
//             <label>Contact Number:</label>
//                 <input onChange={(e)=>handle(e)} value={data.contactno} type="text" name="phone" placeholder="Mobile Number" size="10" pattern="[7-9]{1}[0-9]{9}" required/>
//             <button type="submit" class="registerbtn">Register</button>
//         </div>
//     </form>
        
//     )
// }

// export default PatientForm;



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





    
import { useState,useEffect} from 'react';
import './patientform.css';
const SignUpContainer =() => {
    const [name,setName]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    
    localStorage.setItem("name",name);
    localStorage.setItem("age",age)
    localStorage.setItem("email",email)
    const onSubmitForm = async e => {
    //     e.preventDefault()
    //    try{
    //      const body ={name,age,email}
    //      //const response = await fetch("http://localhost:5000/a/patient/"+userid+"/"+hospid+"/"+wardid+"/"+bedid+"/"+name+"/"+age+"/"+contactno,
    //      const response = await fetch("http://localhost:5000/a/pat",
    //      {
    //         method :"POST",
    //         headers : {"Content-Type":"application/json"},
    //         body :JSON.stringify(body)
    //      })
    //      const jsonData=await response.json()
    //      console.log(jsonData)
    //      //window.location='/'
    //    }
    //    catch (err){
    //     console.log(err)
    //    }


    sessionStorage.setItem("name",name);
    sessionStorage.setItem("age",age)
    sessionStorage.setItem("email",email)
    window.location.assign('/summary')
    } 
    const style={textAlign:"center", fontSize:"30px", fontWeight:'bold'}
        return (
            <div className='loginContainer'>
            <h1><i><b>Hospital Bed Management System</b></i></h1><br/>
            <h1 style={style}>Patient Booking Form</h1><br/>
            <form  onSubmit={onSubmitForm} action='/summary'>
                <label><b>Name&emsp;</b></label><input type="text" id='uname'  placeholder='Patient Name' onChange={(e)=>setName(e.target.value)} required/><br/><br/>
                <label><b>Age&emsp;</b></label><input type="text" id='p' placeholder='Age' onChange={(e)=>setAge(e.target.value)} required/><br/><br/>
                <label><b>Email Address&emsp;</b></label> < input type='text' id='email' placeholder='email' onChange={(e)=>setEmail(e.target.value)} required/><br/><br/>
                <input type='submit' id='submit' value='Submit'/>
            </form>
            </div>
        );
            

    
}
 
export default SignUpContainer;
