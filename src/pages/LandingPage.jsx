// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import imagePaths from "../data/imagePaths.json"; // Import image paths

// const LandingPage = () => {
//   const companyLogos = [
//     imagePaths.person1,
//     imagePaths.person2,
//     imagePaths.person3,
//     imagePaths.person4,
//     imagePaths.person1,
//     imagePaths.person2,
//     imagePaths.person3,
//     imagePaths.person4,
//   ];

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow flex flex-col items-center justify-center px-4 mt-28">
//         <h1 className="font-montserrat font-black text-[40px] md:text-[50px] leading-tight text-center max-w-[905px]">
//           EFFICIENT <span className="text-customBlue">RESUME</span> RANKING FOR
//           HUMAN RESOURCES <span className="text-customBlue">PROFESSIONALS</span>
//         </h1>
//         <p className="text-center mt-4 text-gray-600 font-montserrat font-medium text-[18px] md:text-[21.51px]">
//           Upload, Rank, And Filter Resumes Effortlessly For Optimal Candidate
//           Selection.
//         </p>
//         <button className="mt-6 bg-customBlue text-white font-montserrat font-semibold text-[20px] md:text-[27.6px] w-[200px] md:w-[259px] h-[50px] md:h-[64px] rounded-[30px] md:rounded-[52.61px] flex items-center justify-center">
//           Get Started
//         </button>
//         <div className="relative mt-8 w-full flex items-center justify-center mb-[50px] md:mb-[150px]">
//           <img
//             src={imagePaths.curveLine} // Ensure you have the correct path for the curve line SVG
//             alt="Curve Line"
//             className="absolute left-0 right-0 mx-auto w-full h-auto"
//           />
//           <div className="absolute flex justify-between items-center w-[90%] md:w-[70%] mx-auto">
//             <img
//               src={imagePaths.person1}
//               alt="Person 1"
//               className="w-12 h-12 md:w-20 md:h-20 rounded-full object-cover border-4 border-white"
//             />
//             <img
//               src={imagePaths.person2}
//               alt="Person 2"
//               className="w-12 h-12 md:w-20 md:h-20 mt-12 md:mt-36 rounded-full object-cover border-4 border-white"
//             />
//             <img
//               src={imagePaths.person3}
//               alt="Person 3"
//               className="w-12 h-12 md:w-20 md:h-20 mt-12 md:mt-36 rounded-full object-cover border-4 border-white"
//             />
//             <img
//               src={imagePaths.person4}
//               alt="Person 4"
//               className="w-12 h-12 md:w-20 md:h-20 mb-10 md:mb-20 rounded-full object-cover border-4 border-white"
//             />
//           </div>
//         </div>
//         <div className="flex flex-col items-center mt-8">
//           <h2 className="text-gray-600 font-montserrat font-medium text-[20px]">
//             Trusted By <span className="text-customBlue">100+</span> Amazing
//             Companies
//           </h2>
//           <div className="scroll-container mt-4">
//             <div className="scroll-content">
//               {companyLogos.map((logo, index) => (
//                 <img
//                   key={index}
//                   src={logo}
//                   alt={`Company ${index + 1}`}
//                   className="w-12 h-12 md:w-20 md:h-20 rounded-full mx-4"
//                 />
//               ))}
//               {companyLogos.map((logo, index) => (
//                 <img
//                   key={index + companyLogos.length}
//                   src={logo}
//                   alt={`Company ${index + 1}`}
//                   className="w-12 h-12 md:w-20 md:h-20 rounded-full mx-4"
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default LandingPage;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imagePaths from "../data/imagePaths.json";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1 flex-col items-center justify-center  lg:px-8">
        <div className="w-full  mx-auto flex flex-col lg:flex-row items-center justify-between mt-20 lg:mt-32">
          <div className="lg:w-1/2 ">
            <h1 className="text-4xl font-bold text-black leading-tight">
              Efficient Resume Ranking for Human Resources Professionals
            </h1>
            <p className="text-lg text-gray-600 mt-6 mb-8 leading-relaxed">
              Empower your HR team with intelligent and unbiased resume ranking,
              ensuring you select the best talent. Our advanced resume screening
              tool analyzes and ranks resumes with unparalleled precision,
              saving you time and resources. Say goodbye to manual sorting and
              hello to a smarter, faster, and fairer way of finding the perfect
              candidates for your organization. Transform your HR operations and
              stay ahead in the competitive talent market.
            </p>
          </div>
          <div className="lg:w-1/2 px-4 flex justify-center">
            <img
              src={imagePaths.LandingPage.heroImage}
              alt="Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
        <div className="w-full mt-16 flex flex-col items-center bg-[#e9f2fe] relative">
          <h2 className="text-2xl font-bold text-black mb-6 relative z-10 mt-8">
            How To Use
          </h2>
          <div className="relative w-full flex justify-center items-center  rounded-lg overflow-hidden">
            <img
              src={imagePaths.LandingPage.luminosityLines}
              alt="Luminosity Lines"
              className="absolute left-1 top-0 h-auto z-0"
            />
            <video
              className="w-[70.5rem] h-[34.4375rem] rounded-lg shadow-lg z-10 mb-8"
              width="100%"
              height="auto"
              controls
              poster={imagePaths.LandingPage.videoPoster} // Placeholder image for the video
            >
              <source src="/how_to_use_tutorial.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
