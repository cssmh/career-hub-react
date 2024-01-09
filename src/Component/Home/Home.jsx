import userPhoto from '../../assets/images/user.png'
const Home = () => {
    return (
        <div>
            <section className='my-12'>
                <div className="px-3 lg:px-0 flex-row md:flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl md:text-5xl font-extrabold">One Step<br></br> Closer To Your<br></br> <span className='text-[#7E90FE]'>Dream Job</span></h1>
                        <p className='my-3 text-[#757575]'>Explore thousands of job opportunities with all the<br></br> information you need. Its your future. Come find it. Manage all<br></br> your job application from start to finish.</p>
                        <button className='btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white'>Get Started</button>
                    </div>
                    <img className="lg:w-2/5" src={userPhoto} alt="" />
                </div>
            </section>
        </div>
    );
};

export default Home;