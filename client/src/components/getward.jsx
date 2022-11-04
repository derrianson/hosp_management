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
    <div>
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

function selectedWard() {
  const selWard = document.getElementById("wardselection");
  const selwardid =
    selWard.options[selWard.selectedIndex].getAttribute("id");
  sessionStorage.setItem("wardid", selwardid);
  console.log(selwardid);
}

export default RenderWard;
