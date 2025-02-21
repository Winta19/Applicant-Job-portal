///////////////////////////////////////
// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const [selectedJob, setSelectedJob] = useState(null);
//   const [role, setRole] = useState(null);
//   console.log(selectedJob);

//   useEffect(() => {
//     // Fetch data from the JSON server
//     setRole(localStorage.getItem("role"));
//     axios
//       .get("http://localhost:3000/jobs")
//       .then((response) => setJobs(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   const handleStatusChange = (job) => {
//     setSelectedJob(job);
//   };
//   console.log(handleStatusChange);

//   // Function to format the date
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A"; // Handle missing dates
//     return new Date(dateString).toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "long",
//       day: "numeric",
//     });
//   };

//   return (
//     <div className="p-4">
//       <div className="flex justify-between">
//         <div>
//           {" "}
//           <h1 className="text-2xl font-bold mb-4">Jobs</h1>
//         </div>
//         <div>
//           {role == "hr" && (
//             <Link
//               to={`/create-new-job`}
//               className="flex bg-primary_ie px-4 py-2"
//             >
//               <span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth={1.5}
//                   stroke="currentColor"
//                   className="size-6"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M12 4.5v15m7.5-7.5h-15"
//                   />
//                 </svg>
//               </span>
//               <span> New Job</span>
//             </Link>
//           )}
//         </div>
//       </div>

//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">Job Title</th>
//             <th className="border border-gray-300 px-4 py-2">Department</th>
//             <th className="border border-gray-300 px-4 py-2">Location</th>
//             <th className="border border-gray-300 px-4 py-2">Address</th>
//             <th className="border border-gray-300 px-4 py-2">Start Date</th>
//             <th className="border border-gray-300 px-4 py-2">End Date</th>
//           </tr>
//         </thead>
//         <tbody>
//           {jobs.map((job) => (
//             <tr key={job.id} className="odd:bg-white even:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{job.title}</td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {job.department?.name || "N/A"}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {job.location?.name || "N/A"}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {job.location?.address || "N/A"}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {formatDate(job.startDate)}
//               </td>
//               <td className="border border-gray-300 px-4 py-2">
//                 {formatDate(job.endDate)}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

////////////////////////////////////

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setRole(localStorage.getItem("role"));
    fetchJobs();
  }, []);

  const fetchJobs = () => {
    axios
      .get("http://localhost:3000/jobs")
      .then((response) => setJobs(response.data))
      .catch((error) => console.error("Error fetching jobs:", error));
  };

  // Delete job function
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this job?")) {
      try {
        await axios.delete(`http://localhost:3000/jobs/${id}`);
        fetchJobs(); // Refresh jobs list
      } catch (error) {
        console.error("Error deleting job:", error);
      }
    }
  };

  // Function to format the date
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold mb-4">Jobs</h1>
        {role === "hr" && (
          <Link
            to="/admin/create-new-job"
            className="flex bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <span className="mr-2">➕</span> New Job
          </Link>
        )}
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">Job Title</th>
            <th className="border border-gray-300 px-4 py-2">Department</th>
            <th className="border border-gray-300 px-4 py-2">Location</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
            <th className="border border-gray-300 px-4 py-2">Start Date</th>
            <th className="border border-gray-300 px-4 py-2">End Date</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{job.title}</td>
              <td className="border border-gray-300 px-4 py-2">
                {job.department?.name || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.location?.name || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {job.location?.address || "N/A"}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formatDate(job.startDate)}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {formatDate(job.endDate)}
              </td>
              <td className="border border-gray-300 px-4 py-2 flex space-x-2">
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-yellow-500 text-white px-3  rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(job.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <Link
                  to={`/admin/job-description/${job.id}`}
                  className="bg-blue-600 text-white px-3 rounded"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
