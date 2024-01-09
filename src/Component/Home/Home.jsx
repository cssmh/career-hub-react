import { useEffect, useState } from "react";
import userPhoto from "../../assets/images/user.png";
import JobCategory from "../JobCategory/JobCategory";
const Home = () => {
  const [jobCategory, setJobCategory] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setJobCategory(data));
  }, []);

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
          <div className="flex justify-center my-8 gap-5">
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
    </div>
  );
};

export default Home;
