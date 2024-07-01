import React from "react";
import imagePaths from "../data/imagePaths.json";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import InputField from "../components/InputField";
import SocialButton from "../components/SocialButton";
import SubmitButton from "../components/SubmitButton";

const Login = () => {
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
              Login To Your Account
            </h2>
            <div className="flex justify-between mb-10">
              <SocialButton
                platform="Facebook"
                icon={imagePaths.facebook_icon}
              />
              <SocialButton platform="Google" icon={imagePaths.google} />
            </div>
            <form>
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
              <p className="text-[14px] text-customBlue font-poppinsMedium text-center mb-16 mt-[-1.5rem]">
                <a href="#" className=" ">
                  Forgot Your Password
                </a>
              </p>
              <SubmitButton text="Log In" />
            </form>
            <div className="text-center mt-6 font-poppinsMedium text-gray-500">
              <p className="text-[14px]">
                Don't Have An Account?{" "}
                <a href="#" className="text-customBlue font-poppinsBold">
                  Create An Account
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

export default Login;
