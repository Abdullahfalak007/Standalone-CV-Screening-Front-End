import React from "react";
import PropTypes from "prop-types";
import menuItems from "../data/menuItems.json";
import imagePaths from "../data/imagePaths.json";

const Navbar = ({ isAuthPage }) => {
  return (
    <div
      className={`w-full ${
        isAuthPage
          ? "bg-registrationPageBg"
          : "bg-white border border-x-0 border-customBlue"
      } mt-10 h-full top-[45px] z-50`}
    >
      <div className="navbar h-[57px]">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
          </div>
          <img
            src={imagePaths.logo}
            alt="Logo"
            className="h-[57px] w-auto ml-5"
          />
        </div>
        {!isAuthPage && (
          <>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 text-black">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a className="btn btn-ghost px-[1.4rem]" href={item.link}>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="navbar-end">
              <div className="relative mr-5">
                <img
                  src={imagePaths.hotlineContainer}
                  alt="Hotline Container"
                  width="165"
                  height="33.48"
                />
                <div className="absolute inset-0 flex items-center justify-center p-1">
                  <img
                    src={imagePaths.hotlineIcon}
                    alt="Hotline Icon"
                    className="mr-1"
                    style={{ width: "21.52px", height: "21.52px" }}
                  />
                  <div>
                    <div className="text-black font-orbitronBold text-[8px] leading-4">
                      Hotline 24/7
                    </div>
                    <div className="text-black font-orbitronBold text-[11px] leading-4">
                      (+23) 5535 6868
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  isAuthPage: PropTypes.bool,
};

export default Navbar;
