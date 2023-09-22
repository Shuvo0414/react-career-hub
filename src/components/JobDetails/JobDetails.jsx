import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { id } = useParams();
  const intId = parseInt(id);

  const job = jobs.find((job) => job.id === intId);

  console.log(job);
  return (
    <div>
      <h2 className=" text-center mt-32 font-extrabold text-3xl">
        Job Deatails
      </h2>

      <div className=" grid md:grid-cols-4 gap-4 mb-32 mt-32">
        <div className="  md:col-span-3">
          <p className=" text-base font-extrabold">
            Job Description:
            <span className=" font-medium text-[#757575]">
              {job.job_description}
            </span>
          </p>
          <h2 className=" text-base font-extrabold mt-6">
            Job Responsibility:
            <span className=" font-medium text-[#757575]">
              {job.job_responsibility}
            </span>
          </h2>
          <h2 className="text-base font-extrabold mt-6">
            Educational Requirements:
            <p className="font-medium text-[#757575] mt-4">
              {job.educational_requirements}
            </p>
          </h2>
          <h2 className=" text-base font-extrabold mt-6">
            Experiences:{" "}
            <p className="font-medium text-[#757575] mt-4">{job.experiences}</p>
          </h2>
        </div>
        <div>
          <div className="bg-[#1C1A330A] p-7">
            <h2 className=" text-xl font-extrabold">Job Details</h2>
            <hr className=" mt-6" />
            <h2 className=" text-sm font-bold mt-4">
              Salary :
              <span className=" text-[#757575] font-medium">
                100K - 150K (Per Month)
              </span>
            </h2>
            <h2 className="text-sm font-bold mt-4">
              Job Title :{" "}
              <span className="text-[#757575] font-medium">
                Product Designer
              </span>
            </h2>
            <h2 className=" font-extrabold text-xl mt-8">
              Contact Information
            </h2>
            <hr className=" mt-8" />
          </div>
          <div className="mt-6">
            <button className=" text-white btn w-full bg-[#9873FF]">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
