// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";

// export default function EditUser() {
//   const { id } = useParams(); // Get user ID from URL
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     Fname: "",
//     Lname: "",
//     role: "",
//   });

//   const [message, setMessage] = useState("");

//   // Fetch user details
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3000/users/${id}`)
//       .then((response) => {
//         setFormData(response.data);
//       })
//       .catch((error) => console.error("Error fetching user:", error));
//   }, [id]);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.put(`http://localhost:3000/users/${id}`, formData);
//       setMessage("User updated successfully!");

//       // Redirect back to users list after success
//       setTimeout(() => navigate("/admin/users"), 1500);
//     } catch (error) {
//       console.error("Error updating user:", error);
//       setMessage("Failed to update user. Please try again.");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 w-96">
//         <h2 className="text-xl font-semibold text-center mb-4">Edit User</h2>

//         {message && <p className="text-center text-green-500">{message}</p>}

//         <form className="space-y-4" onSubmit={handleSubmit}>
//           {/* First Name */}
//           <div>
//             <label className="block font-medium">First Name:</label>
//             <input
//               type="text"
//               name="Fname"
//               value={formData.Fname}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Last Name */}
//           <div>
//             <label className="block font-medium">Last Name:</label>
//             <input
//               type="text"
//               name="Lname"
//               value={formData.Lname}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>
//           {/* Email */}
//           <div>
//             <label className="block font-medium">Email:</label>
//             <input
//               type="text"
//               name="Lname"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             />
//           </div>

//           {/* Role */}
//           <div>
//             <label className="block font-medium">Role:</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               required
//               className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
//             >
//               <option value="">Select Role</option>
//               <option value="Admin">Admin</option>
//               <option value="HR">HR</option>
//               <option value="Approver">Approver</option>
//               <option value="Approver">Team Lead</option>
//             </select>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
//             >
//               Update User
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

//////////////////////////////////////

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function EditUser() {
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    Fname: "",
    Lname: "",
    role: "",
  });

  const [message, setMessage] = useState("");
  const [isUpdated, setIsUpdated] = useState(false); // Track update status

  // Fetch user details
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${id}`)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:3000/users/${id}`, formData);
      setMessage("User updated successfully!");
      setIsUpdated(true); // Hide the form and show success message

      // Redirect after 2 seconds
      setTimeout(() => navigate("/admin/users"), 2000);
    } catch (error) {
      console.error("Error updating user:", error);
      setMessage("Failed to update user. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-96">
        {/* Show success message only if user is updated */}
        {isUpdated ? (
          <p className="text-center text-green-500 text-xl font-semibold">
            {message}
          </p>
        ) : (
          <>
            <h2 className="text-xl font-semibold text-center mb-4">
              Edit User
            </h2>

            {message && <p className="text-center text-red-500">{message}</p>}

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* First Name */}
              <div>
                <label className="block font-medium">First Name:</label>
                <input
                  type="text"
                  name="Fname"
                  value={formData.Fname}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block font-medium">Last Name:</label>
                <input
                  type="text"
                  name="Lname"
                  value={formData.Lname}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Email */}

              <div>
                <label className="block font-medium">Email:</label>
                <input
                  type="text"
                  name="Lname"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block font-medium">Role:</label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select Role</option>
                  <option value="Admin">Admin</option>
                  <option value="HR">HR</option>
                  <option value="Approver">Approver</option>
                  <option value="Approver">Team Lead</option>
                </select>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Update User
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
