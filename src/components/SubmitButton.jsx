import React from "react";
import PropTypes from "prop-types";

const SubmitButton = ({ text }) => {
  return (
    <div className="flex justify-center">
      <button
        type="submit"
        className="w-[120.88px] h-[45px] bg-customBlue text-white font-poppinsSemiBold text-[16px] rounded-lg bg-customDarkBlue hover:bg-blue-700"
        style={{ borderRadius: "10px" }}
      >
        {text}
      </button>
    </div>
  );
};

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default SubmitButton;
