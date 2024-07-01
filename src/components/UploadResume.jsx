// import React from "react";
// import imagePaths from "../data/imagePaths.json";

// const UploadResume = () => {
//   return (
//     <div className="flex flex-col items-center bg-gray-100 py-8">
//       <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-4 items-center">
//         <div className="bg-white shadow-md rounded-md w-[818px] h-[340px] flex flex-col justify-around items-center p-4">
//           <div className="flex flex-col items-center">
//             <img
//               src={imagePaths.dragAndDrop}
//               alt="Drag and Drop"
//               className="w-12 h-12 mb-2"
//             />
//             <p className="text-customBlack text-lg mb-2">Upload your resume</p>
//             <label className="btn btn-primary flex items-center justify-center bg-customBlue border-none">
//               <img
//                 src={imagePaths.browse}
//                 alt="Browse"
//                 className="w-6 h-6 mr-2"
//               />
//               <span>Browse</span>
//               <input type="file" className="hidden" />
//             </label>
//           </div>
//         </div>
//         <div className="text-center my-4 md:my-0 w-[34px] h-[33px] flex items-center justify-center">
//           <span className="text-customBlack text-lg">Or</span>
//         </div>
//         <div className="flex flex-col space-y-4">
//           <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
//             <img
//               src={imagePaths.googleDrive}
//               alt="Google Drive"
//               className="w-6 h-6 mr-2"
//             />
//             <span>Google Drive</span>
//           </button>
//           <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
//             <img
//               src={imagePaths.dropbox}
//               alt="Dropbox"
//               className="w-6 h-6 mr-2"
//             />
//             <span>Dropbox</span>
//           </button>
//         </div>
//       </div>
//       <button className="btn text-white bg-customBlue mt-4 w-[228px] h-[50.83px] font-airbnbMd text-[21.78px] font-medium text-center rounded-[14.52px]">
//         Rank Resumes
//       </button>
//     </div>
//   );
// };

// export default UploadResume;
import React from "react";
import imagePaths from "../data/imagePaths.json";

const UploadResume = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 py-8">
      <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-4 items-center">
        <div className="bg-white shadow-md rounded-md w-[818px] h-[340px] flex flex-col justify-around items-center p-4">
          <div className="flex flex-col items-center">
            <img
              src={imagePaths.dragAndDrop}
              alt="Drag and Drop"
              className="w-12 h-12 mb-2"
            />
            <p className="text-customBlack text-lg mb-2">Upload your resume</p>
            <label className="flex items-center justify-center w-[119px] h-[35px] rounded-[10px] border border-[1px] bg-gradient-to-r from-[#0362B3] via-[#076FB5] to-[#4E9BCF] cursor-pointer">
              <img
                src={imagePaths.browse}
                alt="Browse"
                className="w-6 h-6 mr-2"
              />
              <span className="text-white">Browse</span>
              <input type="file" className="hidden" />
            </label>
          </div>
        </div>
        <div className="text-center my-4 md:my-0 w-[34px] h-[33px] flex items-center justify-center">
          <span className="text-customBlack text-lg">Or</span>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
            <img
              src={imagePaths.googleDrive}
              alt="Google Drive"
              className="w-6 h-6 mr-2"
            />
            <span>Google Drive</span>
          </button>
          <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
            <img
              src={imagePaths.dropbox}
              alt="Dropbox"
              className="w-6 h-6 mr-2"
            />
            <span>Dropbox</span>
          </button>
        </div>
      </div>
      <button className="btn text-white bg-customBlue mt-4 w-[228px] h-[50.83px] font-airbnbMd text-[21.78px] font-medium text-center rounded-[14.52px]">
        Rank Resumes
      </button>
    </div>
  );
};

export default UploadResume;
