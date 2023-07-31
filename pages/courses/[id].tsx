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
      <div>
        <main className="bg-black text-white ">
          <div className="xl:mx-[160px] mx-5 md:mx-10 py-2 space-y-2">
            <p className="text-blue-400 font-bold">
              Development / {course?.type}
            </p>
            <p className="text-2xl font-bold">{course?.name}</p>
            <p className="font-semibold">{course?.text}</p>
            <div className="flex items-center space-x-2 ">
              <div className=" h-8 px-1 font-bold w-[90px] flex items-center justify-center bg-yellow-200 text-black">
                Best Seller
              </div>
              <div className="flex items-center justify-center ">
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
              <p className="underline text-blue-400">
                (125,388 ratings)
              </p>
              <p>{course?.number} Students</p>
            </div>
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Courses;
