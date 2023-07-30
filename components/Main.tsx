import React from "react";
import Collabs from "./Collabs";
import Courses from "./Courses";
import Explore from "./Explore";

const Main = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center md:justify-between items-center xl:mx-[160px] mx-5 md:mx-10">
        <div className="space-y-10 flex justify-center items-center md:items-start md:text-left text-center flex-col">
          <p className="text-5xl md:w-[500px] lg:w-[650px] md:leading-[80px] lg:text-7xl lg:leading-[100px] md:text-6xl font-semibold capitalize">
            Learn without limits
          </p>
          <p className="lg:w-[550px] md:w-[400px] text-lg">
            Start, switch, or advance your career with more than 5,800 courses,
            Professional Certificates, and degrees from world-class universities
            and companies.
          </p>
          <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 justify-center md:space-x-5">
            <button className="bg-blue-600 hover:bg-blue-800 p-4 px-6 text-white rounded-md">
              Join for Free
            </button>
            <button className=" px-6 p-4 text-blue-800 hover:bg-slate-100 border-blue-800 border-2 rounded-md">
              Try academiX for Business
            </button>
          </div>
        </div>
        <div>
          <img
            src="./undraw.png"
            alt=""
            className="hidden md:w-auto md:h-auto md:block"
          />
        </div>
      </div>
      <Collabs />
      <Courses />
      <Explore />
    </div>
  );
};

export default Main;
