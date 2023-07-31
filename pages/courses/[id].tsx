import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";
import courses from "@/courses";
import { useRouter } from "next/router";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Courses = () => {
  const router = useRouter();
  const { id } = router.query;

  const course = courses.find((course) => {
    return course.id === parseInt(id as string);
  });
  return (
    <>
      <head>
        <title>academiX</title>
      </head>
      <header>
        <Header />
      </header>

      <main className="bg-black text-white ">
        <div className="flex items-start justify-start xl:mx-[160px] mx-5 md:mx-10 md:w-[500px] pt-10">
          <img src={course?.image} alt="" />
        </div>

        <div className="xl:mx-[160px] mx-5 md:mx-10 py-6 space-y-2">
          <p className="text-blue-400 font-bold">
            Development / {course?.type}
          </p>
          <p className="text-2xl font-bold">{course?.name}</p>
          <p className="md:font-semibold text-lg">{course?.text}</p>
          <div className="flex flex-col md:flex-row md:items-center md:space-x-2  space-y-1 md:space-y-0">
            <div className=" h-8 w font-bold w-[110px] flex items-center justify-center bg-yellow-200 text-black">
              Best Seller
            </div>
            <div className="flex md:items-center md:justify-center ">
              <span className="mr-2 font-bold text-yellow-300">4.7</span>
              <span>
                <AiOutlineStar className="h-5 w-5 font-bold text-yellow-300" />
              </span>
              <span>
                <AiOutlineStar className="h-5 w-5 font-bold text-yellow-300" />
              </span>
              <span>
                <AiOutlineStar className="h-5 w-5 font-bold text-yellow-300" />
              </span>
              <span>
                <AiOutlineStar className="h-5 w-5 font-bold text-yellow-300" />
              </span>
              <span>
                <AiOutlineStar className="h-5 w-5 font-bold text-yellow-300" />
              </span>
            </div>
            <p className="underline text-blue-400">(125,388 ratings)</p>
            <p>{course?.number} Students</p>
          </div>
          <p>
            Created by{" "}
            <span className="underline text-blue-400">
              {course?.instructor}
            </span>
          </p>
          <div className="flex space-x-4 ">
            <button className="p-4 bg-blue-400 text-black rounded-md font-bold">
              Add to cart
            </button>
            <button className="rounded-md bg-white font-bold text-black p-4">
              Buy now
            </button>
          </div>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Courses;
