import { Link } from "react-router-dom";
import Doctors from "../assets/doctors.svg";
import Logo from "../assets/logo.svg";
import GoogleLogo from "../assets/googlelogo.svg";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const url = "http://localhost:8080/api/doctors";

  const navigate = useNavigate();
  const formData = {
    firstName: "",
    lastName: "",
    birthDate: "",
    speciality: "",
    address: "",
    phoneNum: "",
    email: "",
    password: "",
  };

  const handleInput = (event) => {
    // Directly modify the formData object
    if (event.target.name === "email") {
      event.target.value = event.target.value.toLowerCase();  
    }
    formData[event.target.name] = event.target.value;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => alert("Error:", error.message));
    navigate("/");
  };

  return (
    <div className="w-full flex flex-col md:flex-row h-screen md:items-center md:justify-around">
      <img
        className="w-full hidden md:block md:w-5/12 h-auto md:h-full"
        src={Doctors}
        alt="doctorsImage"
      />
      <div className="flex flex-col justify-center w-full md:w-5/12 p-5 md:p-0 md:self-center">
        {" "}
        <div className="flex items-center mb-5">
          <img className="w-10 h-14 mr-3" src={Logo} alt="logo" />{" "}
          <div>
            <h1 className="text-xl md:text-2xl font-semibold">B-inz Health</h1>{" "}
            <p className="text-zinc-600 text-xs md:text-sm">
              Keep Track of your patients!
            </p>{" "}
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-semibold">Welcome Doctor!</h2>
        <form
          onSubmit={(e) => handleSubmit(e)}
          action=""
          className="flex flex-col mt-3 gap-3"
        >
          <div className="flex flex-col md:flex-row md:gap-3">
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={(e) => handleInput(e)}
              placeholder="First Name"
              required
              className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 mb-3 md:mb-0 md:w-1/2"
            />
            <input
              required
              type="text"
              id="lastName"
              name="lastName"
              onChange={(e) => handleInput(e)}
              placeholder="Last Name"
              className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:ml-3 md:w-1/2"
            />
          </div>
          <input
            required
            type="text"
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
          <div className="flex flex-col md:flex-row md:gap-3">
            <input
              type="text"
              required
              onChange={(e) => handleInput(e)}
              id="address"
              name="address"
              placeholder="Your address"
              className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:w-1/2"
            />
            <input
              type="date"
              required
              onChange={(e) => handleInput(e)}
              id="birthDate"
              name="birthDate"
              placeholder="Birth Date"
              className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3 md:w-1/2"
            />
          </div>
          <input
            type="text"
            id="speciality"
            required
            name="speciality"
            onChange={(e) => handleInput(e)}
            placeholder="speciality"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />
          <input
            type="number"
            id="phoneNum"
            required
            name="phoneNum"
            onChange={(e) => handleInput(e)}
            placeholder="Phone Number"
            className="bg-neutral-100 rounded-md border border-neutral-500 text-neutral-500 text-base md:text-xl py-2 pl-3"
          />

          <button
            type="submit"
            className="bg-indigo-800 rounded-md text-white h-10 md:h-12 text-base md:text-md font-medium mt-4"
          >
            Sign Up
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
          You already have an account?{" "}
          <Link to="/" className="text-indigo-800">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
