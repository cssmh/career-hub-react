import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredThem } from "../../Utility/LocalStorage";
import DetailsAppliedJobs from "./DetailsAppliedJobs";

const Applied = () => {

    const [appliedJob, setAppliedJob] = useState([])
    const [displayJobs, setDisplayJobs] = useState([])

    const allJobs = useLoaderData()
    useEffect(()=> {
        const localStorageJob = getStoredThem();
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
    return (
        <div>
            <h2 className="text-center font-extrabold text-2xl mt-12">Applied Jobs {appliedJob.length}</h2>
            <div className="text-right">
               <details className="dropdown dropdown-end">
                 <summary className="m-1 btn bg-blue-200 my-2">Filter by</summary>
                 <ul className="p-2 shadow menu dropdown-content z-[1] bg-red-100 rounded-box w-52">
                   <li><a>All</a></li>
                   <li><a>Remote</a></li>
                   <li><a>Onsite</a></li>
                 </ul>
               </details>
            </div>
            <div className="px-1 lg:px-0 mb-8">
                {
                    displayJobs.map(jobs => <DetailsAppliedJobs key={jobs.id} getDetailApplied={jobs}></DetailsAppliedJobs>)
                }
            </div>
        </div>
    );
};

export default Applied;