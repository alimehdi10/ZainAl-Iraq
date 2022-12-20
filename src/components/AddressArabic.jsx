import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">عنوان نقطة</span>كربلاء,
        قريب من الحرم الامام الحسين (ع)
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">راسلنا بالبريد الإلكتروني</span>{" "}
        <a href="mailto:steve@mail.com">contact@zainal-iraq.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">اتصل بنا</span>{" "}
        <a href="Tel: +964 000 0000 000">000 0000 000 964+</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
