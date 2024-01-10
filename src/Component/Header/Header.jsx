import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const showToast = () =>{
    toast("Please Scroll Down!")
  }

  const links = (
    <>
      <li><NavLink to={"/"} className={({ isActive }) => isActive ? "text-[#9873FF]" : ""}>Home</NavLink></li>
      <li><NavLink to={"/statistics"} className={({ isActive }) => isActive ? "text-[#9873FF]" : ""}>Statistics</NavLink></li>
      <li><NavLink to={"/applied-jobs"} className={({ isActive }) => isActive ? "text-[#9873FF]" : ""}>Applied Jobs</NavLink></li>
      <li><NavLink to={"/blogs"} className={({ isActive }) => isActive ? "text-[#9873FF]" : ""}>Blogs</NavLink></li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >{links}</ul>
        </div>
        <a href="/" className="text-2xl font-extrabold">CareerHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="space-x-4 menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link to={"/"} className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white" onClick={showToast}>Start Applying</Link>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Header;
