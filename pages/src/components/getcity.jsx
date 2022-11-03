// import React, { Fragment,useEffect,useState } from 'react';

//   //console.log(loc);

//    function ShowData() {
//     const [cities,setCities]= useState([]);

//         const getCities= async()=>{
//             try {
//                 const response = await fetch("http://localhost:5000/a/city",{method:'POST'});
//                 const jsonData =  await response.json();
//                 setCities(jsonData);
//             } catch (error) {
//                 console.log(error.message)
//             }
//         }

//         useEffect(()=>{
//             getCities();
//         },[]);

//         console.log(cities);

//     //console.log("Entered showdata")

//     return (

//       <div>
//         <select id="city" ></select>
//         <button onClick={dropDownDisplay}>ShowData</button>
//       </div>

//     );

//     function dropDownDisplay() {
//       console.log("DD manip")
//       var citylist = document.getElementById("city");

//       for (var i = 0; i < cities.length; i++)

//       {
//         var option = document.createElement("option");
//         option.text = cities[i].cityname;
//         citylist.add(option);
//         }

//     }

//   }

//   export default ShowData

//////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
// import { hydrateRoot } from "react-dom/client";

function CityList() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1000/a/city", { method: "POST" })
      .then((response) => response.json())
      .then((data) => setCities(data))
      .then(console.log("api call finish"));
  }, []);

  return cities.map((city, index) => {
    return <option key={index}>{city.cityname}</option>;
  });
}

function SelectedCity() {
  let selectElement = document.querySelector("#test");
  let output = selectElement.value;
  sessionStorage.setItem("city", output);
  // console.log(output);
}

function HospList() {
  const [hospitals, setHospitals] = useState([]);
  let user = {
    city: sessionStorage.getItem.city,
  };
  useEffect(() => {
    fetch("http://localhost:1000/a/hosp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),

      // body: JSON.stringify(a),
      // body: JSON.stringify(
      //   sessionStorage.city != null
      //     ? { city: sessionStorage.city }
      //     : { city: "hyderabad" }
      // ),
    })
      .then((response) => response.json())
      .then((data) => setHospitals(data))
      .then(console.log("hosp api call finish"))

      .catch(console.log("HospList error"));
  }, [user]);
  return hospitals.map((hosp, index) => {
    return <option key={index}>{hosp.hospitalname}</option>;
  });
}

export default function RenderDropdown() {
  return (
    <div>
      <select id="test" onChange={SelectedCity}>
        <option>Please choose one option</option>
        <CityList />
      </select>
      <br />
      <select id="test">
        <option>Please choose hosp</option>
        <HospList />
      </select>
    </div>
  );
}
