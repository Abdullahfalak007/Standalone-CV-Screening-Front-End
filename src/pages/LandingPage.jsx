import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagePaths from "../data/imagePaths.json"; // Import image paths

const LandingPage = () => {
  const companyLogos = [
    imagePaths.person1,
    imagePaths.person2,
    imagePaths.person3,
    imagePaths.person4,
    imagePaths.person1,
    imagePaths.person2,
    imagePaths.person3,
    imagePaths.person4,
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex flex-col items-center justify-center px-4 mt-28">
        <h1 className="font-montserrat font-black text-[40px] md:text-[50px] leading-tight text-center max-w-[905px]">
          EFFICIENT <span className="text-customBlue">RESUME</span> RANKING FOR
          HUMAN RESOURCES <span className="text-customBlue">PROFESSIONALS</span>
        </h1>
        <p className="text-center mt-4 text-gray-600 font-montserrat font-medium text-[18px] md:text-[21.51px]">
          Upload, Rank, And Filter Resumes Effortlessly For Optimal Candidate
          Selection.
        </p>
        <button className="mt-6 bg-customBlue text-white font-montserrat font-semibold text-[20px] md:text-[27.6px] w-[200px] md:w-[259px] h-[50px] md:h-[64px] rounded-[30px] md:rounded-[52.61px] flex items-center justify-center">
          Get Started
        </button>
        <div className="relative mt-8 w-full flex items-center justify-center mb-[50px] md:mb-[150px]">
          <img
            src={imagePaths.curveLine} // Ensure you have the correct path for the curve line SVG
            alt="Curve Line"
            className="absolute left-0 right-0 mx-auto w-full h-auto"
          />
          <div className="absolute flex justify-between items-center w-[90%] md:w-[70%] mx-auto">
            <img
              src={imagePaths.person1}
              alt="Person 1"
              className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
            />
            <img
              src={imagePaths.person2}
              alt="Person 2"
              className="w-12 h-12 md:w-20 md:h-20 mt-12 md:mt-36 rounded-full object-cover border-4 border-white"
            />
            <img
              src={imagePaths.person3}
              alt="Person 3"
              className="w-12 h-12 md:w-20 md:h-20 mt-12 md:mt-36 rounded-full object-cover border-4 border-white"
            />
            <img
              src={imagePaths.person4}
              alt="Person 4"
              className="w-12 h-12 md:w-20 md:h-20 mb-10 md:mb-20 rounded-full object-cover border-4 border-white"
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-8">
          <h2 className="text-gray-600 font-montserrat font-medium text-[20px]">
            Trusted By <span className="text-customBlue">100+</span> Amazing
            Companies
          </h2>
          <div className="scroll-container mt-4">
            <div className="scroll-content">
              {companyLogos.map((logo, index) => (
                <img
                  key={index}
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full mx-4"
                />
              ))}
              {companyLogos.map((logo, index) => (
                <img
                  key={index + companyLogos.length}
                  src={logo}
                  alt={`Company ${index + 1}`}
                  className="w-12 h-12 md:w-20 md:h-20 rounded-full mx-4"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
