import React from "react";

const Address = () => {
  return (
    <>
      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-map position-absolute"></i>
        <span className="d-block">Address Point</span>Karbala City,
        Near Imam Hussain (A.S) Shirine.
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-envelope-open position-absolute"></i>
        <span className="d-block">mail us</span>{" "}
        <a href="mailto:steve@mail.com">contact@zainal-iraq.com</a>
      </p>
      {/* End .custom-span-contact */}

      <p className="open-sans-font custom-span-contact position-relative">
        <i className="fa fa-phone-square position-absolute"></i>
        <span className="d-block">call us</span>{" "}
        <a href="Tel: +964 000 0000 000">+964 000 0000 000</a>
      </p>
      {/* End .custom-span-contact */}
    </>
  );
};

export default Address;
