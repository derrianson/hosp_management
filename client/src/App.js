
import { Route, Routes } from 'react-router-dom';
import RenderDropdown from './components/getcity';
import Getform from './components/getform';
import RenderHosp from './components/gethospital';
import RenderWard from './components/getward';
import { Login } from './components/login';
import PatientForm from './components/PatientForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/selectCity" element={<RenderDropdown />} />
        <Route path='/selectHospital' element={<RenderHosp />} />
        <Route path="/selectWard" element={<RenderWard />} />
        <Route path='/selectPatient' element={<PatientForm/>} />
        <Route path='/summary' element={<Getform/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      {/* <div>Hello</div> */}
    </div>
  );
}

export default App;