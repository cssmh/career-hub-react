import { useEffect, useState } from "react";
import userPhoto from "../../assets/images/user.png";
import JobCategory from "../JobCategory/JobCategory";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
const Home = () => {
  // JOb category section react
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);
  // JOb category section react end

  //   Featured Jobs react
  const [totalJobs, setTotalJobs] = useState(4)
  const [jobs, setJobs] = useState([]);

  useState(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  //   Featured Jobs react end

  return (
    <div>
      {/* One Step Closer To Your Dream Job section */}
      <section className="my-12">
        <div className="px-3 lg:px-0 flex-row md:flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold">
              One Step<br></br> Closer To Your<br></br>{" "}
              <span className="text-[#7E90FE]">Dream Job</span>
            </h1>
            <p className="my-3 text-[#757575]">
              Explore thousands of job opportunities with all the<br></br>{" "}
              information you need. Its your future. Come find it. Manage all
              <br></br> your job application from start to finish.
            </p>
            <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white">
              Get Started
            </button>
          </div>
          <img className="lg:w-2/5" src={userPhoto} alt="" />
        </div>
      </section>
      {/* One Step Closer To Your Dream Job section ENd */}
      {/* Job Category List Section */}
      <section>
        <div className="text-center">
          <h1 className="text-2xl font-extrabold">Job Category List</h1>
          <p className="text-[#757575] my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="flex-row lg:flex justify-center my-8 gap-5">
            {jobCategory.map((singleCategory) => (
              <JobCategory
                key={singleCategory.id}
                getCategory={singleCategory}
              ></JobCategory>
            ))}
          </div>
        </div>
      </section>
      {/* Job Category List Section ENd*/}
      {/* Featured Jobs */}
      <section>
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold">Featured Jobs</h1>
          <p className="text-[#757575] my-4">
            Explore thousands of job opportunities with all the information you
            need. Its your future
          </p>
          <div className="grid justify-center grid-cols-1 md:grid-cols-2 gap-3">
            {jobs.slice(0, totalJobs).map((job) => (
              <FeaturedJobs key={job.id} getJobs={job}></FeaturedJobs>
            ))}
          </div>
          <div className={totalJobs === jobs.length? "hidden" : ""}>
          <button onClick={()=>(setTotalJobs(jobs.length))} className='mt-4 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>See All Jobs</button>
          </div>
        </div>
      </section>
      {/* Featured Jobs End*/}
    </div>
  );
};

export default Home;
