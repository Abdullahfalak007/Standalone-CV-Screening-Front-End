// import React from "react";
// import Navbar from "../components/Navbar";
// import Field from "../components/Field";
// import CheckingResumeIndex from "../components/CheckingResumeIndex";
// import UploadResume from "../components/UploadResume";
// import Footer from "../components/Footer";

// const FormPage = () => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow">
//         <Field />
//         <CheckingResumeIndex />
//         <UploadResume />
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default FormPage;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Field from "../components/Field";
import CheckingResumeIndex from "../components/CheckingResumeIndex";
import UploadResume from "../components/UploadResume";
import Footer from "../components/Footer";
import RankedResumes from "./RankedResumesPage";

const FormPage = () => {
  const [resumeData, setResumeData] = useState(null);

  const handleUploadComplete = (data) => {
    setResumeData(data);
  };

  if (resumeData) {
    return <RankedResumes resumeData={resumeData} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Field />
        <CheckingResumeIndex />
        <UploadResume onUploadComplete={handleUploadComplete} />
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
