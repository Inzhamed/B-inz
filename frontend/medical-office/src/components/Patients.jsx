import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import Home from "../assets/homelogo.svg";
import PatientIcon from "../assets/patient.svg";
import Folder from "../assets/folder.svg";
import Calendar from "../assets/calendar.svg";
import Logout from "../assets/logout.svg";
import Bell from "../assets/bell.svg";
import Avatar from "../assets/avatar.svg";
import ArrowDown from "../assets/arrowdown.svg";
import AddPatientPopup from "./Popus/AddPatientPopup";
import Consultation from "../assets/stethoscope.svg";
import { useState, useEffect } from "react";

const Patients = () => {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const [hover, setHover] = useState(false);
  const doctorEmail = localStorage.getItem("doctorEmail");
  const url = "http://localhost:8080/api/doctors";
  const url1 = "http://localhost:8080/api/patients";

  const [doctorData, setDoctorData] = useState({});
  const [patients, setPatients] = useState([]);

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

  const handleRefresh1 = async () => {
    const response = await fetch(url1, {
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
    handleRefresh1();
  }, []);

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
                <img src={Home} alt="Homelogo" className="h-8 w-8 " />
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
                <img src={PatientIcon} alt="Patient" className="h-8 w-8" />
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
                <img src={Folder} alt="Folder" className="h-8 w-8 " />
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
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="ml-14 mt-11">
            <h3 className="text-indigo-800 text-3xl font-semibold">
              Dr. {doctorData.firstName} {doctorData.lastName}!
            </h3>
            <p className="text-neutral-500 text-lg mt-1">
              Here are your patients
            </p>
          </div>
          <div className="flex gap-5 mr-9">
            <img
              className="mr-6"
              src={Bell}
              alt="Bell"
              width={24}
              height={24}
            />
            <img src={Avatar} alt="avatar" width={24} height={24} />
            <p className="mt-11">
              Dr. {doctorData.firstName} {doctorData.lastName}
            </p>
            <img src={ArrowDown} alt="arrowdown" width={24} height={24} />
          </div>
        </div>
        <div className="flex justify-center my-10">
          <div className="w-[70rem] h-96 bg-neutral-100 rounded-2xl shadow-lg pl-14 pt-9">
            <h1 className="text-2xl font-semibold mb-7">Patients List</h1>
            <AddPatientPopup
              show={showPopup}
              handleClose={togglePopup}
              className="w-2/3 h-[32rem] bg-white rounded-2xl shadow"
            />
            {patients.map((patient) => (
              <div key={patient.id} className="w-[41rem] h-9 flex gap-24 mt-4">
                <div className="w-20 h-9 flex-col gap-1 flex">
                  <div className="text-zinc-400 text-xs font-semibold">
                    First Name
                  </div>
                  <div className="w-20 text-xs font-medium">
                    {patient.firstName}
                  </div>
                </div>
                <div className="w-20 h-9 flex-col gap-1 flex">
                  <div className="text-zinc-400 text-xs font-semibold">
                    Last Name
                  </div>
                  <div className="w-20 text-black text-xs font-medium">
                    {patient.lastName}
                  </div>
                </div>
                <div className="w-20 h-9 flex-col gap-1 flex">
                  <div className="text-zinc-400 text-xs font-semibold">Age</div>
                  <div className="w-20 text-black text-xs font-medium">
                    {patient.age}
                  </div>
                </div>
                <div className="w-28 h-9 flex-col gap-1 flex">
                  <div className="text-zinc-400 text-xs font-semibold">
                    Phone Number
                  </div>
                  <div className="w-80 text-black text-xs font-medium">
                    {patient.phoneNum}
                  </div>
                </div>
                <div className="w-80 h-9 flex-col gap-1 flex">
                  <div className="text-zinc-400 text-xs font-semibold">
                    Allergies
                  </div>
                  <div className="w-80 text-black text-xs font-medium">
                    {patient.allergies.join(", ")}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-16">
              <button
                className="bg-indigo-800 text-white py-2 px-6 rounded-lg shadow"
                onClick={togglePopup}
              >
                Add New Patient
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
