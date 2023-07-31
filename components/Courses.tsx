import React, { useState } from "react";
import courses from "@/courses";
import Arrowdown from "./Arrowdown";
import Arrowup from "./Arrowup";
import Link from "next/link";

const Courses = () => {
  const [isPythonActive, setIsPythonActive] = useState(true);
  const [isExcelActive, setIsExcelActive] = useState(false);
  const [isWebdevActive, setIsWebdevActive] = useState(false);
  const [isJavascriptActive, setIsJavascriptActive] = useState(false);
  const [isDataActive, setIsDataActive] = useState(false);
  const [isAWSActive, setIsAWSActive] = useState(false);

  const handlePythonClick = () => {
    setIsPythonActive(true);
    setIsAWSActive(false);
    setIsDataActive(false);
    setIsExcelActive(false);
    setIsJavascriptActive(false);
    setIsWebdevActive(false);
  };
  const handleWebdevClick = () => {
    setIsPythonActive(false);
    setIsAWSActive(false);
    setIsDataActive(false);
    setIsExcelActive(false);
    setIsJavascriptActive(false);
    setIsWebdevActive(true);
  };
  const handleAWSClick = () => {
    setIsPythonActive(false);
    setIsAWSActive(true);
    setIsDataActive(false);
    setIsExcelActive(false);
    setIsJavascriptActive(false);
    setIsWebdevActive(false);
  };
  const handleDataClick = () => {
    setIsPythonActive(false);
    setIsAWSActive(false);
    setIsDataActive(true);
    setIsExcelActive(false);
    setIsJavascriptActive(false);
    setIsWebdevActive(false);
  };
  const handleExcelClick = () => {
    setIsPythonActive(false);
    setIsAWSActive(false);
    setIsDataActive(false);
    setIsExcelActive(true);
    setIsJavascriptActive(false);
    setIsWebdevActive(false);
  };
  const handleJavascriptClick = () => {
    setIsPythonActive(false);
    setIsAWSActive(false);
    setIsDataActive(false);
    setIsExcelActive(false);
    setIsJavascriptActive(true);
    setIsWebdevActive(false);
  };
  const python = courses.filter((course) => {
    return course.type === "python";
  });

  const webdev = courses.filter((course) => {
    return course.type === "Webdev";
  });
  const excel = courses.filter((course) => {
    return course.type === "Excel";
  });
  const aws = courses.filter((course) => {
    return course.type === "AWS";
  });
  const javascript = courses.filter((course) => {
    return course.type === "Javascript";
  });
  const data = courses.filter((course) => {
    return course.type === "Data";
  });

  const [dataArray, setDataArray] = useState([python]);

  return (
    <div className="xl:mx-[160px] mx-5 md:mx-10 mb-10 ">
      <div className="flex-col space-y-4">
        <p className="text-3xl font-semibold">A broad selection of courses</p>
        <p className="text-xl">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        <div className="flex flex-col md:flex-row   md:space-x-6 font-semibold cursor-pointer pb-5">
          {/* <Link href={`/courses/${}`} >  */}
          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([python]);
                  handlePythonClick();
                }}
                className={`lg:hover:underline  ${
                  isPythonActive ? `text-black` : `text-black md:text-gray-400`
                }`}
              >
                Python
              </p>

              <div
                onClick={() => setIsPythonActive(!isPythonActive)}
                className="md:hidden"
              >
                {isPythonActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isPythonActive && (
              <div className="md:hidden ">
                {python.map((course, i) => (
                  <Link href={`/courses/${course.id}`}>
                    <div className="space-y-2 " key={i}>
                      <img src={course.image} alt="" className="pt-4" />
                      <div>
                        <p className="text-lg">{course.name}</p>
                        <p className="text-sm text-gray-400">
                          {course.instructor}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* </Link> */}

          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([excel]);
                  handleExcelClick();
                }}
                className={`lg:hover:underline   ${
                  isExcelActive ? `text-black` : `text-black md:text-gray-400`
                }`}
              >
                Excel
              </p>

              <div
                onClick={() => setIsExcelActive(!isExcelActive)}
                className="md:hidden"
              >
                {isExcelActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isExcelActive && (
              <div className="md:hidden ">
                {excel.map((course, i) => (
                  <div className="space-y-2 " key={i}>
                    <img src={course.image} alt="" className="pt-4" />
                    <div>
                      <p className="text-lg">{course.name}</p>
                      <p className="text-sm text-gray-400">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* <p
            className={`lg:hover:underline ${
              isExcelActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([excel]);
              handleExcelClick();
            }}
          >
            {" "}
            Excel
          </p> */}
          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([webdev]);
                  handleWebdevClick();
                }}
                className={`lg:hover:underline   ${
                  isWebdevActive ? `text-black` : `text-black md:text-gray-400`
                }`}
              >
                Web Development
              </p>

              <div
                onClick={() => setIsWebdevActive(!isWebdevActive)}
                className="md:hidden"
              >
                {isWebdevActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isWebdevActive && (
              <div className="md:hidden ">
                {webdev.map((course, i) => (
                  <div className="space-y-2 " key={i}>
                    <img src={course.image} alt="" className="pt-4" />
                    <div>
                      <p className="text-lg">{course.name}</p>
                      <p className="text-sm text-gray-400">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([javascript]);
                  handleJavascriptClick();
                }}
                className={`lg:hover:underline   ${
                  isJavascriptActive
                    ? `text-black`
                    : `text-black md:text-gray-400`
                }`}
              >
                Javascript
              </p>

              <div
                onClick={() => setIsJavascriptActive(!isJavascriptActive)}
                className="md:hidden"
              >
                {isJavascriptActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isJavascriptActive && (
              <div className="md:hidden ">
                {javascript.map((course, i) => (
                  <div className="space-y-2 " key={i}>
                    <img src={course.image} alt="" className="pt-4" />
                    <div>
                      <p className="text-lg">{course.name}</p>
                      <p className="text-sm text-gray-400">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([data]);
                  handleDataClick();
                }}
                className={`lg:hover:underline   ${
                  isDataActive ? `text-black` : `text-black md:text-gray-400`
                }`}
              >
                Data Science
              </p>

              <div
                onClick={() => setIsDataActive(!isDataActive)}
                className="md:hidden"
              >
                {isDataActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isDataActive && (
              <div className="md:hidden ">
                {data.map((course, i) => (
                  <div className="space-y-2 " key={i}>
                    <img src={course.image} alt="" className="pt-4" />
                    <div>
                      <p className="text-lg">{course.name}</p>
                      <p className="text-sm text-gray-400">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className=" md:border-none border-t-2 border-b-2 md:py-0 py-4">
            <div className="flex justify-between">
              <p
                onClick={() => {
                  setDataArray([aws]);
                  handleAWSClick();
                }}
                className={`lg:hover:underline   ${
                  isAWSActive ? `text-black` : `text-black md:text-gray-400`
                }`}
              >
                Amazon AWS
              </p>

              <div
                onClick={() => setIsAWSActive(!isAWSActive)}
                className="md:hidden"
              >
                {isAWSActive ? <Arrowdown /> : <Arrowup />}
              </div>
            </div>

            {isAWSActive && (
              <div className="md:hidden ">
                {aws.map((course, i) => (
                  <div className="space-y-2 " key={i}>
                    <img src={course.image} alt="" className="pt-4" />
                    <div>
                      <p className="text-lg">{course.name}</p>
                      <p className="text-sm text-gray-400">
                        {course.instructor}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-[50%] h-fit p-5 hidden md:block bg-red border-2 rounded-md shadow-xl">
        {dataArray.map((data, i) => (
          <div key={i}>
            {data.map((course, i) => (
              <Link href={`/courses/${course.id}`}>
                <div
                  key={i}
                  className="p-2 space-y-5 flex flex-col cursor-pointer"
                >
                  <p className="text-2xl font-bold">{course.header}</p>
                  <p className="text-base">{course.text}</p>
                  <img src={course.image} alt="" className="" />
                  <div>
                    <p className="font-bold text-2xl">{course.name}</p>
                    <p className="text-gray-400">{course.instructor}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
