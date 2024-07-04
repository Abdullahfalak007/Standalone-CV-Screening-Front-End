// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Field from "../components/Field";
// import CheckingResumeIndex from "../components/CheckingResumeIndex";
// import UploadResume from "../components/UploadResume";
// import Footer from "../components/Footer";
// import RankedResumes from "./RankedResumesPage";

// const FormPage = () => {
//   const [resumeData, setResumeData] = useState(null);
//   const [formData, setFormData] = useState({
//     jobTitle: "",
//     topCvs: "",
//     jobDescription: "",
//   });

//   const handleUploadComplete = (data) => {
//     setResumeData(data);
//   };

//   const handleChange = (field, value) => {
//     setFormData({ ...formData, [field]: value });
//   };

//   if (resumeData) {
//     return <RankedResumes resumeData={resumeData} formData={formData} />;
//   }

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <div className="flex-grow">
//         <Field
//           jobTitle={formData.jobTitle}
//           topCvs={formData.topCvs}
//           jobDescription={formData.jobDescription}
//           onChange={handleChange}
//         />
//         <CheckingResumeIndex />
//         <UploadResume
//           onUploadComplete={handleUploadComplete}
//           formData={formData}
//         />
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
  const [formData, setFormData] = useState({
    jobTitle: "",
    topCvs: "",
    jobDescription: "",
  });

  const handleUploadComplete = (data) => {
    setResumeData(data);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  if (resumeData) {
    return <RankedResumes resumeData={resumeData} formData={formData} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Field
          jobTitle={formData.jobTitle}
          topCvs={formData.topCvs}
          jobDescription={formData.jobDescription}
          onChange={handleChange}
        />
        <CheckingResumeIndex />
        <UploadResume
          onUploadComplete={handleUploadComplete}
          formData={formData}
        />
      </div>
      <Footer />
    </div>
  );
};

export default FormPage;
