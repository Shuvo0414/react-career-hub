import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";

const AppliedJobs = () => {
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);
  const jobs = useLoaderData();
  useEffect(() => {
    const storedJobsId = getStoredJobApplication();
    console.log(storedJobsId);
    if (jobs.length > 0) {
      const jobsApplied = jobs.filter((job) => storedJobsId.includes(job.id));
      console.log(jobsApplied);
      setAppliedJobs(jobsApplied);
      setDisplayJobs(jobsApplied);
    }
  }, [jobs]);

  const handleJobsFilter = (filter) => {
    if (filter === "all") {
      setDisplayJobs(appliedJobs);
    } else if (filter === "remote") {
      const remoteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Remote"
      );
      setDisplayJobs(remoteJobs);
    } else if (filter === "onsite") {
      const onsiteJobs = appliedJobs.filter(
        (job) => job.remote_or_onsite === "Onsite"
      );
      setDisplayJobs(onsiteJobs);
    }
  };

  return (
    <div>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn m-1">
          Fiter
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li onClick={() => handleJobsFilter("all")}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter("remote")}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter("onsite")}>
            <a>Onsite</a>
          </li>
        </ul>
      </div>
      <h2> i Applied {appliedJobs.length} </h2>
      {displayJobs.map((job) => (
        <li key={job.id}>
          <span>
            {job.job_title} {job.company_name}
            {job.remote_or_onsite}
          </span>
        </li>
      ))}
    </div>
  );
};

export default AppliedJobs;
