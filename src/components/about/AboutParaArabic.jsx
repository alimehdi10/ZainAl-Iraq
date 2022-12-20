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

const AboutParaArabic = () => {
  const mystyle = {
    fontSize: '17px'
  };
  return (
    <>
     <div>
    <p style= {mystyle}>
    زين العراق هي احدى الشركات الرائدة في مجال الاستثمارات العقارية و التطوير العمراني باستخدام احدث وسائل التكنلوجيا العمرانية الحديثة
نبحث عن التميز و الأبداع في اعمالنا من خلال طرح اسلوب حياة جديد و عصري بواجهات و تصاميم فريده تواكب تطورات العصر الجديد

     </p>
     
      <h3 className="text-uppercase pb-4 pb-sm-5 mb-3 mb-sm-0 text-start text-sm-center custom-title ft-wt-600">
      نهج عملنا
            </h3>
      <p style= {mystyle}>بخطى مدروسة و كوادرنا الفنية في مجالات التصميم و التنفيذ نسعى لإضافة الحداثة الى اعمالنا لتساهم اعمالنا في احداث تأثير ايجابي في المجتمع

    </p>

     </div>
    </>
  );
};

export default AboutParaArabic;
