import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Patients from "./components/Patients";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Records from "./components/Records";
import Consultations from "./components/Consultations";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/calendar" element={<Appointments />} />
        <Route path="/record" element={<Records />} />
        <Route path="/consultation" element={<Consultations />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
