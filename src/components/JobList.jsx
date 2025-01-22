import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Job from "./Job";
{
  /*const jobsList = [
  {
    id: 1,
    role: "Software Engineer",
    department: "SASS",
    startDate: "2020-01-01",
    endDate: "2021-12-31",
  },
  {
    id: 2,
    role: "backend Engineer",
    department: "SASS",
    startDate: "2020-01-01",
    endDate: "2021-12-31",
  },

  {
    id: 3,
    role: "Finance",
    department: "Finance",
    startDate: "2020-01-01",
    endDate: "2021-12-31",
  },
];
*/
}
export default function JobList() {
  // const [jobs, setJobs] = useState(jobsList);
  //console.log(jobs);

  // fetching data from api
  const [data, setData] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState(null);
  useEffect(() => {
    axios
      .get("https://mocki.io/v1/f3b0abae-23c5-4664-acb8-087c9280a688")
      .then(function (response) {
        setData(response?.data);
        setFilteredJobs(response?.data);
      })
      .catch((error) => console.log(error));
  }, []);
  console.log(data, "data");

  // search input
  const [searchTerm, setSearchTerm] = useState("");
  // department selection
  // when user select an option from the dropdown, the selected value will be setted to deptOption
  // then according to selected value, the jobslist's department value is compared to the selected value
  const [deptOption, setDeptOption] = useState("");
  const selectHandler = (event) => {
    setDeptOption(event.target.value);
    if (event.target.value === "" || event.target.value === "all") {
      setData(data);
    } else {
      let filteredBydepartment = data.filter(function (job) {
        return job.department
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase());
      });
      setData(filteredBydepartment);
    }
  };

  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
    if (event.target.value === "") {
      setData(data);
    } else {
      let filteredJobs = data.filter((job) =>
        job.name
          .toLocaleLowerCase()
          .includes(event.target.value.toLocaleLowerCase())
      );
      setFilteredJobs(filteredJobs);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4 w-full">
        <div className="flex items-center bg-white border border-yellow-500">
          <div className="w-1/3 border-r border-yellow-500">
            <select
              className="w-full bg-white border-none py-2 px-4 focus:ring-0 focus:border-none"
              name=""
              id=""
              value={deptOption}
              onChange={selectHandler}
            >
              <option value="all">All Departments</option>
              <option value="Engineering">Engineering</option>
              <option value="Product">Product</option>
              <option value="Data">Data</option>
              <option value="Marketing">Marketing</option>
              <option value="Finance">Finance</option>
              <option value="Sales">Sales</option>
              <option value="	Human Resources"> Human Resources</option>
              <option value="Design">Design</option>
            </select>
          </div>
          <div className="w-2/3   relative">
            <div className="absolute flex items-center  top-0 bottom-0">
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
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
            <input
              value={searchTerm}
              onChange={inputHandler}
              className=" w-full px-8"
              type="text"
              name=""
              placeholder="Search Job Here"
              id=""
            />
          </div>
        </div>
        <p className="text-center text-lg">Showing all Jobs</p>
        <div className="relative w-full overflow-x-auto">
          <table className="w-full table table-auto">
            <thead className="text-xl border-b border-gray-200">
              <tr className="">
                <th className="py-2 text-start px-3">Role</th>
                <th className="py-2 text-start px-3 ">Departement</th>
                <th className="py-2 text-start px-3 "> Date</th>
                <th className="py-2 text-start px-3 "></th>
              </tr>
            </thead>
            <tbody className="text-center text-lg ">
              {filteredJobs?.map((item, index) => (
                <Job
                  key={index}
                  id={item?.id}
                  role={item?.role}
                  department={item?.department}
                  startDate={item?.start_date}
                  endDate={item?.end_date}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
