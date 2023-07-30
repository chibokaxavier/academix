import React from "react";

const Header = () => {
  return (
    <>
      <div className=" border-b-2 lg:block hidden  sticky bg-white top-0">
        <div className="flex justify-between mx-5 py-4 items-center">
          <div className="flex space-x-3 justify-center items-center">
            <h1 className="text-4xl text-blue-800 font-semibold">academiX</h1>
            <div className="w-[100px] flex justify-center items-center  h-fit p-2 px-4 rounded-lg bg-blue-700 text-white font-semibold">
              Explore
            </div>
            <div className="flex">
              <input
                type="text"
                className=" lg:w-[150px] xl:w-[400px] py-2 px-2 border-2 border-black "
                placeholder="What do you want to learn ?"
              />
              <div className="bg-blue-800 h-[43px] rounded-tr-md rounded-br-md w-10 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-3 text-base">
            <p className="cursor-pointer flex lg:hidden xl:flex">
              Online degrees
            </p>
            <p className="cursor-pointer flex lg:flex xl:hidden">Degrees</p>
            <p className="hover:underline hover:text-blue-800 cursor-pointer ">
              {" "}
              Find your new career
            </p>
            <p className="hover:underline cursor-pointer text-blue-800">
              Log in
            </p>
            <button className="p-2 bg-blue-800 text-white rounded-md">
              Join for free
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between  py-3 px-3 lg:hidden sticky bg-white top-0 items-center">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 md:w-14 md:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
            />
          </svg>
        </div>
        <div>
          {" "}
          <h1 className="text-4xl md:text-6xl text-blue-800 font-semibold">
            academiX
          </h1>
        </div>
        <div>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-black md:w-14 md:h-14"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

export default Header;
