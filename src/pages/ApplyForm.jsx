// import { Link } from "react-router-dom";

// export default function ApplyForm() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       {/* Left Side - Back to Job Details Link */}
//       <div className="absolute left-10 top-20">
//         <Link
//           to="/job-details/1"
//           className="text-blue-500 hover:underline text-lg font-medium"
//         >
//           ← Back to Job Details
//         </Link>
//       </div>

//       {/* Form Box */}
//       <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//         <h2 className="text-xl font-semibold text-center mb-4">Apply Now</h2>

//         <form className="space-y-4">
//           {/* Full Name */}
//           <div>
//             <label htmlFor="name" className="block font-medium">
//               Full Name:
//             </label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* CGPA */}
//           <div>
//             <label htmlFor="cgpa" className="block font-medium">
//               CGPA:
//             </label>
//             <input
//               type="text"
//               id="cgpa"
//               name="cgpa"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Email */}
//           <div>
//             <label htmlFor="email" className="block font-medium">
//               Email:
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Phone */}
//           <div>
//             <label htmlFor="phone" className="block font-medium">
//               Phone:
//             </label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* CV Upload */}
//           <div>
//             <label htmlFor="cv" className="block font-medium">
//               CV:
//             </label>
//             <input
//               type="file"
//               id="cv"
//               name="cv"
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

///////////////////////////////////////

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

export default function ApplyForm() {
  const { id } = useParams(); // Get job ID from URL
  const [formData, setFormData] = useState({
    fullName: "",
    cgpa: "",
    email: "",
    phone: "",
    cv: null,
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("false");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  // Handle file upload
  const handleFileChange = (e) => {
    console.log("try", e.target.files[0]);
    const { name } = e.target;
    setFormData({ ...formData, [name]: e.target.files[0] });
    console.log(formData);
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
      // Assuming the response contains the newly created applicant form data
      setMessage("Application submitted successfully!");

      // Optionally log the response to see what you get back
      console.log(response.data);

      // Optionally, you can reset the form or perform any other actions
      setFormData({
        fullName: "",
        cgpa: "",
        email: "",
        phone: "",
        cv: null,
        status: "",
      });
    } catch (error) {
      setError("true");
      console.error("Error submitting application", error);
      setMessage("Failed to submit application. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
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
        <h2 className="text-xl font-semibold text-center mb-4">Apply Now</h2>

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
          {/* Success or Error Message */}

          {error == "true" ? (
            <p className="text-center text-red-500">{message}</p>
          ) : (
            <p className="text-center text-green-500">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}
