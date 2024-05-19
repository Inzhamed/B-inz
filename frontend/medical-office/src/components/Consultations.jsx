// Consultations.jsx
import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Homelogo from "../assets/homelogo.svg";
import Patient from "../assets/patient.svg";
import Folder from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import Logout from "../assets/logout.svg";
import Bell from "../assets/bell.svg";
import Avatar from "../assets/avatar.svg";
import ArrowDown from "../assets/arrowdown.svg";
import Consultation from "../assets/stethoscope.svg";
import AddConsultationPopup from "./Popus/AddConsultationPopup";
import { useState, useEffect } from "react";

const Consultations = () => {
  const [hover, setHover] = useState(false);
  const doctorEmail = localStorage.getItem("doctorEmail");
  const url = "http://localhost:8080/api/doctors";
  const url2 = "http://localhost:8080/api/consultations";
  const url3 = "http://localhost:8080/api/patients";
  const [doctorData, setDoctorData] = useState({});
  const [consultations, setConsultations] = useState([]);
  const [patients, setPatients] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleRefresh = async () => {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const doctor = data.find((doctor) => doctor.email === doctorEmail);
    if (doctor) {
      setDoctorData(doctor);
    }
  };

  const handleRefresh2 = async () => {
    const response = await fetch(url2, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const filteredConsultations = data.filter(
      (consultation) => consultation.doctorEmail === doctorEmail
    );
    setConsultations(filteredConsultations);
  };
  const handleRefresh3 = async () => {
    const response = await fetch(url3, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const filteredPatients = data.filter(
      (patient) => patient.doctorEmail === doctorEmail
    );
    setPatients(filteredPatients);
  };

  useEffect(() => {
    handleRefresh();
    handleRefresh2();
    handleRefresh3();
  }, []);

  // Create a map of patient phone numbers to their names
  const patientMap = patients.reduce((map, patient) => {
    map[patient.phoneNum] = `${patient.firstName} ${patient.lastName}`;
    return map;
  }, {});

  return (
    <div className="flex h-screen">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={
          "bg-indigo-800 shadow text-white transition duration-3000 w-32 hover:w-64 hover:duration-3000 hover:transition flex flex-col items-center justify-between"
        }
      >
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="w-14 h-14 rounded-xl mt-12" />
          <h2
            className={`text-2xl font-bold mt-12 ml-5 ${
              hover ? "block " : "hidden"
            }`}
          >
            B-inz Health
          </h2>
        </div>
        <div className="flex-wrap flex items-center ">
          <ul className="flex flex-col items-center">
            <li className="mb-7 ">
              <Link to="/home" className="flex py-2 px-4 items-center">
                <img src={Homelogo} alt="Homelogo" className="h-8 w-8 " />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Home
                </p>
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/patients" className="flex py-2 px-4 items-center">
                <img src={Patient} alt="Patient" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Patients
                </p>
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/consultation" className="flex py-2 px-4 items-center">
                <img src={Consultation} alt="Folder" className="h-8 w-8 " />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Consultations
                </p>
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/calendar" className="flex py-2 px-4 items-center">
                <img src={Calendar} alt="Calendar" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Appointments
                </p>
              </Link>
            </li>
            <li className="mb-7">
              <Link to="/record" className="flex py-2 px-4 items-center">
                <img src={Folder} alt="Folder" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Medical Records
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-16">
          <ul>
            <li>
              <Link to="/" className="flex py-2 px-4 items-center">
                <img src={Logout} alt="Logout" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Log out
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 bg-neutral-100 h-full overflow-y-auto">
        <div className="flex justify-between">
          <div className="ml-14 mt-11">
            <h3 className="text-indigo-800 text-3xl font-semibold">
              Dr. {doctorData.firstName} {doctorData.lastName}!
            </h3>
            <p className="text-neutral-500 text-lg mt-1">
              Here are your consultations
            </p>
          </div>
          <div className="flex gap-5 mr-6">
            <img className="mr-6" src={Bell} alt="Bell" />
            <img src={Avatar} alt="avatar" />
            <p className="mt-5">
              Dr. {doctorData.firstName} {doctorData.lastName}
            </p>
            <img src={ArrowDown} alt="arrowdown" />
          </div>
        </div>
        <div className="overflow-x-auto ml-12 mt-20 mr-10">
          <table className="w-full whitespace-nowrap table-auto">
            <thead className="bg-neutral-200 text-neutral-600 text-sm font-semibold h-16">
              <tr>
                <th className="px-6 py-3 text-left">Patient Name</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Diagnosis</th>
                <th className="px-6 py-3 text-left">Medications</th>
              </tr>
            </thead>
            <tbody>
              {consultations.map((consultation) => (
                <tr
                  key={consultation.id}
                  className="h-20 text-sm text-neutral-500 border-b"
                >
                  <td className="px-6 py-3 text-left">
                    {patientMap[consultation.patientNumber] ||
                      "Unknown Patient"}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {new Date(consultation.date).toLocaleString()}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {consultation.diagnosis}
                  </td>
                  <td className="px-6 py-3 text-left">
                    {consultation.medications.join(", ")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mr-12 mt-5">
          <button
            onClick={togglePopup}
            className="bg-indigo-800 text-white py-2 px-4 rounded"
          >
            Add Consultation
          </button>
        </div>
      </div>
      <AddConsultationPopup show={showPopup} handleClose={togglePopup} />
    </div>
  );
};

export default Consultations;
