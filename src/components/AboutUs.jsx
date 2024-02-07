import React, { useState } from "react";
import twostars from "../images/png/testimonial/two-stars.png";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { StarIcon } from "@heroicons/react/24/solid";
import aboutUs from "../images/png/about-us.png";
import aboutBanner from "../images/png/about-banner.png";
const AboutUs = () => {
  const navigate = useNavigate();
  const [currentInd, setCurrentInd] = useState(0);
  const [bannerInd, setBannerInd] = useState(0);
  var testimonySetting = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentInd(current),
    appendDots: (dots) => (
      <div className="!relative">
        <ul className="my-3 md:my-5"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`ind ${currentInd === i ? "active" : ""}`}></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  var certificateSetting = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    afterChange: (current) => setCurrentInd(current),
    appendDots: (dots) => (
      <div className="!relative">
        <ul className="my-3 md:my-5"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`ind ${currentInd === i ? "active" : ""}`}></div>
    ),
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const products = [
    {
      image: require("../images/png/about/product-img.png"),
      name: "always fresh",
      description: "PRODUCT WELL PACKAGE",
    },
    {
      image: require("../images/png/about/starcard.png"),
      name: "superior quality",
      description: "QUALITY PRODUCTS",
    },
    {
      image: require("../images/png/about/truck.png"),
      name: "free shipping",
      description: "ON ORDER OVER $100",
    },
    {
      image: require("../images/png/about/save-money.png"),
      name: "support",
      description: "24/7 SUPPORT ",
    },
  ];
  const testimonial = [
    {
      image: require("../images/png/testimonial/testi1.png"),
      description: `Exceptional quality and variety! Gold Sparrow offers a delightful range of fruit, vegetable, coffee, and tea powders.`,
    },
    {
      image: require("../images/png/testimonial/testi2.png"),
      description: `Gold Sparrow impresses with top-notch fruit, vegetable, coffee, and tea powders, combining exceptional quality.`
    },
    {
      image: require("../images/png/testimonial/testi3.png"),
      description: `Gold Sparrow excels with premium fruit, vegetable, coffee, and tea powders, boasting quality, ethics, and service excellence.`,
    },
    {
      image: require("../images/png/testimonial/testi1.png"),
      description: `Gold Sparrow's tea powders excel in flavor diversity, quality sourcing, and a delightful brewing experience.`,
    },
    {
      image: require("../images/png/testimonial/testi2.png"),
      description: ` Gold Sparrow crafts exceptional coffee powders, delivering rich flavor, ethically sourced beans, and brewing perfection.`,
    },
    {
      image: require("../images/png/testimonial/testi3.png"),
      description: `Gold Sparrow offers vibrant fruit powders, a burst of natural sweetness, and ethically sourced goodness.`,
    },
  ];
  const certificate = [
    {
      image: require("../images/png/certificate/c1.png"),
    },
    {
      image: require("../images/png/certificate/c2.png"),
    },
    {
      image: require("../images/png/certificate/c3.png"),
    },
    {
      image: require("../images/png/certificate/c4.png"),
    },
    {
      image: require("../images/png/certificate/c5.png"),
    },
    {
      image: require("../images/png/certificate/c6.png"),
    },
    {
      image: require("../images/png/certificate/c7.png"),
    },
    {
      image: require("../images/png/certificate/c8.png"),
    },
  ];
  return (
    <div>
      <div>
        <img src={aboutBanner} alt="banner w-full" />
      </div>
      <div className=" body-font">
        <div className="container mx-auto flex px-5 py-10 md:py-24 lg:flex-row flex-col lg:gap-10 items-center">
          <div className="lg:max-w-lg lg:w-full w-5/6 mb-10 lg:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={aboutUs}
            />
          </div>
          <div className="lg:flex-grow lg:w-1/2 flex flex-col lg:items-start lg:text-left items-center text-center">
            <h1 className="capitalize font-lora font-[600] italic title-font text-xl mb-4 text-[#F1931F]">
              about us
            </h1>
            <h1 className="capitalize font-rubik font-semibold title-font text-2xl md:text-3xl mb-4">
              Welcome to gold sparrow
            </h1>
            <p className="mb-8 leading-relaxed font-rubik text-[#626262]">
              Gold Sparrow International is a leading export company founded by Mr. Hardik Dhankecha in Surat, Gujarat, India with the objective of
              owning the tag of an ideal supplying company on a global platform.
            </p>
            <p className="mb-8 leading-relaxed font-rubik text-[#626262]">
              Gold Sparrow International is also engaged in service the overseas buyers by delivering the cargo at their home port.we are acting
              as a represen tative for the setting-up business of our clients in india.in this way, our clients are getting
              the benefits of our experienced industry professionals in clinching the best deals with full compliance of their requirements.
            </p>
            <p className="mb-8 leading-relaxed font-rubik text-[#626262]">
              Our business has been inspired by the government initiative and vision towards ‘helping the import-export sector’ to reach new heights of success and appreciation.
              While innovation forms the essence of every creation at Gold Sparrow International, we ensure that we don’t compromise on quality.
            </p>
            <p className="mb-8 leading-relaxed font-rubik text-[#626262]">
              In all nations, Gold Sparrow International enjoys priority access to the export. We guarantee to accomplish your task, whether it’s in Europe, the Middle East, the United States, or wherever else you wish to export your food we serve it all.
              Gold Sparrow International also has experience organizing clients for you in other countries so that you may export your food product with convenience and efficiency.
            </p>
          </div>
        </div>
      </div>
      <div className="grid bg-[#F7F6F2] py-5 sm:grid-cols-2 md:grid-cols-4 justify-items-center gap-5 lg:gap-0">
        {products.map((item, ind) => (
          <div
            key={ind}
            className="flex flex-col items-center gap-5 justify-center"
          >
            <img className="w-28 md:w-36" src={item.image} alt={item.name} />
            <div>
              <p className="flex font-rubik justify-center text-center mb-3 uppercase text-sm lg:text-md font-semibold">
                {item.name}
              </p>
              <p className="flex font-rubik justify-center text-center uppercase text-sm lg:text-md text-[#626262]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="my-10 sm:my-14 md:my-20">
        <div className="capitalize font-lora italic font-[600] text-xl text-[#F1931F] flex justify-center">
          testimony
        </div>
        <div className="relative mt-4  flex justify-center">
          <div className="uppercase font-rubik font-[700] tracking-widest text-[#5252521A] text-3xl sm:text-4xl md:text-6xl">
            testimony
          </div>
          <div className="absolute font-rubik font-[600] my-1 md:my-3 w-full flex justify-center top-0 capitalize md:tracking-widest text-xl sm:text-2xl md:text-4xl">
            our satisfied customer says
          </div>
        </div>
        <div className="flex justify-center text-center w-full text-[#626262] mt-6 text-md md:text-lg md:mt-4">
          <span className="w-full md:w-2/4 capitalize font-rubik">
            Discover what our delighted customers are saying, a testament to the excellence we bring to every experience.
          </span>
        </div>
      </div>
      <div className="my-10 flex justify-center sm:my-14 md:my-20">
        <div className="w-full md:w-4/5">
          <Slider {...testimonySetting}>
            {testimonial.map((item, i) => (
              <div key={i} className="mb-12 md:mb-0">
                <div className="relative mb-6 flex justify-center">
                  <img
                    src={item.image}
                    className="w-32 rounded-full shadow-lg dark:shadow-black/20"
                  />
                  <div className="absolute w-36 ">
                    {" "}
                    <img src={twostars} className="w-10" />
                  </div>
                </div>

                <div className="mb-4 text-center gap-5 flex justify-center">
                  <div className="relative flex flex-col justify-center items-center ">
                    <div className="absolute border border-l border-[#626262] h-24"></div>
                    <div className="absolute border-2 border-[#F1931F] h-4"></div>
                  </div>
                  <p className="w-3/4 font-rubik">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="px-5 md:px-0 my-10 sm:my-14 md:my-20">
        <div className="capitalize text-xl font-lora italic font-[600] text-[#F1931F] flex justify-center">
          certification
        </div>
        <div className="relative mt-4 font-rubik font-[600] flex justify-center">
          <div className="uppercase tracking-widest text-[#5252521A] font-bold text-3xl sm:text-4xl md:text-6xl">
            certification
          </div>
          <div className="absolute my-1 md:my-3 w-full flex justify-center top-0 capitalize tracking-normal md:tracking-widest font-bold text-xl sm:text-2xl md:text-4xl">
            our certification
          </div>
        </div>
        <div className="flex justify-center font-rubik font-[500] text-center w-full text-[#626262] mt-6 text-md md:text-lg md:mt-4">
          <span className="w-full md:w-2/3 capitalize">
            We are delighted to share with you that Gold Sparrow International
            has obtained certification by the government of India that it
            complies with the following requirements and has been authorized to
            export our high-quality products across the globe. Therefore, book
            the order now. We promise that once you utilise our high-quality
            products, you’ll be one of our lifelong customers
          </span>
        </div>
      </div>
      <div className="my-10 sm:my-14 md:my-20">
        <div className="w-full ">
          <Slider {...certificateSetting}>
            {certificate.map((item, i) => (
              <div key={i} className="mb-6">
                <div className="flex justify-center">
                  <img src={item.image} className="object-contain h-32 w-32" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
