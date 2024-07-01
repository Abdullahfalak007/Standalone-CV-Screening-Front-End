import React from "react";
import PropTypes from "prop-types";

const InputField = ({ id, type, placeholder, icon }) => {
  return (
    <div className="mb-8 relative">
      {" "}
      {/* Increase the margin-bottom here */}
      <img
        src={icon}
        alt={`${placeholder} Icon`}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
      />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="input input-bordered w-full pl-10"
      />
    </div>
  );
};

InputField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default InputField;
