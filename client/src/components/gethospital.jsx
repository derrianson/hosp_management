
import React, { useEffect, useState } from 'react';
const sel_city = sessionStorage.getItem("selectedcity");
export function GetDropDown() {

 const [hospitals, setHospitals] = useState([]);
 
 const selcity = {sel_city}
 const getHospitals = async () => {
   try {
     const response = await fetch("http://localhost:5000/a/hosp/"+sel_city, {
       method: "GET",
       headers: { "Content-Type": "application/json" },

       // body: JSON.stringify(selcity),
     });

     const jsonData = await response.json();

     setHospitals(jsonData);
   } catch (error) {
     console.log(error.message);
   }
 };

 useEffect(() => {
   getHospitals();
 }, []);
   

 return (
 <div>
     {sel_city}
     <select id="hospselection" onChange={selectedHospital}>
       <option>Please choose one option</option>
       {hospitals.map((hosp, index) => {

         return <option key={index} id={hosp.hospitalid}>{ hosp.hospitalname}</option>;
           // console.log(hosp.hospitalname);
       })}
     </select>
     </div>
   );

}
function RenderHosp()
{
   return (
       <div><GetDropDown/></div>
   )
}

function selectedHospital()
{
 const selHospital = document.getElementById("hospselection");
 const selhospid = selHospital.options[selHospital.selectedIndex].getAttribute('id');
 sessionStorage.setItem("hospid", selhospid);
 window.location.assign("/selectWard")
}

export default RenderHosp; 