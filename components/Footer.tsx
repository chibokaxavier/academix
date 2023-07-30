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
    <div className="flex justify-between">
      <div>© 2023 academiX Inc. All rights reserved.</div>
      <div className="flex">
        <AiOutlineInstagram />
        <FaTiktok />
        <FaTwitter />
        <FaFacebook />
        <FaGithub />
      </div>
    </div>
  );
};

export default Footer;
