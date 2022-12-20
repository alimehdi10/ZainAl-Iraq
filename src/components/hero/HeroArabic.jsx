import React, { useState } from "react";
import Modal from "react-modal";
import heroImgMobile from "../../../public/assets/img/hero/img-mobile.jpg";
import cancelImg from "../../../public/assets/img/cancel.svg";
import AboutMain from "../aboutarabic";
import Image from "next/image";

const heroContent = {
  heroImage: "/assets/img/hero/rtl-dark.jpg",
  heroMobileImage: heroImgMobile,
  heroTitleName: "زين العراق",
  heroDesignation: "استثمار عقاري",
  heroDescriptions: ` بصفتنا شركة استثماريه مختصة ب الاستثمارات العقارية والتطوير العمراني عملت الشركة على عده مشاريع مختلفة من مشاريع تجاريه ومراكز تسوق ضخمه وصولاً الى منازل و المجمعات السكنية و هذه نبذه عن اعمالنا`,
  heroBtn: "تعرف عنا",
};

const HeroArabic = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  const mystyle={
    fontSize: '22px'
  }

  return (
    <>
      <div className="row home-details-container align-items-center">
        <div
          className="col-lg-4 bg position-fixed d-none d-lg-block"
          style={{ backgroundImage: `url(${heroContent.heroImage})` }}
        ></div>
        <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
          <div>
            <Image
              src={heroContent.heroMobileImage}
              className="img-fluid main-img-mobile d-sm-block d-lg-none"
              alt="hero man"
              // style={{width:'100%',height:'100%'}}
            />
            <h1 className="text-uppercase poppins-font">
              {heroContent.heroTitleName}
              <span>{heroContent.heroDesignation}</span>
            </h1>
            <p className="open-sans-font" style={mystyle}>{heroContent.heroDescriptions}</p>
            <button className="button" onClick={toggleModalOne}>
              <span className="button-text">{heroContent.heroBtn}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End home-details-container */}

      {/* Start Modal for About More */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal dark hero"
        overlayClassName="custom-overlay dark"
        closeTimeoutMS={500}
      >
        <div>
          <button className="close-modal" onClick={toggleModalOne}>
            <Image src={cancelImg} alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner about">
            <div data-aos="fade-up" data-aos-duration="1200">
              <div className="title-section text-start text-sm-center">
                <h1>
                عنا <span>معلومات</span>
                </h1>
                <span className="title-bg">من نحن</span>
              </div>
              {/* End title */}
              <AboutMain />
            </div>
          </div>
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  Modal for About More */}
    </>
  );
};

export default HeroArabic;
