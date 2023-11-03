import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://products-api-dot-learning-chatbot-393109.lm.r.appspot.com/api/v1/profiles"
        );
        // Filter only the doctors
        const doctors = response.data.data.filter((user) => user.isDoctor);
        setDoctorsData(doctors);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Doctors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctorsData.map((doctor) => (
          <a
            href=""
            key={doctor._id}
            className="bg-white shadow-md rounded p-4 flex items-center "
          >
            <img
              className="h-[200px] w-[200px]"
              src="https://cdn3d.iconscout.com/3d/premium/thumb/surgeon-5682858-4731206.png?f=webp"
            />
            <div>
              <h2 className="text-lg font-bold mb-2">{doctor.name}</h2>
              <p>
                <strong>Email:</strong> {doctor.email}
              </p>
              <p>
                <strong>Specialization:</strong> {doctor.specialization}
              </p>
              <p>
                <strong>Experience:</strong> {doctor.experience} years
              </p>
              <p>
                <strong>Organization:</strong> {doctor.organization}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Home;
