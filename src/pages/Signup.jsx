// import React from "react";
// import imagePaths from "../data/imagePaths.json";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const Signup = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-registrationPageBg">
//       <Navbar />
//       <div className="flex flex-col mt-24 md:flex-row items-center justify-center w-full max-w-6xl ">
//         <div className="md:w-1/2 flex justify-center">
//           <img
//             src={imagePaths.personImage}
//             alt="Person Image"
//             className="w-[473.42px] h-[552.63px] md:mr-10"
//           />
//         </div>
//         <div className="md:w-1/2 w-full px-8 md:px-0 bg-registrationPageBg">
//           <div className="px-8 w-[484.94] h-[443.82] ">
//             <h2 className="text-2xl font-bold mb-6 text-center">
//               Create New Account
//             </h2>
//             <div className="flex justify-center mb-4">
//               <button className="flex items-center justify-center w-full py-2 px-4 bg-[#b9e0f4] font-poppinsMedium text-[15px]  rounded-lg mr-2">
//                 <img
//                   src={imagePaths.facebook_icon}
//                   alt="Facebook Icon"
//                   className="md:mr-2"
//                 />
//                 Sign Up With Facebook
//               </button>
//               <button className="flex items-center justify-center w-full py-2 px-4 bg-[#b9e0f4] borderborder-customBlue font-poppinsMedium text-[15px]  rounded-lg mr-2">
//                 <img src={imagePaths.google} alt="Google" className="md:mr-2" />
//                 Sign Up With Google
//               </button>
//             </div>
//             <form>
//               <div className="mb-4 relative">
//                 <img
//                   src={imagePaths.nameIcon}
//                   alt="Name Icon"
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                 />
//                 <input
//                   type="text"
//                   id="fullName"
//                   placeholder="Name"
//                   className="input input-bordered w-full pl-10"
//                 />
//               </div>
//               <div className="mb-4 relative">
//                 <img
//                   src={imagePaths.emailIcon}
//                   alt="Email Icon"
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                 />
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="Email"
//                   className="input input-bordered w-full pl-10"
//                 />
//               </div>
//               <div className="mb-4 relative">
//                 <img
//                   src={imagePaths.passwordIcon}
//                   alt="Password Icon"
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
//                 />
//                 <input
//                   type="password"
//                   id="password"
//                   placeholder="Password"
//                   className="input input-bordered w-full pl-10"
//                 />
//               </div>
//               <div className="flex justify-center">
//                 <button
//                   type="submit"
//                   className="w-[120.88px] h-[45px] bg-customBlue text-white font-poppinsSemiBold text-[16px] rounded-lg bg-customDarkBlue hover:bg-blue-700"
//                   style={{ borderRadius: "10px" }}
//                 >
//                   Sign Up
//                 </button>
//               </div>
//             </form>
//             <div className="text-center mt-6 font-poppinsMedium text-gray-500">
//               <p className="text-[14px]">
//                 Already Member?{" "}
//                 <a href="#" className="text-customBlue font-poppinsBold">
//                   Log In
//                 </a>
//               </p>
//               <p className="text-gray-500 text-sm mt-2 text-[12px]">
//                 By Creating An Account, You Agree To BOT{" "}
//                 <a href="#" className="text-customBlue font-poppinsBold">
//                   Terms Of Service
//                 </a>{" "}
//                 And{" "}
//                 <a href="#" className="text-customBlue font-poppinsBold">
//                   Privacy Policy
//                 </a>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Signup;

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
