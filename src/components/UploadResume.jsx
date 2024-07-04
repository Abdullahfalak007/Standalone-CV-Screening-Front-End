import React, { useState } from "react";
import PropTypes from "prop-types";
import imagePaths from "../data/imagePaths.json";
import resumeData from "../data/resumeData.json"; // Import the resume data

const UploadResume = ({ onUploadComplete }) => {
  const [fileUploaded, setFileUploaded] = useState(false); // New state for file upload

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.name.split(".").pop().toLowerCase();
      if (fileType === "zip" || fileType === "rar") {
        setFileUploaded(true); // Set file upload flag to true
      } else {
        alert("Please upload a file in .zip or .rar format.");
      }
    }
  };

  const handleRankResumes = async () => {
    if (fileUploaded) {
      setIsLoading(true); // Trigger loading state

      // Dummy function to simulate waiting for 3 seconds
      await new Promise((resolve) => setTimeout(resolve, 3000));

      setIsLoading(false); // Stop loading state

      // Call the function passed from the parent to handle the completion of the upload
      onUploadComplete(resumeData);
    } else {
      alert("Please upload a file before ranking resumes.");
    }
  };

  const [isLoading, setIsLoading] = useState(false); // New loading state for ranking resumes

  return (
    <div className="flex flex-col items-center py-8">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="flex flex-col items-center justify-center w-[549px] h-[293.6px] rounded-[20px] bg-gradient-to-tr from-[#0362B3] to-[#E4F0FF] p-4">
            <svg
              fill="currentColor"
              viewBox="0 0 1792 1792"
              className="text-white w-20 h-20 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z" />
            </svg>
            <p className="text-white mt-8 text-center font-poppinsMedium font-medium text-[28.59px] leading-[40px]">
              Waiting For Ranking Resumes
            </p>
          </div>
        </div>
      )}
      <div className="container mx-auto p-4 flex flex-col md:flex-row md:space-x-4 items-center">
        <div className="bg-white border rounded-md w-[818px] h-[340px] flex flex-col justify-around items-center p-4">
          <div className="flex flex-col items-center">
            <img
              src={imagePaths.dragAndDrop}
              alt="Drag and Drop"
              className="w-[47px] h-[47px] mb-[17px]"
            />
            <p className="text-customBlue text-lg mb-[17px] font-poppinsRegular text-[20px] leading-[30px]">
              Drag And Drop A File Here
            </p>
            <label className="flex items-center justify-center w-[119px] h-[35px] rounded-[10px] border border-[1px] bg-gradient-to-r from-[#0362B3] via-[#076FB5] to-[#4E9BCF] cursor-pointer">
              <img
                src={imagePaths.browse}
                alt="Browse"
                className="w-[16px] h-[15.2] mr-2"
              />
              <span className="text-white font-poppinsRegular text-[15px]">
                Browse
              </span>
              <input
                type="file"
                className="hidden"
                accept=".zip , .rar"
                onChange={handleFileUpload}
              />
            </label>
          </div>
        </div>
        <div className="text-center my-4 md:my-0 w-[34px] h-[33px] flex items-center justify-center">
          <span className="text-customBlue font-poppinsMedium text-lg">Or</span>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
            <img
              src={imagePaths.googleDrive}
              alt="Google Drive"
              className="w-[29.63px] h-[25.75px] mr-2"
            />
            <span className="font-poppinsMedium text-white font-medium text-[18.39px] ">
              Google Drive
            </span>
          </button>
          <button className="btn btn-primary flex items-center justify-center bg-customBlue border border-customBlue border-[1.23px] w-[237px] h-[42.92px] rounded-[12.26px]">
            <img
              src={imagePaths.dropbox}
              alt="Dropbox"
              className="w-[32.45px] h-[28.2px] mr-6"
            />
            <span className="font-poppinsMedium text-white font-medium text-[18.39px] ">
              Dropbox
            </span>
          </button>
        </div>
      </div>
      <button
        className="btn text-white bg-customBlue mt-4 w-[228px] h-[50.83px] font-poppinsRegular text-[21.78px] font-medium text-center rounded-[14.52px]"
        onClick={handleRankResumes}
      >
        Rank Resumes
      </button>
    </div>
  );
};

UploadResume.propTypes = {
  onUploadComplete: PropTypes.func.isRequired,
};

export default UploadResume;
