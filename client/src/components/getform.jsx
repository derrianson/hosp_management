import React, { Component } from 'react';
import "./table.css"
function Getform(){

    return(
        <div className='table' id="tab_sum">
            <h1><i><b>Hospital Bed Management System</b></i></h1><br/>
            <h1>Summary</h1><br/>
        <table id="summary" className='tables'>
            <tr>
                <th>Name</th>
                <td>{sessionStorage.getItem("name")}</td>
            </tr>
           
            <tr>
                <th>Age</th>
                <td>{sessionStorage.getItem("age")}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>{sessionStorage.getItem("email")}</td>
            </tr>
            <tr>
                <th>City</th>
                <td>{sessionStorage.getItem("selectedcity")}</td>
            </tr>
            <tr>
                <th>Hospital</th>
                <td>{sessionStorage.getItem("hospname")}</td>
            </tr>
            <tr>
                <th>Ward</th>
                <td>{sessionStorage.getItem("wardname")}</td>
            </tr>
            <tr>
                <th>Bed</th>
                <td>{sessionStorage.getItem("bedid")}</td>
            </tr>
        </table>
        {/* <button onClick={window.print()}>Print Booking Info</button> */}
        </div>
    )

}

export default Getform;