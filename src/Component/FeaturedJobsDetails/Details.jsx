import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {
  const detailsDataFromLoader = useLoaderData();
  // const {paramsId} = useParams()
  // console.log(paramsId.detailId);

  const { detailId } = useParams();
  const getId = parseInt(detailId);

  const jobMatching = detailsDataFromLoader.find((job) => job.id === getId);
  const {
    company_name,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
    salary,
    job_title,
    contact_information,
  } = jobMatching;

  return (
    <div>
      <h2 className="text-center font-extrabold text-2xl my-12">
        Job details of {company_name}
      </h2>
      <div className="grid gap-4 md:grid-cols-4">
        <div className="border md:col-span-3 px-3 pb-6">
          <p className="my-5">
            <span className="font-extrabold">Job Description:</span>{" "}
            <span className="text-[#757575]">{job_description}</span>
          </p>
          <p>
            <span className="font-extrabold">Job Responsibility:</span>{" "}
            <span className="text-[#757575]">{job_responsibility}</span>
          </p>
          <div>
            <p className="my-5 font-extrabold">Educational Requirements:</p>
            <p className="text-[#757575]">{educational_requirements}</p>
          </div>
          <div>
            <p className="my-5 font-extrabold">Experiences:</p>
            <p>{experiences}</p>
          </div>
        </div>
        <div>
          <div className="border p-5 bg-gray-200">
            <h1 className="font-extrabold border-b-2 border-gray-300 pb-3">
              Job Details
            </h1>
            <p className="my-2">Salary: {salary}</p>
            <p>Job Title: {job_title}</p>
            <div className="my-3 border-b-2 border-gray-300 pb-3">
              <h1 className="font-extrabold">Contact Information</h1>
            </div>
            <p className="my-2">Phone: {contact_information.phone}</p>
            <p>Email: {contact_information.email}</p>
          </div>
          <button className="w-full mt-3 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
