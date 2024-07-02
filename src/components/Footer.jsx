import React from "react";
import imagePaths from "../data/imagePaths.json";

const Footer = () => {
  return (
    <div className="relative bg-customDarkBlue text-white py-8 w-full">
      <img
        src={imagePaths.footer_bg_luminosity}
        alt="Luminosity"
        className="absolute inset-0 w-full h-full object-cover opacity-100"
      />
      <div className="container relative mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-4 px-4 md:px-36">
        {/* First Column */}
        <div className="mb-4 md:mb-0 flex-[1.5]">
          <img
            src={imagePaths.logo_white}
            alt="Logo"
            className="mb-4 w-24 h-auto"
          />
          <p className="text-[14.43px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            everLorem Ipsum is simply dummy text of the printing and typesetting
            printing and typesetting
          </p>
        </div>
        {/* Second Column */}
        <div className="mb-4 md:mb-0 flex-1 px-4">
          <h6 className="font-bold mb-3 text-[14.43px]">Company</h6>
          <ul className="space-y-3 text-[10px]">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Sitemap</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        {/* Third Column */}
        <div className="mb-4 md:mb-0 flex-1 px-4">
          <h6 className="font-bold mb-3 text-[14.43px]">Support</h6>
          <ul className="space-y-3 text-[10px]">
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
        {/* Fourth Column */}
        <div className="flex-1">
          <h4 className="font-bold mb-3 text-[14.43px]">
            Sign Up to get Latest Updates
          </h4>
          <div className="flex mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 w-[246px] h-[36.24px] bg-white text-gray-500 focus:outline-none focus:border-blue-500"
            />
            <button className="p-2 w-[89.83px] h-[36.24px] bg-[#0e73b7] text-white font-montserrat font-medium text-[7.66px]">
              Subscribe Now
            </button>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <img
                src={imagePaths.facebook}
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <a href="#" className="hover:text-blue-500">
              <img
                src={imagePaths.linkedin_icon}
                alt="LinkedIn"
                className="w-6 h-6"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
