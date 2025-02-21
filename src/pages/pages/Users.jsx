// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function Users() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:3000/users") // Replace with your actual backend endpoint
//       .then((response) => setUsers(response.data))
//       .catch((error) => console.error("Error fetching users:", error));
//   }, []);

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className="flex justify-between items-center mb-4">
//         <h1 className="text-2xl font-bold">List of Users</h1>
//         <Link
//           to="/admin/create-user"
//           className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-5 h-5 mr-2"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M12 4.5v15m7.5-7.5h-15"
//             />
//           </svg>
//           <span>New User</span>
//         </Link>
//       </div>

//       {/* Users Table */}
//       <table className="table-auto w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border border-gray-300 px-4 py-2">First Name</th>
//             <th className="border border-gray-300 px-4 py-2">Last Name</th>

//             <th className="border border-gray-300 px-4 py-2">Role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user.id} className="odd:bg-white even:bg-gray-100">
//               <td className="border border-gray-300 px-4 py-2">{user.Fname}</td>
//               <td className="border border-gray-300 px-4 py-2">{user.Lname}</td>

//               {/* Hide password */}
//               <td className="border border-gray-300 px-4 py-2">{user.role}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

///////////////////////////////////

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Handle delete user
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // Remove user from state
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">List of Users</h1>
        <Link
          to="/admin/create-user"
          className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>New User</span>
        </Link>
      </div>

      {/* Users Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">First Name</th>
            <th className="border border-gray-300 px-4 py-2">Last Name</th>
            <th className="border border-gray-300 px-4 py-2">Role</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2">{user.Fname}</td>
              <td className="border border-gray-300 px-4 py-2">{user.Lname}</td>
              <td className="border border-gray-300 px-4 py-2">{user.role}</td>
              <td className="border border-gray-300 px-4 py-2 flex gap-2">
                {/* Edit Button */}
                <Link
                  to={`/admin/edit-user/${user.id}`}
                  className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                >
                  Edit
                </Link>

                {/* Delete Button */}
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
