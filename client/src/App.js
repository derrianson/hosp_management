
import { Route, Routes } from 'react-router-dom';
import RenderDropdown from './components/getcity';
import RenderHosp from './components/gethospital';
import RenderWard from './components/getward';
import PatientForm from './components/PatientForm';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/selectCity" element={<RenderDropdown />} />
        <Route path='/selectHospital' element={<RenderHosp />} />
        <Route path="/selectWard" element={<RenderWard />} />
        <Route path='/selectPatient' element={<PatientForm/>} />
      </Routes>
      {/* <div>Hello</div> */}
    </div>
  );
}

export default App;