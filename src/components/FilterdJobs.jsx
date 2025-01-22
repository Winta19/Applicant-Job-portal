{
  /*import React, { useState, useEffect } from "react";
import JobFilter from "./JobFilter";
import JobList from "./JobList";

function FilteredJobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      // Replace this with your actual API call or data fetching logic
      const fetchedJobs = await fetch("https://your-api-endpoint").then(
        (response) => response.json()
      );
      setJobs(fetchedJobs);
      setFilteredJobs(fetchedJobs);
    };

    fetchJobs();
  }, []);

  const handleFilter = (searchTerm, selectedDepartment) => {
    const filtered = jobs.filter((job) => {
      return (
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedDepartment === "" || job.department === selectedDepartment)
      );
    });
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <JobFilter onFilter={handleFilter} />
      <JobList jobs={jobs} filteredJobs={filteredJobs} />
    </div>
  );
}

export default FilteredJobs;*/
}
