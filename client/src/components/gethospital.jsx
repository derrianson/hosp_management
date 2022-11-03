// import React, { Fragment, useState, useEffect } from 'react';
// import Selectedcity from '..';

// function getHospital(){
//     const [city,setCity] = useState(Selectedcity);

//     const getHospitals = async(e)=>{
//         e.preventDefault();
//         try {
//             let res=await fetch("http://localhost:5000/a/city",{
//                 method:"POST",
//                 body:JSON.stringify({
//                     city:city
//                 })
//             });

//             let resJson =await res.json();

//             if(res.status === 200){
//                 console.log("Sent Successfully...!!");
//             }
//             else{
//                 console.log("Unsuccessful");
//             }
            
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     return(
        
//     )
// }
//////////////////////////////////////////////////////////////////////////////////////////////

import React, {useEffect,useState } from 'react';
import axios from 'axios';

const GetDropDown= () => {
  const [hospitals, setHospitals] = useState([]);
  const [city,setCity]=useState("hyderabad")
  const selected_city=localStorage.getItem("selectedcity")

  console.log(selected_city)
  
    const getHospitals =  async () => {
      
        try {
          console.log("ababab")
          const  city1={"city": "hyderabad"}
       
            //  const response = await fetch("http://localhost:5000/a/hosp", {

            //   // method: "POST",
      
            //   // headers: { "Content-Type": "application/json" },
      
            //   // body: JSON.stringify(body),
      
            // });
        //http://localhost:5000/a/hosp
          axios.post("http://localhost:5000/a/hosp",{
            city:city1
          })
          .then(res=>{
            console.log(res)
          })

        // console.log("after city");
        //     const jsonData = await response.json();

        //     setHospitals(jsonData);

        } catch (error) {

            console.log(error.message)
        }
    }

    useEffect(() => {

      getHospitals();

    },[]);

    return (
      <select id="hospselection">
        <option>Please choose one option</option>
        {hospitals.map((hosp, index) => {
            return <option key={index}>{ hosp.hospitalname}</option>;
            console.log(hosp.hospitalname);
        })}
      </select>
    );

}
const RenderHospDropdown= () =>{

    return (
        <div><GetDropDown/></div>
    )
}

export default RenderHospDropdown; 