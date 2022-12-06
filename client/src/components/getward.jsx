import React, { useEffect, useState } from "react";

const sel_hospid = sessionStorage.getItem("hospid");
export function GetWard() {
  const [wards, setWards] = useState([]);

  
  const getWards = async () => {
    try {
      const response = await fetch("http://localhost:5000/a/ward/"+ sel_hospid , {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        //  body: JSON.stringify(sel_hospid)
      });

      const jsonData = await response.json();

      setWards(jsonData);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getWards();
  }, []);

  return (
    <div className='gcity'>
      <h1><b><i>Hospital Bed Management System</i></b></h1>
      <h2><b>Select Ward</b></h2><br/>
      <select id="wardselection" onChange={selectedWard}>
        <option>Please choose one option</option>
        {wards.map((ward, index) => {
          return (
            <option key={index} id={ward.wardid}>
              {ward.wardtype}
            </option>
          );
          // console.log(hosp.hospitalname);
        })}
      </select>
    </div>
  );
}
function RenderWard() {
  return (
    <div>
      <GetWard />
    </div>
  );
}
function getBedInfo()
{
 var bedinfo = JSON.parse(sessionStorage.getItem('bedinfo'))
  console.log(bedinfo);
  if (bedinfo.length == 0) {
    alert("No beds available. Choose another hospital")
    window.location.assign('/selectHospital')
  }
  else {
    sessionStorage.setItem("bedid", bedinfo[0].bedid)
    
    const updateBedStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/a/bed/select" + bedinfo[0].bedid,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            //  body: JSON.stringify(sel_hospid)
          }
        );

        const jsonData = await response.json();
       
      } catch (error) {
        console.log(error.message);
      }
    };
    updateBedStatus();
    window.location.assign('/selectPatient')
  }
}

function setBedInfo() {
  var selwardid = sessionStorage.getItem("wardid");
  var bedinfo = {};
  const bedData = async () => {
    try {
      const response = await fetch("http://localhost:5000/a/bed/" + selwardid, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        //  body: JSON.stringify(sel_hospid)
      });

      const jsonData = await response.json();
      bedinfo = jsonData;
      sessionStorage.setItem('bedinfo', JSON.stringify(bedinfo))
    } catch (error) {
      console.log(error.message);
    }
  };
  bedData()
  getBedInfo()
}


function selectedWard() {
  const selWard = document.getElementById("wardselection");
  const selwardid =
    selWard.options[selWard.selectedIndex].getAttribute("id");
  sessionStorage.setItem("wardid", selwardid);
  sessionStorage.setItem("wardname",selWard.value)
  console.log(selwardid);
 setBedInfo()
}



export default RenderWard;
