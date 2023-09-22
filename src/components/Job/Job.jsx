import { IoLocationOutline } from "react-icons/io5";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="logo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div>
          <button className="py-2 px-5 rounded-md  border border-[#7E90FE] text-[#9873FF]">
            {remote_or_onsite}
          </button>
          <button className="ml-4 py-2 px-5 rounded-md border border-[#7E90FE] text-[#9873FF]">
            {job_type}
          </button>
        </div>
        <div className=" flex mt-4 gap-4 ">
          <h2 className=" flex text-xl items-center ">
            <IoLocationOutline className="text-2xl"></IoLocationOutline>
            {location}
          </h2>
          <h2 className=" text-xl items-center flex">
            <HiOutlineCurrencyDollar className=" text-2xl"></HiOutlineCurrencyDollar>
            {salary}
          </h2>
        </div>
        <div className="card-actions mt-8">
          <Link to={`/job/${id}`}>
            <button className="btn bg-[#7E90FE] text-white">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
