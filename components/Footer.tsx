import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import {
  FaTwitter,
  FaFacebook,
  FaGithub,
  FaReddit,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-between flex-col md:flex-row items-center space-y-5 md:space-y-0 border-t py-10 xl:mx-[160px] mx-5 md:mx-10">
      <div>© 2023 academiX Inc. All rights reserved.</div>
      <div className="flex  space-x-3">
        <AiOutlineInstagram className="w-8 h-8 cursor-pointer" />
        <FaTiktok className="w-8 h-8 cursor-pointer" />
        <FaTwitter className="w-8 h-8 cursor-pointer" />
        <FaFacebook className="w-8 h-8 cursor-pointer" />
        <FaGithub className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default Footer;
