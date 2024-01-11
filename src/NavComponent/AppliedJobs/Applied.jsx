import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import DetailsAppliedJobs from "./DetailsAppliedJobs";
import { getLocalStorage, removeFromLocalStorage } from "../../Utility/LocalStorage";
import swal from "sweetalert";

const Applied = () => {

    // Remove applied using remove btn
    const handleRemoveAppliedJob = (id, company_name) => {
        const removeDisplayJobs = displayJobs.filter(jobs => jobs.id !== id)
        setDisplayJobs(removeDisplayJobs);
        removeFromLocalStorage(id)
        swal("Success!", `Removed ${company_name} from Applied jobs`, "success");
    }
    // Remove applied using remove btn End

    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const allJobs = useLoaderData()
    useEffect(()=> {
        const localStorageJob = getLocalStorage();
        if(allJobs.length > 0){
            const totalJobApplied = allJobs.filter(job => localStorageJob.includes(job.id))
            setDisplayJobs(totalJobApplied)
            setAppliedJob(totalJobApplied);

            // 2 ways
            // const jobAppliedIdsAre = []
            // for(const id of localStorageJob){
            //     const matching = allJobs.find(jobs => jobs.id === id)
            //     if(matching){
            //         jobAppliedIdsAre.push(matching)
            //     }
            // }
            // setAppliedJob(jobAppliedIdsAre);
        }
    },[allJobs])

    // Filter by section total Here
    const handleJobsFilter = (filterType) => {
        if(filterType === "all"){
            setDisplayJobs(appliedJob)
        }
        else if(filterType === "remote"){
            setDisplayJobs(appliedJob.filter(jobs => jobs.remote_or_onsite === "Remote"))
        }
        else if(filterType === "onsite"){
            setDisplayJobs(appliedJob.filter(jobs => jobs.remote_or_onsite === "Onsite"))
        }
    }
    // Filter by section total Here end

    return (
        <div>
            <h2 className="text-center font-extrabold text-2xl mt-12">Applied Jobs {displayJobs.length}</h2>
            <div className="text-right">
               <details className="dropdown dropdown-end">
                 <summary className="m-1 btn bg-blue-200 my-2">Filter by</summary>
                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-100 rounded-box w-52">
                   <li><a onClick={()=>handleJobsFilter("all")}>All</a></li>
                   <li><a onClick={()=>handleJobsFilter("remote")}>Remote</a></li>
                   <li><a onClick={()=>handleJobsFilter("onsite")}>Onsite</a></li>
                 </ul>
               </details>
            </div>
            <div className="px-1 lg:px-0 mb-8">
                {
                    displayJobs.map(jobs => <DetailsAppliedJobs key={jobs.id} getDetailApplied={jobs} handleRemoveAppliedJob={handleRemoveAppliedJob}></DetailsAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default Applied;