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


import React, { Fragment,useEffect,useState } from 'react';

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

function sendCity()

{
    const sel_city = document.getElementById("cityselection").value;
    console.log(sel_city)
    // localStorage.setItem("selectedcity",sel_city)
    // console.log(localStorage.getItem("selectedcity"));
    // <SelectedCity.Provider value = { sel_city } />
}
export default RenderDropdown; 