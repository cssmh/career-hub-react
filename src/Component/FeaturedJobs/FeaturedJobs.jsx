import PropTypes from 'prop-types';
const FeaturedJobs = ({getJobs}) => {
    const { logo, job_title, company_name, remote_or_onsite, job_type, location, salary, } = getJobs
    return (
        <div className='border-[1px] rounded-lg border-gray-200 p-5 text-left'>
            <img src={logo} alt="" />
            <h1 className='font-extrabold my-3'>{job_title}</h1>
            <p className='text-[#757575]'>{company_name}</p>
            <div className='flex text-[#7E90FE] gap-2 my-2'>
                <p className='border-2 p-[5px]'>{remote_or_onsite}</p>
                <p className='border-2 p-[5px]'>{job_type}</p>
            </div>
            <div className='flex text-[#757575] gap-2 my-3'>
                <p>{location}</p>
                <p>{salary}</p>
            </div>
            <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>View Details</button>
        </div>
    );
};

FeaturedJobs.propTypes = {
    getJobs: PropTypes.object
}

export default FeaturedJobs;