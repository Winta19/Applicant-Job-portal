/////////////////////////////////////////

import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ApplyForm() {
  const { id } = useParams(); // Get job ID from URL
  const navigate = useNavigate(); // 👈 For redirection after success

  const [formData, setFormData] = useState({
    fullName: "",
    cgpa: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // 👈 Track form submission

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    setFormData({ ...formData, cv: e.target.files[0] });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append("FullName", formData.fullName);
    formDataToSend.append("cgpa", formData.cgpa);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("cv", formData.cv);
    formDataToSend.append("status", "interview");
    formDataToSend.append("jobId", id); // Associate applicant with job ID

    try {
      const response = await axios.post(
        "http://localhost:3000/applicantForms",
        formDataToSend,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setMessage("Application submitted successfully!");
      setError(false);
      setIsSubmitted(true); // 👈 Hide the form
      console.log(response.data);

      // Redirect to home page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      setError(true);
      setMessage("Failed to submit application. Please try again.");
      console.error("Error submitting application", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Show success or error message when submitted */}
      {isSubmitted ? (
        <p
          className={`text-lg font-semibold ${
            error ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      ) : (
        <>
          {/* Left Side - Back to Job Details Link */}
          <div className="absolute left-10 top-20">
            <Link
              to={`/job-details/${id}`}
              className="text-blue-500 hover:underline text-lg font-medium"
            >
              ← Back to Job Details
            </Link>
          </div>

          {/* Form Box */}
          <div className="bg-white shadow-lg rounded-lg p-8 w-96">
            <h2 className="text-xl font-semibold text-center mb-4">
              Apply Now
            </h2>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-medium">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* CGPA */}
              <div>
                <label htmlFor="cgpa" className="block font-medium">
                  CGPA:
                </label>
                <input
                  type="number"
                  id="cgpa"
                  name="cgpa"
                  value={formData.cgpa}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-medium">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-medium">
                  Phone:
                </label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* CV Upload */}
              <div>
                <label htmlFor="cv" className="block font-medium">
                  CV:
                </label>
                <input
                  type="file"
                  id="cv"
                  name="cv"
                  onChange={handleFileChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
