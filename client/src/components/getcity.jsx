
import React, { useEffect,useState } from 'react';
import "./getcity.css"
export function GetDropDown() {

  const [cities, setCities] = useState([]);
    const getCities = async () => {
      
        try {

            const response = await fetch("http://localhost:5000/a/city", { method: 'POST' });

            const jsonData = await response.json();

            setCities(jsonData);

        } catch (error) {

            console.log(error.message)

        }

    }

    useEffect(() => {

      getCities();
      

    },[]);

    console.log(cities);

    //console.log("Entered showdata")

    return (
      <div className='gcity'>
      <h1><b><i>Hospital Bed Management System</i></b></h1>
      <h2><b>Select City</b></h2><br/>
      <select id="cityselection" onChange={sendCity}>
        <option>Please choose one city</option>
        {cities.map((city, index) => {
            return <option key={index}>{ city.cityname}</option>;
        })}
      </select>
      </div>
    );

}
function RenderDropdown()
{
    return (
        <div><GetDropDown/></div>
    )
}

function sendCity() {
  const sel_city = document.getElementById("cityselection").value;
  console.log(sel_city)
  sessionStorage.setItem("selectedcity",sel_city)
  window.location.assign('/selectHospital')
}
export default RenderDropdown; 