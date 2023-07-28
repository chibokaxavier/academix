import React from "react";

const Courses = () => {
  return (
    <div className="xl:mx-[160px] mx-5 md:mx-10 mb-10">
      <div className="flex-col space-y-4">
        <p className="text-3xl font-semibold">A broad selection of courses</p>
        <p className="text-xl">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        <div className="flex flex-col lg:flex-row   lg:space-x-6 font-semibold cursor-pointer pb-5">
          <p className="lg:hover:underline hover:text-gray-500">Python</p>
          <p> Excel</p>
          <p> Web Development</p>
          <p>Javascript</p>
          <p>Data Science</p>
          <p>Amazon AWS</p>
        </div>
      </div>

      <div className="w-full h-[300px] hidden lg:block bg-red border-2"></div>
    </div>
  );
};

export default Courses;
