// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//   const [appointments, setAppointments] = useState([]);

//   // Simulating a doctor's ID, replace this with the doctor's actual ID
//   const doctorId = 'your_doctor_id_here';

//   useEffect(() => {
//     const fetchAppointments = async () => {
//       try {
//         const response = await axios.get(`https://your-api-url.com/appointments/${doctorId}`);
//         setAppointments(response.data);
//       } catch (error) {
//         console.error('Error fetching appointments:', error);
//       }
//     };

//     fetchAppointments();
//   }, [doctorId]);

//   return (
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold my-4">Appointments</h1>
//       <div className="bg-white shadow-md rounded p-4">
//         {appointments.length === 0 ? (
//           <p>No appointments available.</p>
//         ) : (
//           <ul>
//             {appointments.map((appointment) => (
//               <li key={appointment.id}>
//                 <p>Patient: {appointment.patientName}</p>
//                 <p>Date: {appointment.date}</p>
//                 <p>Time: {appointment.time}</p>
//                 {/* Other appointment details */}
//                 <hr className="my-2" />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useState, useEffect } from "react";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);

  // Dummy data for appointments (replace this with actual data fetched from an API)
  const dummyAppointments = [
    {
      id: 1,
      patientName: "John Doe",
      date: "2023-11-10",
      time: "10:00 AM",
      // Add more details if needed
    },
    {
      id: 2,
      patientName: "Jane Smith",
      date: "2023-11-15",
      time: "2:30 PM",
      // Add more details if needed
    },
    // Add more dummy appointments as needed
  ];

  useEffect(() => {
    // Simulating fetching data from an API
    // Replace this with the actual API call
    setAppointments(dummyAppointments);
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-4 text-center">Appointments</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {appointments.length === 0 ? (
          <p className="text-center">No appointments available.</p>
        ) : (
          appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="bg-white rounded shadow-md p-4 hover:shadow-lg transition duration-300 flex items-center "
            >
              <img
                className="h-[200px] w-[200px]"
                src="https://image.shutterstock.com/image-vector/happy-smiling-young-man-3d-260nw-2128644164.jpg"
              />
              <div>
                <h2 className="text-lg font-semibold mb-2">
                  {appointment.patientName}
                </h2>
                <p className="text-gray-700">
                  <span className="font-semibold">Date:</span>{" "}
                  {appointment.date}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Time:</span>{" "}
                  {appointment.time}
                </p>
              </div>

              {/* Add more appointment details */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
