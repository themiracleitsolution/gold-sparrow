import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductData } from "../data/product";
import { StarIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/24/outline";
import emailjs from "emailjs-com";
import {Helmet} from "react-helmet";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} next-arrow bg-white rounded-md shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronDoubleRightIcon className="w-5 h-5 text-[#686868]" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} prev-arrow bg-white rounded-md shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px]`}
      style={{ ...style }}
      onClick={onClick}
    >
      <ChevronDoubleLeftIcon className="w-5 h-5 text-[#686868]" />
    </div>
  );
}
const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const product = ProductData.find(
    (v) => v.name.toLowerCase().replaceAll(" ", "-") === name
  );
  const [enquiryPopUp, setEnquiryPopUp] = useState(false);
  const [bannerInd, setBannerInd] = useState(0);
  var bannerSetting = {
    dots: false,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    afterChange: (current) => setBannerInd(current),
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_PRODUCT_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          window.location.reload();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div className="px-10 lg:px-20 py-16 space-y-10 text-base sm:text-lg text-[#626262]">
      <Helmet>
  <meta charSet="utf-8" />
  <title>Fresh Fruits and Vegetables Details Exported by Gold Sparrow Global</title>
</Helmet>
        <div className="flex flex-wrap lg:flex-nowrap gap-5 w-full">
          <div className="w-full lg:pr-6">
            <img src={product.img} alt={product.name} className="w-full" />
          </div>
          <div className="w-full space-y-10">
            <div className="capitalize font-lora italic">
              Home / Products / {product.type}
            </div>
            <div>
              <div className="flex gap-0.5">
                <StarIcon className="w-3 h-3 text-[#FF972B]" />
                <StarIcon className="w-3 h-3 text-[#FF972B]" />
                <StarIcon className="w-3 h-3 text-[#FF972B]" />
                <StarIcon className="w-3 h-3 text-[#FF972B]" />
                <StarIcon className="w-3 h-3 text-[#FF972B]" />
              </div>
              <div className="capitalize font-rubik text-2xl sm:text-3xl mt-2 font-bold not-italic text-black">
                {product.name}
              </div>
            </div>
            {/* <div className=" font-lora italic text-justify">{product.content}</div> */}
            <div className=" font-lora text-justify italic">
          {product.content.map((item, ind) => (
            <p key={ind}>{item}<br></br><br></br></p>
          ))}
        </div>
            <div
              className="px-6 font-lora italic font-[600] cursor-pointer bg-black rounded-full py-2 w-fit text-white"
              onClick={() => setEnquiryPopUp(true)}
            >
              MAKE AN ENQUIRY
            </div>
          </div>
        </div>
        <div className="border-l-2 italic font-[600] font-lora border-[#F1931F] pl-4 text-2xl sm:text-3xl text-black">
          Description
        </div>
        <div className=" font-lora text-justify italic">
          {product.description.map((item, ind) => (
            <p key={ind}>{item}</p>
          ))}
        </div>
        <div className="flex flex-col items-center py-5 gap-8">
          <div className="border-l-2 font-lora italic border-[#F1931F] pl-4 text-2xl sm:text-3xl font-bold text-black">
            Related Products
          </div>
          <div className="w-full relative">
            <Slider {...bannerSetting}>
              {ProductData.filter(
                (v) => v.type.includes(product.type) && v.id !== product.id
              ).map((product, ind) => (
                <div key={ind} className="p-4">
                  <div className="flex justify-center w-full mt-4">
                    <div className="md:max-w-48">
                      <img
                        onClick={() => {
                          navigate(
                            `/products/${product.type}/${product.name
                              .toLowerCase()
                              .replaceAll(" ", "-")}`
                          );
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        src={product.cardImage}
                        alt={product.name}
                        className="w-full md:w-48 rounded-2xl shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px]"
                      />
                      <div className="mt-6 flex justify-center gap-0.5">
                        <StarIcon className="w-3 h-3 text-[#FF972B]" />
                        <StarIcon className="w-3 h-3 text-[#FF972B]" />
                        <StarIcon className="w-3 h-3 text-[#FF972B]" />
                        <StarIcon className="w-3 h-3 text-[#FF972B]" />
                        <StarIcon className="w-3 h-3 text-[#FF972B]" />
                      </div>
                      <div className="font-rubik text-center capitalize text-sm text-[#626262] mt-2">
                        {product.name}
                      </div>
                      <div
                        onClick={() => {
                          navigate(
                            `/products/${product.type}/${product.name
                              .toLowerCase()
                              .replaceAll(" ", "-")}`
                          );
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="text-sm flex justify-center font-lora italic text-[#626262] mt-4 text-center w-full rounded-xl border border-[#D9D9D9] p-2 cursor-pointer"
                      >
                        Quick View
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      {enquiryPopUp && (
        <div>
          <div
            className="fixed w-screen h-screen bg-black/25 top-0 left-0 flex items-center z-40"
            onClick={() => setEnquiryPopUp(false)}
          ></div>
          <div className="fixed flex justify-center w-screen h-screen bg-black/25 top-0 left-0 items-center z-40 pointer-events-none">
            <div className="w-full md:w-4/6 lg:w-2/4 bg-white p-10 pointer-events-auto space-y-5">
              <div className="w-full text-center">
                <div className="capitalize pr-4 text-[#F1931F] text-3xl sm:text-4xl lg:text-6xl font-rubik font-[700] space-y-2">
                  <div>{product.name}</div>
                </div>
              </div>
              <div className="relative flex justify-center">
                <div className="uppercase tracking-widest font-rubik font-[700] text-[#5252521A] text-5xl lg:text-7xl">
                  ENQUIRY
                </div>
                <div className="absolute my-1 lg:my-5 w-full flex justify-center top-0 capitalize tracking-normal md:tracking-widest font-rubik font-[700] text-3xl lg:text-5xl">
                  ENQUIRY
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-5 ">

                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="w-full flex flex-col gap-4 items-center"
                >
                  <input
                    type="text"
                    name="product_name"
                    className="sr-only"
                    value={product.name}
                  />
                  <input
                    type="text"
                    name="name"
                    className="appearance-none focus:outline-none w-full p-4 px-6 bg-[#F7F7F7] shadow-md rounded-md"
                    placeholder="*Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="appearance-none focus:outline-none w-full p-4 px-6 bg-[#F7F7F7] shadow-md rounded-md"
                    placeholder="*Email"
                    required
                  />
                  <textarea
                    type="text"
                    name="enquiry"
                    className="appearance-none focus:outline-none w-full min-h-28 p-4 px-6 bg-[#F7F7F7] shadow-md rounded-md"
                    placeholder="*Enquiry"
                    required
                  />
                  <button
                    type="submit"
                    className="bg-[#F1931F] rounded-full text-white p-2 px-4 font-mono font-bold tracking-widest mt-8 w-fit"
                  >
                    Enquiry Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
