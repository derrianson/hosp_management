import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import RenderDropdown from './components/getcity';
import RenderHospDropdown from './components/gethospital';
import PatientForm from './components/PatientForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <RenderDropdown/> */}
   <RenderHospDropdown/>
    {/* <PatientForm/> */}
  </React.StrictMode>
);

// ReactDOM.render(<RenderDropdown/>,document.getElementById("root"))
// ReactDOM.render(<RenderHospDropdown/>,document.getElementById("root"))
