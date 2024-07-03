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

{
  /* <nav class="navbar navbar-expand-lg navbar-light style-1">
<div class="container">
<a class="navbar-brand" href="https://cybergen.com">
<img src="https://cybergen.com/uploads/images/site_logo.png?v=1719998877" alt="" style="width: 200px;">
</a>
<div class="collapseButton-notification-wrap">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>
<div class="header-icon-parent header-icon-parent-responsive  position-relative">
<div class="cg-notification-body d-none">
<div class="cg-notify-top position-relative">
Notification
<img src="/assets/img/notify-pointer.png" alt="">
</div>
<div class="cg-notify-text-wrap-container">
<div class="no_notification">
<center> No notification</center>
</div>
</div>
</div>
</div>
</div>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
<ul class="navbar-nav me-auto mb-2 mb-lg-0">
<li class="nav-item">
<a class="nav-link active" href="https://cybergen.com"> Home </a>
</li>
<li class="nav-item dropdown">
<a class="nav-link dropdown-toggle show" href="/our_services" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="true"> Services </a>
<ul class="dropdown-menu show" href="/our_services" aria-labelledby="navbarDropdown1" data-bs-popper="none">
<li>
<a class="dropdown-item" href="https://cybergen.com/cyber-security-solutions">Cyber
Security
Solutions</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/software-development">Software
Development
</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/digital-branding-services">Digital
Branding</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/managed-services">Managed Services</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/professional-services">Professional
Services</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/strategic-staffing">Strategic
Staffing</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/cybergen-academy">Cybergen
Academy</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/ai">Artificial Intelligence</a>
</li>
<li>
<a class="dropdown-item" href="https://cybergen.com/procurement-services">Procurement Services</a>
</li>

</ul>
</li>
<li class="nav-item">
<a class="nav-link" href="https://cybergen.com/careers"> Careers </a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://cybergen.com/blog"> Blog </a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://cybergen.com/about-us"> About Us </a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://cybergen.com/contact-us"> Contact Us</a>
</li>
</ul>
<div class="nav-side ">
<div class="header-icon-parent header-icon-parent-desktop  position-relative">
<div class="cg-notification-body d-none">
<div class="cg-notify-top position-relative">
Notification
<img src="/assets/img/notify-pointer.png" alt="">
</div>
<div class="cg-notify-text-wrap-container">
<div class="no_notification">
<center> No notification</center>
</div>
</div>
</div>
</div>
<div class="hotline pe-1">
<div class="icon me-3">
<i class="bi bi-telephone"></i>
</div>
<div class="cont">
<small class="text-muted m-0">Hotline 24/7</small>
<h6>+1-800-561-2713</h6>
</div>
</div>
</div>
</div>
</div>
</nav> */
}
