import PropTypes from 'prop-types';
const JobCategory = ({getCategory}) => {    
    const { category_name, logo, availability } = getCategory
    return (
        <div className='text-left p-9 bg-gray-100 mx-2 lg:mx-0 mb-2 lg:mb-0'>
            <img className='mb-3' src={logo} alt="" />
            <p className='font-extrabold'>{category_name}</p>
            <p className='text-[#A3A3A3]'>{availability}</p>
        </div>
    );
};

JobCategory.propTypes = {
    getCategory: PropTypes.object,
}

export default JobCategory;