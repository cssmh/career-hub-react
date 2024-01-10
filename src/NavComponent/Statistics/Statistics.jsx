import { Discuss } from "react-loader-spinner";

const Statistics = () => {
  return (
    <div className="flex justify-center mt-4">
      <p>Under maintenance</p>
      <Discuss
        visible={true}
        height="80"
        width="80"
        ariaLabel="discuss-loading"
        wrapperStyle={{}}
        wrapperClass="discuss-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
};

export default Statistics;
