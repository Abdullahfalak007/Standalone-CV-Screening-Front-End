import React from "react";
import PropTypes from "prop-types";
import imagePaths from "../data/imagePaths.json"; // Import the image paths

const RankedResumes = ({ resumeData }) => {
  return (
    <div className="flex-grow p-8">
      <h2 className="text-3xl font-bold mb-6 text-center">Ranked Resumes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resumeData.map((resume, index) => (
          <div
            key={index}
            className="p-6 border rounded-lg shadow-lg bg-[#E4F0FF] relative"
            style={{
              borderRadius: "17.84px",
              width: "368.22px",
              height: "370.13px",
            }}
          >
            <div className="absolute top-4 right-0 mr-[-1rem] w-[81.52px] h-[28.82px] rounded-tl-[8.23px] rounded-bl-[8.23px] bg-gradient-to-r from-[#0362B3] to-[#4E9BCF] flex items-center justify-center">
              <span className="text-white font-airbnbCereal_W_Bd">
                {resume.rankingIndex}% Rank
              </span>
            </div>
            <div className="flex items-center mb-4">
              <img
                src={resume.image}
                alt={`${resume.name}'s profile`}
                className="object-cover rounded-full mr-4 border-4 border-[#0362B3]"
                style={{
                  width: "45.4px",
                  height: "45.4px",
                }}
              />
              <div>
                <h3
                  className="font-comfortaaBold"
                  style={{
                    fontWeight: 700,
                    fontSize: "19.46px",
                  }}
                >
                  {resume.name}
                </h3>
                <p
                  className="text-gray-600 flex items-center font-comfortaaMedium"
                  style={{
                    fontWeight: 500,
                    fontSize: "12.97px",
                  }}
                >
                  <img
                    src={imagePaths.location}
                    alt="Location icon"
                    className="h-5 w-5 mr-1"
                  />
                  {resume.location}
                </p>
              </div>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Skills</h4>
              <p className="text-customBlue">{resume.skills}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Total Experience</h4>
              <p className="text-customBlue">{resume.totalExperience}</p>
            </div>
            <div className="mb-4">
              <h4 className="font-semibold">Education</h4>
              <p className="text-customBlue">{resume.education}</p>
            </div>
            <div className="flex justify-between">
              <button className="bg-[#0362B3] text-white py-2 px-4 rounded-md hover:bg-[#024b89] transition">
                View
              </button>
              <button className="bg-[#0362B3] text-white py-2 px-4 rounded-md hover:bg-[#024b89] transition">
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

RankedResumes.propTypes = {
  resumeData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      rankingIndex: PropTypes.number.isRequired,
      skills: PropTypes.string.isRequired,
      totalExperience: PropTypes.string.isRequired,
      education: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired, // Added image prop type
    })
  ).isRequired,
};

export default RankedResumes;

// import React from "react";
// import PropTypes from "prop-types";
// import imagePaths from "../data/imagePaths.json"; // Import the image paths

// const RankedResumes = ({ resumeData }) => {
//   return (
//     <div className="flex-grow p-8">
//       <h2 className="text-3xl font-bold mb-6 text-center">Ranked Resumes</h2>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {resumeData.map((resume, index) => (
//           <div
//             key={index}
//             className="p-6 border rounded-lg shadow-lg bg-[#E4F0FF] relative"
//             style={{
//               borderRadius: "17.84px",
//               width: "368.22px",
//               height: "370.13px",
//             }}
//           >
//             <div className="absolute top-4 right-4 flex space-x-2">
//               <div
//                 className="flex items-center justify-center"
//                 style={{
//                   width: "81.52px",
//                   height: "28.82px",
//                   borderRadius: "8.23px 0 0 0",
//                   background: "linear-gradient(to right, #0362B3, #4E9BCF)",
//                 }}
//               >
//                 <img
//                   src={imagePaths.aiIcon} // Ensure you have the correct path for the AI icon
//                   alt="AI Icon"
//                   className="w-4 h-4 mr-1"
//                 />
//                 <span className="text-white font-airbnbCereal_W_Bd">
//                   Ask AI
//                 </span>
//               </div>
//               <button
//                 className="bg-gradient-to-r from-[#0362B3] to-[#4E9BCF] text-white py-1 px-3 rounded-md font-airbnbCereal_W_Bd"
//                 style={{
//                   width: "81.52px",
//                   height: "28.82px",
//                   borderRadius: "0 8.23px 0 0",
//                 }}
//               >
//                 {resume.rankingIndex}% Rank
//               </button>
//             </div>
//             <div className="flex items-center mb-4">
//               <img
//                 src={resume.image}
//                 alt={`${resume.name}'s profile`}
//                 className="object-cover rounded-full mr-4"
//                 style={{
//                   width: "45.4px",
//                   height: "45.4px",
//                   border: "3.24px solid #0362B3",
//                   borderRadius: "50%",
//                 }}
//               />
//               <div>
//                 <h3
//                   className="font-comfortaaBold"
//                   style={{
//                     fontWeight: 700,
//                     fontSize: "19.46px",
//                   }}
//                 >
//                   {resume.name}
//                 </h3>
//                 <p
//                   className="text-gray-600 flex items-center font-comfortaaMedium"
//                   style={{
//                     fontWeight: 500,
//                     fontSize: "12.97px",
//                   }}
//                 >
//                   <img
//                     src={imagePaths.location}
//                     alt="Location icon"
//                     className="h-5 w-5 mr-1"
//                   />
//                   {resume.location}
//                 </p>
//               </div>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold">Skills</h4>
//               <p className="text-customBlue">{resume.skills}</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold">Total Experience</h4>
//               <p className="text-customBlue">{resume.totalExperience}</p>
//             </div>
//             <div className="mb-4">
//               <h4 className="font-semibold">Education</h4>
//               <p className="text-customBlue">{resume.education}</p>
//             </div>
//             <div className="flex justify-between">
//               <button className="bg-[#0362B3] text-white py-2 px-4 rounded-md hover:bg-[#024b89] transition">
//                 View
//               </button>
//               <button className="bg-[#0362B3] text-white py-2 px-4 rounded-md hover:bg-[#024b89] transition">
//                 Download
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// RankedResumes.propTypes = {
//   resumeData: PropTypes.arrayOf(
//     PropTypes.shape({
//       name: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       rankingIndex: PropTypes.number.isRequired,
//       skills: PropTypes.string.isRequired,
//       totalExperience: PropTypes.string.isRequired,
//       education: PropTypes.string.isRequired,
//       image: PropTypes.string.isRequired, // Added image prop type
//     })
//   ).isRequired,
// };

// export default RankedResumes;
