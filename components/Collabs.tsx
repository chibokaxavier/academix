import React from "react";

const Collabs = () => {
  return (
    <div className="my-10 ">
      <div className="bg-gray-200 flex py-7 px-2 md:px-5 items-center justify-center space-y-10 flex-col">
        <div className="flex  text-xl lg:text-3xl  text-center items-center justify-center">
          We collaborate with 300+ leading universities and companies
        </div>
        <div className="flex justify-center md:space-x-10 space-x-6 space-y-5 items-center  flex-wrap">
          <img src="./duke.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./google.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./ibm.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./illinois.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./imperial.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./penn.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img src="./stanford.png" alt="/" className="md:w-[100px] w-[65px]" />
          <img
            src="./umich.png"
            alt="/"
            className="md:w-[60px] h-[50px]  lg:h-[80px] w-[35px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Collabs;
