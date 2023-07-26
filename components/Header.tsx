import React from "react";

const Header = () => {
  return (
    <div className=" border-b-2 ">
      <div className="flex justify-between mx-5 my-4 items-center">
        <div className="flex space-x-3 justify-center items-center">
          <h1 className="text-4xl text-blue-800 font-semibold">academiX</h1>
          <div className="w-[100px] flex justify-center items-center  h-fit p-2 px-4 rounded-lg bg-blue-700 text-white font-semibold">
            Explore
          </div>
          <div className="flex">
            <input
              type="text"
              className="w-[400px] py-2 px-2 border-2 border-black "
              placeholder="What do you want to learn ?"
            />
            <div className="bg-blue-800 h-[43px] rounded-tr-md rounded-br-md w-10 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-3 text-base">
          <p className="cursor-pointer">Online Degrees</p>
          <p className="hover:underline hover:text-blue-800 cursor-pointer">
            {" "}
            Find your new career
          </p>
          <p className="hover:underline cursor-pointer text-blue-800">Log in</p>
          <button className="p-2 bg-blue-800 text-white rounded-md">Join for free</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
