import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredThem } from "../../Utility/LocalStorage";

const Applied = () => {

    const [appliedJob, setAppliedJob] = useState([])

    const loadDataJobs = useLoaderData()

    useEffect(()=> {
        const localStorageJobIds = getStoredThem();
        if(loadDataJobs.length > 0){
            const totalJobApplied = loadDataJobs.filter(job => localStorageJobIds.includes(job.id))
            setAppliedJob(totalJobApplied);
        }
    },[])
    return (
        <div>
            applied {appliedJob.length}
        </div>
    );
};

export default Applied;