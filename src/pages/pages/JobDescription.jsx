import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function JobDescription() {
  const { id } = useParams(); // Get job ID from URL
  const [job, setJob] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/${id}`)
      .then((response) => setJob(response.data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) {
    return <p className="text-center mt-4">Loading job details...</p>;
  }

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded mb-4 hover:bg-gray-400"
      >
        🔙 Back
      </button>

      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p className="text-gray-600 mt-2">{job.department?.name || "N/A"}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Job Description</h2>
        <p className="text-gray-700">{job.description}</p>
      </div>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Requirements</h2>
        <p className="text-gray-700">{job.requirements || "Not specified"}</p>
      </div>

      <div className="mt-4">
        <p>
          <strong>Location:</strong> {job.location?.name || "N/A"}
        </p>
        <p>
          <strong>Address:</strong> {job.location?.address || "N/A"}
        </p>
        <p>
          <strong>Start Date:</strong>{" "}
          {new Date(job.startDate).toLocaleDateString()}
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          {new Date(job.endDate).toLocaleDateString()}
        </p>
        <p>
          <strong>Quantity:</strong> {job.quantity}
        </p>
        <p>
          <strong>Status:</strong> {job.status}
        </p>
      </div>
    </div>
  );
}
