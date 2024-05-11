import { Link } from "react-router-dom";
import Doctors from "../assets/doctors.svg";
import Logo from "../assets/logo.svg";
import GoogleLogo from "../assets/googlelogo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState("");

  const url = "http://localhost:8080/api/login";

  const loginData = {
    email: "",
    password: "",
  };

  const handleInput = (event) => {
    loginData[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((res) => {
        if (!res.error) {
          console.log(res);
          navigate("/home");
        } else {
          console.log("Error:", res.message);
          setErrMsg(res.message);
        }
      })
      .catch((error) => console.log("Error:", error.message));
  };

  return (
    <div className="w-full flex flex-col md:flex-row h-screen md:items-center md:justify-around">
      <img
        className="w-full hidden md:block md:w-5/12 h-auto md:h-full"
        src={Doctors}
        alt="doctorsImage"
      />
      <div className="flex flex-col justify-center w-full md:w-5/12 p-5 md:p-0 md:self-center">
        <div className="flex items-center mb-5">
          <img className="w-10 h-14 mr-3" src={Logo} alt="logo" />
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">DoctiFy</h1>
            <p className="text-zinc-600 text-xs md:text-sm">
              Keep Track of your patients!
            </p>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold">
          Welcome back, Doctor!
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="flex flex-col mt-3 gap-3"
        >
          <input
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleInput(e)}
            placeholder="Email"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />
          <input
            type="password"
            id="password"
            name="password"
            onChange={(e) => handleInput(e)}
            placeholder="Password"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />
          <button
            type="submit"
            className="bg-indigo-800 rounded-md text-white h-10 md:h-12 text-base md:text-md font-medium mt-4"
          >
            Sign In
          </button>
        </form>
        <h1 className="text-red-700 text-center mt-2 te">{errMsg}</h1>
        <button className="bg-white rounded-md border border-gray-400 text-gray-600 text-xs md:text-sm py-2 md:py-3 pl-2 mt-4 flex items-center gap-2 justify-center">
          <img
            src={GoogleLogo}
            alt="Google Logo"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <span>Sign In with Google</span>
        </button>

        <p className="text-sm text-center mt-4">
          Dont have an account?{" "}
          <Link to="/register" className="text-indigo-800">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Login;
