import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
//import { Login } from './components/login';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
      {/* <Login/> */}
    </React.StrictMode>
  </BrowserRouter>
);


//  ReactDOM.render(<BrowserRouter><App/></BrowserRouter>,document.getElementById("root"))
// ReactDOM.render(<RenderHospDropdown/>,document.getElementById("root"))
