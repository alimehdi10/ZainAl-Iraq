import React, { useEffect } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import HeroArabic from "../components/hero/HeroArabic";
import AboutMain from "../components/aboutarabic";
import Wrapper from "../layout/wrapper";
import SEO from "../components/Seo";
import Portfolio from "../components/portfolio/Portfolio";
import AddressArabic from "../components/AddressArabic";
import Social from "../components/Social";
import Contact from "../components/Contact";
import Blog from "../components/blog/Blog";
import SwitchDark from "../components/switch/SwitchDark";

const menuItem = [
  { icon: "fa-home", menuName: "رئيسي" },
  { icon: "fa-user", menuName: "معلومات" },
  { icon: "fa-briefcase", menuName: "صورة" },
  { icon: "fa-envelope-open", menuName: "اتصل" },
  { icon: "fa-comments", menuName: "المشاريع" },
];

const HomeDark = () => {
  useEffect(() => {
    document.querySelector("body").classList.add("rtl");
  }, []);
  return (
    <Wrapper>
      <SEO pageTitle={"Zain Al Iraq-Arabic"} />

      <div className="yellow">
        <SwitchDark />
        {/* End Switcher */}
        <Tabs>
          <div className="header">
            <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
              {menuItem.map((item, i) => (
                <Tab className="icon-box" key={i}>
                  <i className={`fa ${item.icon}`}></i>
                  <h2>{item.menuName}</h2>
                </Tab>
              ))}
            </TabList>
          </div>
          {/* End Menu Content */}

          <div className="tab-panel_list">
            {/* Hero Content Starts */}
            <TabPanel className="home ">
              <div
                className="container-fluid main-container container-home p-0 "
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="color-block d-none d-lg-block"></div>
                <HeroArabic />
              </div>
            </TabPanel>
            {/* Hero Content Ends */}

            {/* About Content Starts */}
            <TabPanel className="about">
              <div data-aos="fade-up" data-aos-duration="1200">
                <div className="title-section text-start text-sm-center">
                  <h1>
                  معلومات  <span>عنا</span>
                  </h1>
                  <span className="title-bg">من نحن</span>
                </div>
                {/* End title */}
                <AboutMain />
              </div>
            </TabPanel>
            {/* About Content Ends */}

            {/* Portfolio Content Starts */}
            <TabPanel className="portfolio professional">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                   <span>معرضنا</span>
                </h1>
                <span className="title-bg">عرض العمل</span>
              </div>
              {/* End title */}
              <Portfolio />
            </TabPanel>
            {/* Portfolio Content Ends */}

            {/* Contact Content Starts */}
            <TabPanel className="contact">
              <div
                className="title-section text-start text-sm-center"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                اتصل<span> إلينا</span>
                </h1>
                <span className="title-bg">اتصل بنا</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <div className="row">
                  {/*  Left Side Starts */}
                  <div className="col-12 col-lg-4">
                    <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                    لا تخجل !
                    </h3>
                    <p className="open-sans-font mb-4">
                    لا تتردد في الحصول على اتصال معي. أنا منفتح دائمًا على مناقشة مشروع جديد أو أفكار إبداعية أو فرص لأكون جزءًا من رؤيتك.
                    </p>
                    <AddressArabic />
                    {/* End Address */}

                    <Social />
                    {/* End Social */}
                  </div>
                  {/* Left Side Ends */}

                  {/*  Contact Form Starts  */}
                  <div className="col-12 col-lg-8">
                    <Contact />
                  </div>
                  {/*  Contact Form Ends */}
                </div>
              </div>
              {/* End .container */}
            </TabPanel>
            {/* Contact Content Ends */}

            {/* Blog Content Starts */}
            <TabPanel className="blog">
              <div
                className="title-section text-start text-sm-center "
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                <h1>
                   <span>مشروعنا</span>
                </h1>
                <span className="title-bg">مشروعنا</span>
              </div>
              <div
                className="container"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                {/*  Articles Starts  */}
                <div className="row pb-50">
                  <Blog />
                </div>
                {/* Articles Ends */}
              </div>
            </TabPanel>
            {/* Blog Content Ends */}
          </div>
        </Tabs>
      </div>
    </Wrapper>
  );
};

export default HomeDark;
