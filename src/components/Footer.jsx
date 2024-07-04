// import React from "react";
// import imagePaths from "../data/imagePaths.json";

// const Footer = () => {
//   return (
//     <div className="relative bg-customDarkBlue text-white py-8 w-full">
//       <img
//         src={imagePaths.footer_bg_luminosity}
//         alt="Luminosity"
//         className="absolute inset-0 w-full h-full object-cover opacity-100"
//       />
//       <div className="container relative mx-auto flex flex-col md:flex-row flex-wrap justify-between gap-4 px-4 md:px-36">
//         {/* First Column */}
//         <div className="mb-4 md:mb-0 flex-[1.5]">
//           <img
//             src={imagePaths.logo_white}
//             alt="Logo"
//             className="mb-4 w-24 h-auto"
//           />
//           <p className="text-[14.43px]">
//             Lorem Ipsum is simply dummy text of the printing and typesetting
//             industry. Lorem Ipsum has been the industry's standard dummy text
//             everLorem Ipsum is simply dummy text of the printing and typesetting
//             printing and typesetting
//           </p>
//         </div>
//         {/* Second Column */}
//         <div className="mb-4 md:mb-0 flex-1 px-4">
//           <h6 className="font-bold mb-3 text-[14.43px]">Company</h6>
//           <ul className="space-y-3 text-[10px]">
//             <li>
//               <a href="#">About</a>
//             </li>
//             <li>
//               <a href="#">Career</a>
//             </li>
//             <li>
//               <a href="#">Sitemap</a>
//             </li>
//             <li>
//               <a href="#">Contact Us</a>
//             </li>
//           </ul>
//         </div>
//         {/* Third Column */}
//         <div className="mb-4 md:mb-0 flex-1 px-4">
//           <h6 className="font-bold mb-3 text-[14.43px]">Support</h6>
//           <ul className="space-y-3 text-[10px]">
//             <li>
//               <a href="#">Support</a>
//             </li>
//             <li>
//               <a href="#">Privacy</a>
//             </li>
//             <li>
//               <a href="#">Terms</a>
//             </li>
//           </ul>
//         </div>
//         {/* Fourth Column */}
//         <div className="flex-1">
//           <h4 className="font-bold mb-3 text-[14.43px]">
//             Sign Up to get Latest Updates
//           </h4>
//           <div className="flex mb-4">
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="p-2 w-[246px] h-[36.24px] bg-white text-gray-500 focus:outline-none focus:border-blue-500"
//             />
//             <button className="p-2 w-[89.83px] h-[36.24px] bg-[#0e73b7] text-white font-montserrat font-medium text-[7.66px]">
//               Subscribe Now
//             </button>
//           </div>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-blue-500">
//               <img
//                 src={imagePaths.facebook}
//                 alt="Facebook"
//                 className="w-6 h-6"
//               />
//             </a>
//             <a href="#" className="hover:text-blue-500">
//               <img
//                 src={imagePaths.linkedin_icon}
//                 alt="LinkedIn"
//                 className="w-6 h-6"
//               />
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// <footer class="style-1">
// <div class="container">
// <div class="content">
// <div class="row justify-content-center">
// <div class="col-lg-4">
// <div class="foot_info">
// <a class="navbar-brand" href="https://cybergen.com">
// <img src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801" alt="" style="width: 200px;">
// </a>

// <ul class="mb-4">
// <li class="d-flex">
// <i class="bi bi-house me-3"></i>
// <a href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797" target="_blank">
// <span>Florida Office<br>2875 S Ocean Blvd, Ste. 200<br>Palm Beach, FL
// 33480</span>
// </a>
// </li>
// <li class="d-flex">
// <i class="bi bi-envelope me-3"></i>
// <a href="mailto:info@cybergen.com" target="_blank">
// <span>info@cybergen.com</span>
// </a>
// </li>
// <li class="d-flex">
// <i class="bi bi-phone me-3"></i>
// <a href="tel:+1-800-561-2713" target="_blank">
// <span>+1-800-561-2713</span>
// </a>
// </li>
// </ul>
// <div class="social_icons mb-4">
// <a href="https://twitter.com/TheCyberGen" target="_blank">
// <i class="fab fa-twitter"></i>
// </a>
// <a href="https://www.facebook.com/thecybergen/" target="_blank">
// <i class="fab fa-facebook-f"></i>
// </a>
// <a href="https://www.linkedin.com/company/the-cyber-generation/" target="_blank">
// <i class="fab fa-linkedin-in"></i>
// </a>
// <a href="https://www.instagram.com/cybergen1team/" target="_blank">
// <i class="fab fa-instagram"></i>
// </a>
// <a href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg" target="_blank">
// <i class="fab fa-youtube"></i>
// </a>
// </div>
// <div class="terms ml-3"><span class="me-3">

// <i class="fal fa-file-contract" style=""></i>
// </span><a href="terms-and-conditions">Terms and Conditions</a></div>
// </div>
// </div>
// <div class="col-lg-2">
// <div class="links">
// <div class="cont">
// <h6 class="link_title"> Services </h6>
// <ul>
// <li>
// <a class="" href="https://cybergen.com/cyber-security-solutions">Cyber
// Security
// Solutions</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/software-development">Software
// Development </a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/digital-branding-services">Digital
// Branding</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/managed-services">Managed Services</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/professional-services">Professional
// Services</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/strategic-staffing">Strategic
// Staffing</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/cybergen-academy">Technical
// Training</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/ai">Artificial Intelligence</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/procurement-services">Procurement Services</a>
// </li>

// </ul>
// </div>
// </div>
// </div>
// <div class="col-lg-2">
// <div class="links">
// <div class="cont">
// <h6 class="link_title"> Information </h6>
// <ul>
// <li>
// <a href="https://cybergen.com/about-us">About Us </a>
// </li>

// <li>
// <a href="https://cybergen.com/blog">Blog </a>
// </li>
// <li>
// <a href="https://cybergen.com/pressrelease">Press Release </a>
// </li>
// <li>
// <a href="https://cybergen.com/careers">Careers </a>
// </li>
// <li>
// <a href="https://cybergen.com/contact-us">Contact Us</a>
// </li>
// <li>
// <a href="https://cybergen.com/partner-with-us">Partner With Us</a>
// </li>
// </ul>
// </div>
// </div>
// </div>
// <div class="col-lg-4">
// <div class="foot_subscribe">
// <h6 class="link_title"> Newsletter </h6>
// <p> Register now to get latest updates on promotions. </p>
// <form id="Newsletter" novalidate="">
// <input type="hidden" name="_token" value="BkJcVWVOEW1hhRchUFWxb1ID1T3MQexpczlWecQc" autocomplete="off"> <input type="hidden" name="form_name" value="Cybergen Newsletter">
// <input type="hidden" name="page_url" value="https://cybergen.com">
// <div class="input-group my-4">
// <input type="email" name="email" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" control-id="ControlID-8">
// <button class="btn butn-gard border-0 text-white px-3" type="submit" id="button-addon2" control-id="ControlID-9">
// <span>Subscribe</span>
// </button>
// </div>
// <div class="col-lg-12 mt-2 alert-class alert-danger text-center error-msg" id="error-msg"></div>
// <div class="col-lg-12 text-center msg" id="footer-msg"></div>
// </form>
// <div> <span id="footeremail" class="footer_email_error"></span></div>
// <div id="footer-loader" style="display:none;">
// <i class="fas fa-spinner fa-spin"></i> Sending message...
// </div>
// <div id="footersuccessMessage" class="success-message col-lg-12 global_success text-center msg "></div>
// <p class="fst-italic">By subscribing, I have accepted the <a href="https://cybergen.com/privacy-policy" class="text-decoration-underline"> Policy</a>
// </p>
// </div>
// </div>
// </div>
// </div>
// <div class="row justify-content-center">
// <div class="col-lg-12">
// <div class="foot">
// <p>©
// 2024 Copyrights by <b style="color:white;">CyberGen.</b> All Rights
// Reserved.

// </p>
// </div>
// </div>
// </div>
// </div>
// </footer>

import React from "react";
import imagePaths from "../data/imagePaths.json";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 w-full">
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-4 md:mb-0">
            <div className="foot_info">
              <a className="navbar-brand" href="https://cybergen.com">
                <img
                  src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801"
                  alt="Logo"
                  className="w-48 mb-4"
                />
              </a>
              <ul className="space-y-4 text-sm">
                <li className="flex items-center">
                  <i className="bi bi-house mr-3"></i>
                  <a
                    href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>
                      Florida Office
                      <br />
                      2875 S Ocean Blvd, Ste. 200
                      <br />
                      Palm Beach, FL 33480
                    </span>
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-envelope mr-3"></i>
                  <a
                    href="mailto:info@cybergen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>info@cybergen.com</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <i className="bi bi-phone mr-3"></i>
                  <a
                    href="tel:+1-800-561-2713"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    <span>+1-800-561-2713</span>
                  </a>
                </li>
              </ul>
              <div className="social_icons flex space-x-4 mt-4">
                <a
                  href="https://twitter.com/TheCyberGen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.facebook.com/thecybergen/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/the-cyber-generation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a
                  href="https://www.instagram.com/cybergen1team/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
              <div className="terms mt-4">
                <span className="mr-3">
                  <i className="fal fa-file-contract"></i>
                </span>
                <a href="terms-and-conditions" className="hover:underline">
                  Terms and Conditions
                </a>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold">Services</h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://cybergen.com/cyber-security-solutions"
                      className="hover:underline"
                    >
                      Cyber Security Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/software-development"
                      className="hover:underline"
                    >
                      Software Development
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/digital-branding-services"
                      className="hover:underline"
                    >
                      Digital Branding
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/managed-services"
                      className="hover:underline"
                    >
                      Managed Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/professional-services"
                      className="hover:underline"
                    >
                      Professional Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/strategic-staffing"
                      className="hover:underline"
                    >
                      Strategic Staffing
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/cybergen-academy"
                      className="hover:underline"
                    >
                      Technical Training
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/ai"
                      className="hover:underline"
                    >
                      Artificial Intelligence
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/procurement-services"
                      className="hover:underline"
                    >
                      Procurement Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mb-4 md:mb-0">
            <div className="links">
              <div className="cont">
                <h6 className="link_title font-bold">Information</h6>
                <ul className="space-y-3 text-sm">
                  <li>
                    <a
                      href="https://cybergen.com/about-us"
                      className="hover:underline"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/blog"
                      className="hover:underline"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/pressrelease"
                      className="hover:underline"
                    >
                      Press Release
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/careers"
                      className="hover:underline"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/contact-us"
                      className="hover:underline"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://cybergen.com/partner-with-us"
                      className="hover:underline"
                    >
                      Partner With Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="foot_subscribe">
              <h6 className="link_title font-bold">Newsletter</h6>
              <p className="text-sm">
                Register now to get the latest updates on promotions.
              </p>
              <form id="Newsletter" noValidate>
                <div className="input-group my-4 flex">
                  <input
                    type="email"
                    name="email"
                    className="form-control bg-gray-800 text-white border border-gray-700 p-2 rounded-l"
                    placeholder="Enter your email"
                    aria-label="Enter your email"
                    aria-describedby="button-addon2"
                    control-id="ControlID-8"
                  />
                  <button
                    className="btn butn-gard border-0 text-white px-3 bg-gray-700 hover:bg-gray-600 rounded-l"
                    type="submit"
                    id="button-addon2"
                    control-id="ControlID-9"
                  >
                    <span>Subscribe</span>
                  </button>
                </div>
                <div
                  className="col-lg-12 mt-2 alert-class alert-danger text-center error-msg"
                  id="error-msg"
                ></div>
                <div
                  className="col-lg-12 text-center msg"
                  id="footer-msg"
                ></div>
              </form>
              <p className="fst-italic text-xs">
                By subscribing, I have accepted the{" "}
                <a
                  href="https://cybergen.com/privacy-policy"
                  className="text-decoration-underline"
                >
                  Policy
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <div className="foot">
            <p className="text-sm">
              © 2024 Copyrights by <b className="text-white">CyberGen.</b> All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// <footer class="style-1">
// <div class="container">
// <div class="content">
// <div class="row justify-content-center">
// <div class="col-lg-4">
// <div class="foot_info">
// <a class="navbar-brand" href="https://cybergen.com">
// <img src="https://cybergen.com/uploads/images/footer_logo.png?v=1719999801" alt="" style="width: 200px;">
// </a>

// <ul class="mb-4">
// <li class="d-flex">
// <i class="bi bi-house me-3"></i>
// <a href="https://www.google.com/maps/dir//2875+S+Ocean+Blvd+%23200+Palm+Beach,+FL+33480+USA/@26.6163634,-80.038212,13z/data=!4m5!4m4!1m0!1m2!1m1!1s0x88d8d9c696155555:0x1c62d8017f4ff797" target="_blank">
// <span>Florida Office<br>2875 S Ocean Blvd, Ste. 200<br>Palm Beach, FL
// 33480</span>
// </a>
// </li>
// <li class="d-flex">
// <i class="bi bi-envelope me-3"></i>
// <a href="mailto:info@cybergen.com" target="_blank">
// <span>info@cybergen.com</span>
// </a>
// </li>
// <li class="d-flex">
// <i class="bi bi-phone me-3"></i>
// <a href="tel:+1-800-561-2713" target="_blank">
// <span>+1-800-561-2713</span>
// </a>
// </li>
// </ul>
// <div class="social_icons mb-4">
// <a href="https://twitter.com/TheCyberGen" target="_blank">
// <i class="fab fa-twitter"></i>
// </a>
// <a href="https://www.facebook.com/thecybergen/" target="_blank">
// <i class="fab fa-facebook-f"></i>
// </a>
// <a href="https://www.linkedin.com/company/the-cyber-generation/" target="_blank">
// <i class="fab fa-linkedin-in"></i>
// </a>
// <a href="https://www.instagram.com/cybergen1team/" target="_blank">
// <i class="fab fa-instagram"></i>
// </a>
// <a href="https://www.youtube.com/channel/UCnlC6DWQ_dXpSebcZ1YLnzg" target="_blank">
// <i class="fab fa-youtube"></i>
// </a>
// </div>
// <div class="terms ml-3"><span class="me-3">

// <i class="fal fa-file-contract" style=""></i>
// </span><a href="terms-and-conditions">Terms and Conditions</a></div>
// </div>
// </div>
// <div class="col-lg-2">
// <div class="links">
// <div class="cont">
// <h6 class="link_title"> Services </h6>
// <ul>
// <li>
// <a class="" href="https://cybergen.com/cyber-security-solutions">Cyber
// Security
// Solutions</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/software-development">Software
// Development </a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/digital-branding-services">Digital
// Branding</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/managed-services">Managed Services</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/professional-services">Professional
// Services</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/strategic-staffing">Strategic
// Staffing</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/cybergen-academy">Technical
// Training</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/ai">Artificial Intelligence</a>
// </li>
// <li>
// <a class="" href="https://cybergen.com/procurement-services">Procurement Services</a>
// </li>

// </ul>
// </div>
// </div>
// </div>
// <div class="col-lg-2">
// <div class="links">
// <div class="cont">
// <h6 class="link_title"> Information </h6>
// <ul>
// <li>
// <a href="https://cybergen.com/about-us">About Us </a>
// </li>

// <li>
// <a href="https://cybergen.com/blog">Blog </a>
// </li>
// <li>
// <a href="https://cybergen.com/pressrelease">Press Release </a>
// </li>
// <li>
// <a href="https://cybergen.com/careers">Careers </a>
// </li>
// <li>
// <a href="https://cybergen.com/contact-us">Contact Us</a>
// </li>
// <li>
// <a href="https://cybergen.com/partner-with-us">Partner With Us</a>
// </li>
// </ul>
// </div>
// </div>
// </div>
// <div class="col-lg-4">
// <div class="foot_subscribe">
// <h6 class="link_title"> Newsletter </h6>
// <p> Register now to get latest updates on promotions. </p>
// <form id="Newsletter" novalidate="">
// <input type="hidden" name="_token" value="BkJcVWVOEW1hhRchUFWxb1ID1T3MQexpczlWecQc" autocomplete="off"> <input type="hidden" name="form_name" value="Cybergen Newsletter">
// <input type="hidden" name="page_url" value="https://cybergen.com">
// <div class="input-group my-4">
// <input type="email" name="email" class="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2" control-id="ControlID-8">
// <button class="btn butn-gard border-0 text-white px-3" type="submit" id="button-addon2" control-id="ControlID-9">
// <span>Subscribe</span>
// </button>
// </div>
// <div class="col-lg-12 mt-2 alert-class alert-danger text-center error-msg" id="error-msg"></div>
// <div class="col-lg-12 text-center msg" id="footer-msg"></div>
// </form>
// <div> <span id="footeremail" class="footer_email_error"></span></div>
// <div id="footer-loader" style="display:none;">
// <i class="fas fa-spinner fa-spin"></i> Sending message...
// </div>
// <div id="footersuccessMessage" class="success-message col-lg-12 global_success text-center msg "></div>
// <p class="fst-italic">By subscribing, I have accepted the <a href="https://cybergen.com/privacy-policy" class="text-decoration-underline"> Policy</a>
// </p>
// </div>
// </div>
// </div>
// </div>
// <div class="row justify-content-center">
// <div class="col-lg-12">
// <div class="foot">
// <p>©
// 2024 Copyrights by <b style="color:white;">CyberGen.</b> All Rights
// Reserved.

// </p>
// </div>
// </div>
// </div>
// </div>
// </footer>
