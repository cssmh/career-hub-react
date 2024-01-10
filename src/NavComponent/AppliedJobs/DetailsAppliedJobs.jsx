import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollarCircle } from "react-icons/ai";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
const DetailsAppliedJobs = ({getDetailApplied}) => {
    // console.log(getDetailApplied);
    const { id, logo, job_title, company_name, remote_or_onsite, job_type, location, salary } = getDetailApplied
    return (
        <div className='border-2 border-gray-100'>
            <div className="p-4 flex justify-between items-center">
              <div className='flex gap-4 items-center'>
                <div>
                   <img className='px-8 py-[64px] bg-[#F4F4F4] w-44' src={logo} alt="" />
                </div>
                <div>
                    <h1 className="font-extrabold">{job_title}</h1>
                    <p className='text-[#757575]'>{company_name}</p>
                    <div className='flex text-[#7E90FE] gap-2 my-2'>
                       <p className='border-2 p-[5px]'>{remote_or_onsite}</p>
                       <p className='border-2 p-[5px]'>{job_type}</p>
                    </div>
                    <div className='flex text-[#757575] gap-2 my-3'>
                       <p className="flex items-center gap-1"><IoLocationOutline />{location}</p>
                       <p className="flex items-center gap-1"><AiOutlineDollarCircle />{salary}</p>
                    </div>
                </div>
              </div>
              <div>
                <Link to={`/details/${id}`}>
                <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button></Link>
              </div>
            </div>
        </div>
    );
};

DetailsAppliedJobs.propTypes = {
    getDetailApplied: PropTypes.object
}

export default DetailsAppliedJobs;