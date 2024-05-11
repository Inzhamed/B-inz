import { Link } from "react-router-dom"; // Import Link from react-router-dom
import Logo from "../assets/logo.svg";
import Homelogo from "../assets/homelogo.svg";
import Patient from "../assets/patient.svg";
import History from "../assets/history.svg";
import Calendar from "../assets/calendar.svg";
import Edit from "../assets/edit.svg";
import Logout from "../assets/logout.svg";
import Bell from "../assets/bell.svg";
import Avatar from "../assets/avatar.svg";
import ArrowDown from "../assets/arrowdown.svg";
import { useState } from "react";

const Home = () => {
  const [hover, setHover] = useState(false);
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
            DocTech
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
              <Link to="/calendar" className="flex py-2 px-4 items-center">
                <img src={Calendar} alt="Calendar" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  Calendar
                </p>
              </Link>
            </li>
            <li>
              <Link to="/History" className="flex py-2 px-4 items-center">
                <img src={History} alt="History" className="h-8 w-8" />
                <p
                  className={`ml-5 text-xl font-bold ${
                    hover ? "block " : "hidden"
                  }`}
                >
                  History
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="mb-16">
          <ul>
            <li className="mb-7">
              <img src={Edit} alt="Edit" className="h-8 w-8" />
            </li>
            <li>
              <img src={Logout} alt="Logout" className="h-8 w-8" />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="ml-14 mt-11">
            <h2 className="text-2xl">Welcome</h2>
            <h3 className="text-indigo-800 text-3xl font-semibold">
              Dr. Fares Slimani!
            </h3>
            <p className="text-neutral-500 text-sm mt-1">
              Here are your recent Tasks. updates and Appointments{" "}
            </p>
          </div>
          <div className="flex gap-5 mr-6">
            <img className="mr-6" src={Bell} alt="Bell" />
            <img src={Avatar} alt="avatar" />
            <p className="mt-10">Dr. Name</p>
            <img src={ArrowDown} alt="arrowdown" />
          </div>
        </div>
        <div className="flex justify-around my-10">
          <div className="w-[50rem] h-96 bg-neutral-100 rounded-2xl shadow-lg pl-14 pt-9">
            <h1 className="text-2xl font-semibold mb-7">
              Upcoming Appointments
            </h1>
            <div className="w-[41rem] h-9 flex gap-24 mt-4">
              <div className="w-20 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">Date </div>
                <div className="w-20 text-xs font-medium">01 June 2004</div>
              </div>
              <div className="w-20 h-9 flex-col gap-1flex">
                <div className="text-zinc-400 text-xs font-semibold">Time</div>
                <div className="w-20 text-black text-xs font-medium">
                  09:00h-10:00h
                </div>
              </div>
              <div className="w-80 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">
                  Description
                </div>
                <div className="w-80 text-black text-xs font-medium">
                  nahi darsa 36 ou yzayar salk tae l’appareil
                </div>
              </div>
            </div>
            <div className="w-[41rem] h-9 flex gap-24 mt-4">
              <div className="w-20 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">Date </div>
                <div className="w-20 text-xs font-medium">01 June 2004</div>
              </div>
              <div className="w-20 h-9 flex-col gap-1flex">
                <div className="text-zinc-400 text-xs font-semibold">Time</div>
                <div className="w-20 text-black text-xs font-medium">
                  09:00h-10:00h
                </div>
              </div>
              <div className="w-80 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">
                  Description
                </div>
                <div className="w-80 text-black text-xs font-medium">
                  nahi darsa 36 ou yzayar salk tae l’appareil
                </div>
              </div>
            </div>{" "}
            <div className="w-[41rem] h-9 flex gap-24 mt-4">
              <div className="w-20 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">Date </div>
                <div className="w-20 text-xs font-medium">01 June 2004</div>
              </div>
              <div className="w-20 h-9 flex-col gap-1flex">
                <div className="text-zinc-400 text-xs font-semibold">Time</div>
                <div className="w-20 text-black text-xs font-medium">
                  09:00h-10:00h
                </div>
              </div>
              <div className="w-80 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">
                  Description
                </div>
                <div className="w-80 text-black text-xs font-medium">
                  nahi darsa 36 ou yzayar salk tae l’appareil
                </div>
              </div>
            </div>{" "}
            <div className="w-[41rem] h-9 flex gap-24 mt-4">
              <div className="w-20 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">Date </div>
                <div className="w-20 text-xs font-medium">01 June 2004</div>
              </div>
              <div className="w-20 h-9 flex-col gap-1flex">
                <div className="text-zinc-400 text-xs font-semibold">Time</div>
                <div className="w-20 text-black text-xs font-medium">
                  09:00h-10:00h
                </div>
              </div>
              <div className="w-80 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">
                  Description
                </div>
                <div className="w-80 text-black text-xs font-medium">
                  nahi darsa 36 ou yzayar salk tae l’appareil
                </div>
              </div>
            </div>{" "}
            <div className="w-[41rem] h-9 flex gap-24 mt-4">
              <div className="w-20 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">Date </div>
                <div className="w-20 text-xs font-medium">01 June 2004</div>
              </div>
              <div className="w-20 h-9 flex-col gap-1flex">
                <div className="text-zinc-400 text-xs font-semibold">Time</div>
                <div className="w-20 text-black text-xs font-medium">
                  09:00h-10:00h
                </div>
              </div>
              <div className="w-80 h-9 flex-col gap-1 flex">
                <div className="text-zinc-400 text-xs font-semibold">
                  Description
                </div>
                <div className="w-80 text-black text-xs font-medium">
                  nahi darsa 36 ou yzayar salk tae l’appareil
                </div>
              </div>
            </div>
          </div>
          <div className="w-[38rem] h-96 bg-neutral-100 rounded-2xl shadow-lg pl-14 pt-9">
            <h1 className=" text-2xl font-semibold mb-3">Recent Patients</h1>
            <div className="flex items-center gap-5 w-60 h-12 mt-4">
              <img className="w-10" src={Avatar} alt="avatar" />
              <p className="text-zinc-800 text-lg font-semibold">
                Nassim Hadjebbar
              </p>
            </div>
            <div className="flex items-center gap-5 w-60 h-12 mt-4">
              <img className="w-10" src={Avatar} alt="avatar" />
              <p className="text-zinc-800 text-lg font-semibold">
                Nassim Hadjebbar
              </p>
            </div>
            <div className="flex items-center gap-5 w-60 h-12 mt-4">
              <img className="w-10" src={Avatar} alt="avatar" />
              <p className="text-zinc-800 text-lg font-semibold">
                Nassim Hadjebbar
              </p>
            </div>
            <div className="flex items-center gap-5 w-60 h-12 mt-4">
              <img className="w-10" src={Avatar} alt="avatar" />
              <p className="text-zinc-800 text-lg font-semibold">
                Nassim Hadjebbar
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
