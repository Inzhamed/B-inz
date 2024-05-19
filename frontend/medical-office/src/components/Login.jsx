import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import GoogleLogo from "../assets/googlelogo.svg";
import Doctors from "../assets/doctors.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const url = "http://localhost:8080/api/doctors";
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInput = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      event.target.value = value.toLowerCase();
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    const doctor = data.find(
      (doctor) =>
        doctor.email === formData.email && doctor.password === formData.password
    );

    if (doctor) {
      console.log(doctor.email);
      localStorage.setItem("doctorEmail", doctor.email);
      navigate("/home");
    } else {
      setError("Invalid email or password");
    }
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
            <h1 className="text-xl md:text-2xl font-semibold">B-inz Health</h1>
            <p className="text-zinc-600 text-xs md:text-sm">
              Keep Track of your patients!
            </p>
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold">
          Welcome Back Doctor!
        </h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="flex flex-col mt-3 gap-3"
        >
          <input
            required
            type="email"
            id="email"
            name="email"
            onChange={(e) => handleInput(e)}
            placeholder="Email"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />
          <input
            required
            type="password"
            id="password"
            name="password"
            onChange={(e) => handleInput(e)}
            placeholder="Password"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <button
            type="submit"
            className="bg-indigo-800 rounded-md text-white h-10 md:h-12 text-base md:text-md font-medium mt-4"
          >
            Sign In
          </button>
        </form>
        <button className="bg-white rounded-md border border-gray-400 text-gray-600 text-xs md:text-sm py-2 md:py-3 pl-2 mt-4 flex items-center gap-2 justify-center">
          <img
            src={GoogleLogo}
            alt="Google Logo"
            className="w-5 h-5 md:w-6 md:h-6"
          />
          <span>Register with Google</span>
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
