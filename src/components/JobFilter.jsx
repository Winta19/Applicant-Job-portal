import { useState } from "react";
function JobFilter() {
  const [searchTerm, setSearchTerm] = useState("winta");
  const inputHandler = (event) => {
    setSearchTerm(event.target.value);
  };
  console.log(setSearchTerm);
  {
    /* const[searchTerm,setSearchTerm]=useState(''); */
    /* const[selectedDepartment,setselectedDepartment]=useState(''); */
  }
  return (
    <>
      <div className="flex items-center bg-white border border-yellow-500 ">
        <div className="w-1/3 border-r border-yellow-500">
          <select
            className="w-full bg-white border-none py-2 px-4 focus:ring-0 focus:border-none"
            name=""
            id=""
          >
            <option disabled selected>
              Department
            </option>
            <option value="SASS">SASS</option>
            <option value="SASS">Finance</option>
            <option value="SASS">Networking</option>
            <option value="SASS">Accounting</option>
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
    </>
  );
}
export default JobFilter;
