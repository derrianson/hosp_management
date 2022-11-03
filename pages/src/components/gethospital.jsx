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

import React, { useEffect, useState } from "react";
export function GetDropDown() {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/a/hosp", {
      method: "POST",
      body: JSON.stringify(localStorage.getItem("city")),
    })
      .then((response) => response.json())
      .then((data) => setHospitals(data))
      .then(console.log("hosp api call finish"));
  });

  return (
    <select id="hospselection">
      <option>Please choose one option</option>
      {hospitals.map((hosp, index) => {
        return <option key={index}>{hosp.hospitalname}</option>;
      })}
    </select>
  );
}

export default function RenderHospDropdown() {
  const [clas, setClas] = "d";
  useEffect(() => {
    if (localStorage.getItem.city != null) {
      setClas("invis");
      console.log("invis11111111");
    }
    console.log("invis");
  });

  return (
    <select id="hospselection" className={clas}>
      <option>Please choose one option</option>
    </select>
  );
}
