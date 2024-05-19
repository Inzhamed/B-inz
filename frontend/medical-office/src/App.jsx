import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Patients from "./components/Patients";
import Home from "./components/Home";
import Appointments from "./components/Appointments";
import Record from "./components/Record";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>Z
          <Route path="/register" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/patients" element={<Patients />} />
          <Route path="/calendar" element={<Appointments />} />
          <Route path="/record" element={<Record />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
