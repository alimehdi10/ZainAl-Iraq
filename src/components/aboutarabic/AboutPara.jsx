import React from "react";

const skillsContent = [
  { skillClass: "p25", skillPercent: "25", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  { skillClass: "p95", skillPercent: "95", skillName: "WORDPRESS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p65", skillPercent: "65", skillName: "ANGULAR" },
  { skillClass: "p45", skillPercent: "45", skillName: "REACT" },
];

const AboutPara = () => {
  const mystyle = {
    fontSize: '17px'
  };
  return (
    <>
     <div>
    <p style= {mystyle}>
    We are looking for excellence and creativity in our work by offering a new and modern lifestyle with unique facades and designs that keep pace with the developments of the new era
     </p>
     
      <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
              Our Approach
            </h3>
      <p style= {mystyle}>With deliberate steps and our technical staff in the fields of design and implementation, we seek to add modernity to our work so that our work contributes to making a positive impact on society

    </p>

     </div>
    </>
  );
};

export default AboutPara;
