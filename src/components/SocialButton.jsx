import React from "react";
import PropTypes from "prop-types";

const SocialButton = ({ platform, icon, onClick }) => {
  const bgColor =
    platform === "Google"
      ? "bg-[#b9e0f4] border border-customBlue bg-registrationPageBg"
      : "bg-[#b9e0f4]";

  return (
    <button
      className={`flex items-center justify-center w-full py-2 px-4 ${bgColor} font-poppinsMedium text-[15px] rounded-lg mr-2`}
      onClick={onClick}
    >
      <img src={icon} alt={`${platform} Icon`} className="md:mr-2" />
      Sign Up With {platform}
    </button>
  );
};

SocialButton.propTypes = {
  platform: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default SocialButton;
