import Image from "next/image";
import Link from "next/link";
import dark from "../../public/assets/img/intro/dark.jpg";
import rtl from "../../public/assets/img/intro/rtl.jpg";
import SEO from "../components/Seo";

const preview = () => {
  const previewDemo = [
    {
      img: dark,
      title: "English",
      routerPath: "/home-dark",
      delayAnimation: "50",
    },
    {
      img: rtl,
      title: "عربي",
      routerPath: "/home-rtl",
      delayAnimation: "150",
    },
  ];

  const mystyle= {
    fontSize : '30px'
  }

  const mystyle2= {
    fontSize : '30px',
    color : 'yellow'
  }

  return (

    <>
      

      <section className="demo dark">
        <div className="container">
        <h2 style={mystyle}>Zain Al Iraq</h2>
          <div className="row">
           
            {previewDemo.map((val, i) => (
              <div
                className="col-xs-12 col-sm-6 col-md-6"
                key={i}
                data-aos="fade-down"
                data-aos-duration="2000"
                data-aos-delay={val.delayAnimation}
              >
                <div className="content text-center">
                  <div className="bg_container">
                    <Link
                      href={val.routerPath}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={val.img}
                        alt="demo"
                        className="img-responsive screenshot"
                        style={{ width: "100%", height: "80%" }}
                      />
                    </Link>
                  </div>
                  <h2 className="demo-title">{val.title}</h2>
                  <div className="anchor">
                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* End .Demo */}

      
      {/* End footer */}
    </>
  );
};

export default preview;
