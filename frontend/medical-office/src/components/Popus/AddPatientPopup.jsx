import { useState } from "react";

const AddPatientPopup = ({ show, handleClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [allergies, setAllergies] = useState("");

  const doctorEmail = localStorage.getItem("doctorEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPatient = {
      firstName,
      lastName,
      age,
      phoneNum,
      doctorEmail,
      allergies: allergies.split(",").map((allergy) => allergy.trim()),
    };

    try {
      const response = await fetch("http://localhost:8080/api/patients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPatient),
      });

      if (response.ok) {
        alert("Patient added successfully!");
        handleClose();
      } else {
        alert("Failed to add patient.");
      }
    } catch (error) {
      console.error("Error adding patient:", error);
      alert("An error occurred while adding the patient.");
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-2/3 h-[35rem] bg-white rounded-2xl shadow p-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold">Add New Patient</h2>
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Age
            </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="number"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Allergies (comma-separated)
            </label>
            <input
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-indigo-800 text-white py-2 px-4 rounded-lg shadow"
            >
              Add Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPatientPopup;
