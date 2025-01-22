/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
function Job({ role, department, startDate, endDate, id }) {
  return (
    <>
      <tr className="even:bg-gray-100">
        <td className="py-3  text-start px-3">{role}</td>
        <td className="py-2  text-start px-3">{department}</td>
        <td className="py-2 text-start px-3 ">
          {startDate} - {endDate}
        </td>
        <td className="text-start px-4">
          <Link
            to={`/job-details/${id}`}
            state={{ role, department, startDate, endDate }}
            className="flex justify-center items-center space-x-3  px-4  py-1 border border-blue-300 hover:bg-blue-500 hover:text-white"
          >
            <span className="">See details</span>
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </td>
      </tr>
    </>
  );
}

export default Job;
