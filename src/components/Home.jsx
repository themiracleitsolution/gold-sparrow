import React, { useState } from "react";
import bannerImg1 from "../images/png/home-banner1.jpg";
import bannerImg2 from "../images/png/home-banner2.jpg";
import bannerImg3 from "../images/png/home-banner3.jpg";
import bannerImg4 from "../images/png/home-banner4.jpg";
import firstImg from "../images/png/products/1.png";
import secondImg from "../images/png/products/2.png";
import thirdImg from "../images/png/products/3.png";
import fourthImg from "../images/png/products/4.png";
import fifthImg from "../images/png/products/5.png";
import twostars from "../images/png/testimonial/two-stars.png";
import homeBanner2 from "../images/png/home-banner-2.png";
import homeBanner3 from "../images/png/home-banner-3.png";
import eco from "../images/png/eco.png";
import box from "../images/png/box.png";
import { ProductData } from "../data/product";
import { StarIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
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
  var bannerSetting = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (current) => setBannerInd(current),
    appendDots: (dots) => (
      <div className="!relative">
        <ul className="absolute bottom-5 md:bottom-8 flex justify-center w-full">
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className={`ind ${bannerInd === i ? "active" : ""}`}></div>
    ),
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
      image: require("../images/png/exlusive-product/peach.png"),
      name: "peach",
      link: "/products/fruits/peach",
    },
    {
      image: require("../images/png/exlusive-product/dragonfruit.png"),
      name: "Dragon Fruit",
      link: "/products/fruits/dragon-fruit",
    },
    {
      image: require("../images/png/exlusive-product/strawberry.png"),
      name: "Strawberry",
      link: "/products/fruits/strawberry",
    },
    {
      image: require("../images/png/exlusive-product/kiwi.png"),
      name: "kiwi",
      link: "/products/fruits/kiwi",
    },
    {
      image: require("../images/png/exlusive-product/lychee.png"),
      name: "lychee",
      link: "/products/fruits/lychee",
    },
    {
      image: require("../images/png/exlusive-product/passionfruit.png"),
      name: "passion fruit",
      link: "/products/fruits/passion-fruit",
    },
  ];
  const services = [
    {
      image: require("../images/png/service/crown.png"),
      description:
        "We source our products by checking pre-defined quality criteria’s",
    },
    {
      image: require("../images/png/service/truck.png"),
      description:
        "We believe in commitment, so our all shipments deliver on time.",
    },
    {
      image: require("../images/png/service/headphone.png"),
      description:
        "We believe in client satisfaction and we are fulfilling that by providing 24*7 support.",
    },
    {
      image: require("../images/png/service/stars.png"),
      description: "We have certified professional teams with high work ethics",
    },
    {
      image: require("../images/png/service/handes.png"),
      description:
        "We believe in quality which helps us to build long term relationships.",
    },
    {
      image: require("../images/png/service/doller.png"),
      description:
        "We deliver quality products within client budget and expectations.",
    },
  ];
  const testimonial = [
    {
      image: require("../images/png/testimonial/testi1.png"),
      description: `Exceptional quality and variety! Gold Sparrow offers a delightful range of fruit, vegetable, coffee, and tea powders.`,
    },
    {
      image: require("../images/png/testimonial/testi2.png"),
      description: `Gold Sparrow impresses with top-notch fruit, vegetable, coffee, and tea powders, combining exceptional quality.`,
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
        <Slider {...bannerSetting}>
          <div>
            <img src={bannerImg1} alt="banner" className="w-full" />
          </div>
          <div>
            <img src={bannerImg2} alt="banner" className="w-full" />
          </div>
          <div>
            <img src={bannerImg3} alt="banner" className="w-full" />
          </div>
          <div>
            <img src={bannerImg4} alt="banner" className="w-full" />
          </div>
        </Slider>
        {/* <img src={bannerImg} alt="banner" className="w-full" /> */}
      </div>
      <div className="my-10 sm:my-14 md:my-20">
        <div className="relative font-rubik flex justify-center">
          <div className="uppercase tracking-wider text-[#5252521A] font-[700] text-2xl sm:text-4xl md:text-6xl">
            exclusive product
          </div>
          <div className="absolute my-1 md:my-3 w-full flex justify-center top-0 capitalize tracking-normal md:tracking-widest font-[700] text-xl sm:text-2xl md:text-4xl">
            exclusive product
          </div>
        </div>
        <div className="flex justify-center font-rubik text-center text-[#626262] mt-6 text-md md:text-lg md:mt-4">
          <p className="w-2/4 2xl:w-full">
            Unleash the essence of exceptional taste with our exclusive range of
            export-grade food powders, a symphony of quality and flavor for
            global palates.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:mx-10 justify-items-center">
        {products.map((item, ind) => (
          <div
            key={ind}
            className="cursor-pointer"
            onClick={() => {
              navigate(item.link);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img className="w-28 md:w-36" src={item.image} alt={item.name} />
            <p className="flex font-rubik font-[500] justify-center my-6 uppercase md:text-xl">
              {item.name}
            </p>
          </div>
        ))}
      </div>
      <div
        id="main"
        className="md:mx-8 my-20 grid grid-row-2 grid-flow-col gap-1 "
      >
        <Link
          to="/products/vegetables"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col justify-start"
        >
          <img src={firstImg} className="w-full" alt="vegetables" />
        </Link>
        <Link
          to="/products/coffee"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col justify-end"
        >
          <img src={secondImg} className="w-full" alt="coffee" />
        </Link>
        <Link
          to="/products/vegetables"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="row-span-2 rounded-lg"
        >
          <img src={thirdImg} className="w-full" alt="vegetables" />
        </Link>
        <Link
          to="/products/tea"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col justify-start"
        >
          <img src={fourthImg} className="w-full" alt="tea" />
        </Link>
        <Link
          to="/products/fruit"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col justify-end"
        >
          <img src={fifthImg} className="w-full" alt="fruit" />
        </Link>
      </div>
      <div className="my-10 sm:my-14 md:my-20">
        <div className="capitalize font-lora italic font-[600] text-xl text-[#F1931F] flex justify-center">
          Featured Products
        </div>
        <div className="relative mt-4 flex justify-center">
          <div className="uppercase font-rubik font-[600] tracking-wider text-[#5252521A] text-2xl sm:text-4xl md:text-6xl">
            featured product
          </div>
          <div className="absolute font-rubik font-[600] my-1 md:my-3 w-full flex justify-center top-0 capitalize tracking-normal md:tracking-widest text-xl sm:text-2xl md:text-4xl">
            our products
          </div>
        </div>
        <div className="flex font-rubik font-[400] justify-center text-center w-full text-[#626262] mt-6 text-md md:text-lg md:mt-4">
          <p className="w-2/4 2xl:w-full">
            Explore a diverse collection of high-quality food powders, tailored
            for global export, delivering a perfect blend of flavor and purity
            to your doorstep
          </p>
        </div>
      </div>
      <div className="w-full justify-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 my-10 md:my-20 px-10 md:px-20">
        {ProductData.slice(0, 4).map((product, ind) => (
          <div key={ind} className="lg:max-w-48">
            <img
              src={product.cardImage}
              alt={product.name}
              onClick={() => {
                navigate(
                  `/products/${product.type}/${product.name
                    .toLowerCase()
                    .replaceAll(" ", "-")}`
                );
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="w-full lg:w-48 cursor-pointer rounded-2xl shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px]"
            />
            <div className="mt-6 justify-center flex gap-0.5">
              <StarIcon className="w-3 h-3 text-[#FF972B]" />
              <StarIcon className="w-3 h-3 text-[#FF972B]" />
              <StarIcon className="w-3 h-3 text-[#FF972B]" />
              <StarIcon className="w-3 h-3 text-[#FF972B]" />
              <StarIcon className="w-3 h-3 text-[#FF972B]" />
            </div>
            <div className="capitalize text-center text-sm text-[#626262] mt-2">
              {product.name}
            </div>
          </div>
        ))}
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{ height: "32rem", backgroundImage: `url(${homeBanner2})` }}
      >
        <div className="flex items-center justify-center md:justify-start px-2 h-full w-full">
          <div className="flex flex-col gap-5 md:gap-6 md:my-6 xl:my-24 mx-0 md:mx-10 lg:mx-16">
            <p className="text-xl font-lora italic font-[600] 2xl:text-2xl text-center md:text-left text-[#F1931F]">
              Best Price For You
            </p>
            <p className="text-4xl font-rubik font-[600] capitalize text-center md:text-left">
              Deal of the day
            </p>
            <p className="text-xl font-rubik 2xl:text-2xl w-full text-center md:text-left md:w-2/4">
              Today's exclusive deal: Elevate your kitchen with our premium
              fruits powder at an unbeatable price a daily delight for culinary
              enthusiasts and exporters alike!
            </p>
            <p className="text-xl font-lora capitalize italic 2xl:text-2xl w-full text-center md:text-left md:w-3/4 font-semibold">
              Fresh Fruits
            </p>

            <div className="flex justify-between md:justify-normal md:gap-10">
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                10<p className="capitalize">days</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                05<p className="capitalize">hours</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                02<p className="capitalize">minutes</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                40<p className="capitalize">seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 sm:my-14 md:my-20">
        <div className="capitalize font-lora font-[600] italic text-xl text-[#F1931F] flex justify-center">
          services
        </div>
        <div className="relative mt-4  flex justify-center">
          <div className="uppercase font-rubik font-[700] tracking-widest text-[#5252521A] text-3xl sm:text-4xl md:text-6xl">
            services
          </div>
          <div className="absolute font-rubik font-[700] my-1 md:my-2 w-full flex justify-center top-0 capitalize tracking-normal md:tracking-widest text-xl sm:text-2xl md:text-4xl">
            qualities we serve
          </div>
        </div>
        <div className="flex justify-center text-center w-full text-[#626262] mt-6 text-md md:text-lg md:mt-4">
          <span className="w-full md:w-2/4 capitalize font-rubik">
            Gold Sparrow International works to earn the trust of its customers
            by offering them high-quality goods at reasonable prices
          </span>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 my-16 md:grid-cols-3 xl:grid-cols-6 mx-10 md:gap-10 xl:gap-5 justify-items-center">
        {services.map((item, ind) => (
          <div key={ind}>
            <div className="flex justify-center">
              <img className="w-28 " src={item.image} alt={item.name} />
            </div>
            <p className="text-center font-rubik my-6 uppercase md:text-sm">
              {item.description}
            </p>
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
            Hear what our satisfied customers are saying – testimonials that
            speak volumes about the exceptional quality and service we provide.
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
                    alt=""
                  />
                  <div className="absolute w-36 ">
                    <img src={twostars} className="w-10" alt="" />
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
      <div
        className="w-full bg-cover bg-center md:h-[40rem]"
        style={{ backgroundImage: `url(${homeBanner3})` }}
      >
        <div className="flex flex-col py-14 gap-10 md:px-20 2xl:px-32 md:py-16 2xl:py-24">
          <div className="flex flex-col gap-5 md:gap-8">
            <div className="capitalize font-rubik text-center md:text-left text-3xl font-semibold">
              <p>natural, raw & organic </p>
              <p className="">
                protein{" "}
                <span className="font-bold text-4xl text-[#F1931F]">
                  powders
                </span>
              </p>
            </div>
            <div className="w-full text-center md:text-left">
              <p className="px-5 md:px-0 md:w-2/5 font-rubik">
                Elevate your fitness journey with our natural, raw, and organic
                protein powders – the perfect blend for a healthier you.
              </p>
            </div>
          </div>
          <div className="flex px-5 md:px-0 flex-col gap-5">
            <div className="flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#F1931F] mb-4 flex-shrink-0">
                <img src={eco} alt="eco" className="" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-lora italic font-[700] capitalize text-xl title-font mb-2">
                  Plant-based Proteins
                </h2>
                <p className="leading-relaxed font-rubik text-base md:w-2/5">
                  Fuel your vitality with our plant-based proteins, a natural
                  choice for a healthier and sustainable lifestyle.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-[#F1931F] mb-4 flex-shrink-0">
                <img src={box} alt="eco" className="h-9 w-9" />
              </div>
              <div className="flex-grow pl-6">
                <h2 className="text-gray-900 font-lora italic font-[700] capitalize text-xl title-font mb-2">
                  mixability and texture
                </h2>
                <p className="leading-relaxed font-rubik text-base md:w-2/5">
                  Experience perfection in every sip with our protein powders,
                  known for impeccable mixability and velvety-smooth texture.
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 md:px-0">
            <button
              onClick={() => {
                navigate("/products/all");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="capitalize font-rubik tracking-widest px-5 py-2 rounded-full font-semibold text-white bg-[#F1931F]"
            >
              view more
            </button>
          </div>
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
                  <img
                    src={item.image}
                    className="object-contain h-32 w-32"
                    alt=""
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Home;
