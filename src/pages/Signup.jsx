import React from "react";
import imagePaths from "../data/imagePaths.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import SocialButton from "../components/SocialButton";
import SubmitButton from "../components/SubmitButton";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-registrationPageBg">
      <Navbar isAuthPage={true} />
      <div className="flex flex-col mt-24 md:flex-row items-center justify-center w-full max-w-6xl ">
        <div className="md:w-1/2 flex justify-center">
          <img
            src={imagePaths.personImage}
            alt="Person Image"
            className="w-[473.42px] h-[552.63px] md:mr-10"
          />
        </div>
        <div className="md:w-1/2 w-full px-8 md:px-0 bg-registrationPageBg">
          <div className="px-8 w-[484.94] h-[443.82] ">
            <h2 className="text-2xl font-poppinsSemiBold mb-6 text-center">
              Create New Account
            </h2>
            <div className="flex justify-between mb-4">
              <SocialButton
                platform="Facebook"
                icon={imagePaths.facebook_icon}
              />
              <SocialButton platform="Google" icon={imagePaths.google} />
            </div>
            <form>
              <InputField
                id="fullName"
                type="text"
                placeholder="Name"
                icon={imagePaths.nameIcon}
              />
              <InputField
                id="email"
                type="email"
                placeholder="Email"
                icon={imagePaths.emailIcon}
              />
              <InputField
                id="password"
                type="password"
                placeholder="Password"
                icon={imagePaths.passwordIcon}
              />
              <SubmitButton text="Sign Up" />
            </form>
            <div className="text-center mt-6 font-poppinsMedium text-gray-500">
              <p className="text-[14px]">
                Already Member?{" "}
                <a href="#" className="text-customBlue font-poppinsBold">
                  Log In
                </a>
              </p>
              <p className="text-gray-500 text-sm mt-2 text-[12px]">
                By Creating An Account, You Agree To BOT{" "}
                <a href="#" className="text-customBlue font-poppinsBold">
                  Terms Of Service
                </a>{" "}
                And{" "}
                <a href="#" className="text-customBlue font-poppinsBold">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
