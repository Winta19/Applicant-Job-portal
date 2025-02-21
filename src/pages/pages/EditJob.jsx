import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    department: "",
    location: "",
    address: "",
    startDate: "",
    endDate: "",
  });

  const [message, setMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/jobs/${id}`)
      .then((response) => setFormData(response.data))
      .catch((error) => console.error("Error fetching job:", error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/jobs/${id}`, formData);
      setMessage("Job updated successfully!");
      setIsUpdated(true);

      setTimeout(() => navigate("/admin/jobs"), 2000);
    } catch (error) {
      console.error("Error updating job:", error);
      setMessage("Failed to update job. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        {isUpdated ? (
          <p className="text-center text-green-500 text-xl font-semibold">
            {message}
          </p>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">Edit Job</h2>
            {message && <p className="text-center text-red-500">{message}</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block font-medium">Job Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium">Department:</label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium">Location:</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <div>
                <label className="block font-medium">Start Date:</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              >
                Update Job
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
