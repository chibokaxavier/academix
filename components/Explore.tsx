import React from "react";
import explore from "@/explore";

const Explore = () => {
  return (
    <div className="xl:mx-[160px] mx-5 md:mx-10 mb-10 ">
      <p className="text-3xl pb-10">Explore academiX</p>
      <div className="grid md:grid-cols-3 ">
        {explore.map((exploree, i) => (
          <div key={i} className="flex my-5 md:mr-5 cursor-pointer  items-center h-[100px] min-w-[300px] space-x-4 rounded-md shadow-xl">
            <img src={exploree.image} alt="" className="w-[100px] h-full rounded-tl-md rounded-bl-md" />
            <div>
              <p className="text-lg font-bold">{exploree.name}</p>
              <p className="text-sm font-semibold text-gray-400">
                {exploree.courses} courses
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
