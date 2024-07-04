// import React from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import RankedResumes from "../components/RankedResumes";
// import Field from "../components/Field";

// const RankedResumesPage = ({ resumeData, formData }) => {
//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />
//       <Field
//         jobTitle={formData.jobTitle}
//         topCvs={formData.topCvs}
//         jobDescription={formData.jobDescription}
//         onChange={() => {}} // Pass a dummy function as onChange is not needed here
//       />
//       <RankedResumes resumeData={resumeData} />
//       <Footer />
//     </div>
//   );
// };

// export default RankedResumesPage;

import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RankedResumes from "../components/RankedResumes";
import Field from "../components/Field";

const RankedResumesPage = ({ resumeData, formData }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Field
        jobTitle={formData.jobTitle}
        topCvs={formData.topCvs}
        jobDescription={formData.jobDescription}
        onChange={() => {}} // Pass a dummy function as onChange is not needed here
      />
      <RankedResumes resumeData={resumeData} topCvs={formData.topCvs} />
      <Footer />
    </div>
  );
};

export default RankedResumesPage;
