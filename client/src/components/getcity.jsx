
import React, { useEffect,useState } from 'react';

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
      <select id="cityselection" onChange={sendCity}>
        <option>Please choose one option</option>
        {cities.map((city, index) => {
            return <option key={index}>{ city.cityname}</option>;
        })}
      </select>
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