// AddConsultationPopup.jsx
import { useState } from "react";

const AddConsultationPopup = ({ show, handleClose }) => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [patientNumber, setPatientNumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [medications, setMedications] = useState("");

  const doctorEmail = localStorage.getItem("doctorEmail");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newConsultation = {
      date: new Date(`${date}T${time}`),
      patientNumber,
      diagnosis,
      medications: medications
        .split(",")
        .map((medication) => medication.trim()),
      doctorEmail,
    };
    await fetch("http://localhost:8080/api/consultations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newConsultation),
    });
    handleClose();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Add New Consultation</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Patient Phone Number
            </label>
            <input
              type="number"
              value={patientNumber}
              onChange={(e) => setPatientNumber(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Diagnosis
            </label>
            <textarea
              value={diagnosis}
              onChange={(e) => setDiagnosis(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Medications (comma-separated)
            </label>
            <input
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
              className="w-full border rounded p-2"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={handleClose}
              className="bg-red-500 text-white py-2 px-4 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-800 text-white py-2 px-4 rounded"
            >
              Add Consultation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddConsultationPopup;
