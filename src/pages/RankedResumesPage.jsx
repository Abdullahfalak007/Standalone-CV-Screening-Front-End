import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RankedResumes from "../components/RankedResumes";
import Field from "../components/Field";

const RankedResumesPage = ({ resumeData }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Field />
      <RankedResumes resumeData={resumeData} />
      <Footer />
    </div>
  );
};

export default RankedResumesPage;
