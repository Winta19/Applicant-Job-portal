import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function JobDetails() {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/${id}`) // Fetch job details
      .then((response) => {
        setJob(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching job details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading)
    return <p className="text-center text-lg">Loading job details...</p>;
  if (!job) return <p className="text-center text-lg">Job not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col px-6 py-12 space-y-4">
      {/* Back to List */}

      <Link
        to="/"
        className="text-blue-500 hover:underline text-lg font-medium"
      >
        ← Back To List
      </Link>

      {/* Job Details Container */}
      <div className="flex w-5/6 mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Section: Job Title & Description */}
        <div className="flex-1  p-6 text-lg">
          <h2 className="text-2xl font-bold">{job.title}</h2>
          <p className="mt-4 text-base">{job.description}</p>
          <p className="mt-2 text-base">Available Positions: {job.quantity}</p>
        </div>

        {/* Right Section: Meta Details */}
        <div className="w-1/4 p-6 flex flex-col space-y-4 ">
          {/* Office Location */}
          <div className="border-2 py-3 px-4 flex flex-col gap-x-3  rounded-md">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
                />
              </svg>
              Office Location
            </div>

            <p className="text-sm  ml-9">22 Festival</p>
          </div>
          {/* Team */}
          <div className="border-2 py-3 px-4 flex flex-col gap-x-3 rounded-md">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
              Team
            </div>
            <p className="text-sm  ml-9">SAAS</p>
          </div>
          {/* Job Type */}
          <div className="border-2 py-3 px-4 flex flex-col gap-x-3 rounded-md">
            <div className="flex items-center gap-x-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Job Type
            </div>
            <p className="text-sm ml-9">Full Time</p>
          </div>

          {/* Apply Button */}
          <div className="border-2 py-2 px-6 text-center font-semibold rounded-md hover:bg-blue-500 transition">
            <Link to={`/ApplyForm/${id}`}>Apply for this role</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetails;
