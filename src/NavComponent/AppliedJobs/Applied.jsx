import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredThem } from "../../Utility/LocalStorage";

const Applied = () => {

    const [appliedJob, setAppliedJob] = useState([])

    const allJobs = useLoaderData()
    useEffect(()=> {
        const localStorageJob = getStoredThem();
        if(allJobs.length > 0){
            const totalJobApplied = allJobs.filter(job => localStorageJob.includes(job.id))
            setAppliedJob(totalJobApplied);

            // 2 ways
            // const jobAppliedIdsAre = []
            // for(const id of localStorageJob){
            //     const matching = loadDataJobs.find(jobs => jobs.id === id)
            //     if(matching){
            //         jobAppliedIdsAre.push(matching)
            //     }
            // }
            // setAppliedJob(jobAppliedIdsAre);
        }
    },[allJobs])
    return (
        <div>
            <h2 className="text-center font-extrabold text-2xl my-12">Applied Jobs {appliedJob.length}</h2>
        </div>
    );
};

export default Applied;