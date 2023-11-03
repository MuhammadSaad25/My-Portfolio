import React, { useState } from "react";

const DoctorProfile = () => {
  const [formData, setFormData] = useState({
    patientName: "",
    date: "",
    time: "",
    // Add more fields as needed
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to an API
    console.log("Form submitted with:", formData);
    // Add your logic for appointment booking, for example, sending data to an API
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-bold my-4 text-center">Doctors Profile</h1>
      <div className="w-[90%] md:w-[50%]  margin-auto">
        <div className="flex items-center bg-white shadow-md rounded p-6 mb-6">
          <img
            className="h-[200px] w-[200px]"
            src="https://cdn3d.iconscout.com/3d/premium/thumb/surgeon-5682858-4731206.png?f=webp"
          />
          <div>
            {/* Doctor's profile information can be displayed here */}
            <h2 className="text-xl font-bold mb-4">Dr. John Doe</h2>
            <p>Specialization: Cardiologist</p>
            <p>Experience: 10 years</p>
            {/* Add more profile details as needed */}
          </div>
        </div>
        <div className="bg-white shadow-md rounded p-6">
          <h2 className="text-xl font-bold mb-4">Book an Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="patientName"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Patient Name
              </label>
              <input
                type="text"
                id="patientName"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter patient's name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="date"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="time"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            {/* Add more fields for the appointment form as needed */}
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
