import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { getLocalStorage, storeDataToLocalStorage } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";

const Details = () => {
  const [match, setMatch] = useState()

  const detailsDataFromLoader = useLoaderData();
  // const {paramsId} = useParams()
  // console.log(paramsId.detailId);

  const { detailId } = useParams();
  const getId = parseInt(detailId);

  // This part only used for showing different toasting
  const localId = getLocalStorage()
  useEffect(()=> {
    if(localId.length > 0){
      const matchingBoth = localId.find(local => local === match)
      setMatch(matchingBoth);
    }
  },[match, localId])
  // This part only used for showing different toasting end

  const showToastAndIdToLocalStorage = () => {
    storeDataToLocalStorage(getId);
    setMatch(getId)
    if(!match){
      toast("application successful!!")
      }
      else{
        toast("already applied!")
    }
  };

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
              <p className="my-2">
                <span className="font-bold text-[#474747]">Salary:</span>{" "}
                {salary}
              </p>
              <p>
                <span className="font-bold text-[#474747]">Job Title:</span>{" "}
                {job_title}
              </p>
              <div className="my-3 border-b-2 border-gray-300 pb-3">
                <h1 className="font-extrabold">Contact Information</h1>
              </div>
              <p className="my-2">
                <span className="font-bold text-[#474747]">Phone:</span>{" "}
                {contact_information.phone}
              </p>
              <p>
                <span className="font-bold text-[#474747]">Email:</span>{" "}
                {contact_information.email}
              </p>
              <p className="mt-3">
                <span className="font-bold text-[#474747]">Address:</span>{" "}
                {contact_information.address}
              </p>
            </div>
            <button
              onClick={showToastAndIdToLocalStorage}
              className="w-full mt-3 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white"
            >
              Apply Now
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Link to={"/"}>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Details;
