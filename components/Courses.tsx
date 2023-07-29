import React, {
  useEffect,
  useState,
  createContext,
  useContext,
  useMemo,
} from "react";
import courses from "@/courses";

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

  const [dataArray, setDataArray] = useState([python]);

  return (
    <div className="xl:mx-[160px] mx-5 md:mx-10 mb-10">
      <div className="flex-col space-y-4">
        <p className="text-3xl font-semibold">A broad selection of courses</p>
        <p className="text-xl">
          Choose from over 210,000 online video courses with new additions
          published every month
        </p>
        <div className="flex flex-col lg:flex-row   lg:space-x-6 font-semibold cursor-pointer pb-5">
          <p
            onClick={() => {
              setDataArray([python]);
              handlePythonClick();
            }}
            className={`lg:hover:underline ${
              isPythonActive ? `text-black` : `text-gray-400`
            }`}
          >
            Python
          </p>
          <p
            className={`lg:hover:underline ${
              isExcelActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([webdev]);
              handleExcelClick();
            }}
          >
            {" "}
            Excel
          </p>
          <p
            className={`lg:hover:underline ${
              isWebdevActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([webdev]);
              handleWebdevClick();
            }}
          >
            {" "}
            Web Development
          </p>
          <p
            className={`lg:hover:underline ${
              isJavascriptActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([webdev]);
              handleJavascriptClick();
            }}
          >
            Javascript
          </p>
          <p
            className={`lg:hover:underline ${
              isDataActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([webdev]);
              handleDataClick();
            }}
          >
            Data Science
          </p>
          <p
            className={`lg:hover:underline ${
              isAWSActive ? `text-black` : `text-gray-400`
            }`}
            onClick={() => {
              setDataArray([webdev]);
              handleAWSClick();
            }}
          >
            Amazon AWS
          </p>
        </div>
      </div>

      <div className="w-[50%] h-fit my-5 hidden lg:block bg-red border-2">
        {dataArray.map((data) => (
          <div>
            {data.map((course) => (
              <div className="p-2 space-y-5 flex flex-col cursor-pointer">
                <p className="text-2xl font-bold">{course.header}</p>
                <p className="text-base">{course.text}</p>
                <img src={course.image} alt="" />
                <p className="font-bold text-sm">{course.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
