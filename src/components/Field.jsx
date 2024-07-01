import React from "react";
import dropdownsData from "../data/dropdownsData.json";

const Field = () => {
  return (
    <div className=" py-8">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col space-y-4 md:w-[358px]">
            <div className="form-control">
              <label className="label text-customBlue">Job Title*</label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full h-[44px] focus:outline-none focus:border-customBlue focus:ring-customBlue"
              />
            </div>
            <div className="form-control">
              <label className="label text-customBlue">Top CV's</label>
              <select className="select select-bordered w-full h-[44px] focus:outline-none focus:border-customBlue focus:ring-customBlue">
                {dropdownsData.topCvs.map((cv, index) => (
                  <option key={index} value={cv}>
                    {cv}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="form-control mt-4 md:mt-0 md:flex-1 md:w-[884px]">
            <label className="label text-customBlue">Job Description*</label>
            <textarea
              placeholder="Type here"
              className="textarea textarea-bordered w-full h-[147px] resize-none focus:outline-none focus:border-customBlue focus:ring-customBlue"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Field;
