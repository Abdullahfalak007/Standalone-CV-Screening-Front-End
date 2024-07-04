import React from "react";
import dropdownsData from "../data/dropdownsData.json";
import imagePaths from "../data/imagePaths.json";

const Field = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col space-y-4 md:w-[358px]">
            <div className="form-control">
              <label className="label text-customBlue font-poppinsRegular font-normal text-[15px]">
                Job Title*
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-[44px] font-interRegular text-[15px] focus:outline-none focus:border-customBlue focus:ring-customBlue"
              />
            </div>
            <div className="form-control relative">
              <label className="label text-customBlue font-poppinsRegular font-normal text-[15px]">
                Top CV's
              </label>
              <div className="relative">
                <select
                  className="select select-bordered w-full h-[44px] font-interRegular text-[15px] focus:outline-none focus:border-customBlue focus:ring-customBlue appearance-none pr-10"
                  style={{ backgroundImage: "none" }}
                >
                  {dropdownsData.topCvs.map((cv, index) => (
                    <option key={index} value={cv}>
                      {cv}
                    </option>
                  ))}
                </select>
                <img
                  src={imagePaths.dropdownArrow}
                  alt="Dropdown Arrow"
                  className="absolute right-2 top-1/2  transform -translate-y-1/2 w-[12px] h-[6px] pointer-events-none"
                />
              </div>
            </div>
          </div>
          <div className="form-control mt-4 md:mt-0 md:flex-1 md:w-[884px]">
            <label className="label text-customBlue font-poppinsRegular font-normal text-[15px]">
              Job Description*
            </label>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered w-full h-[147px] font-interRegular text-[15px] resize-none focus:outline-none focus:border-customBlue focus:ring-customBlue"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
