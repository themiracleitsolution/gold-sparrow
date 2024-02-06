import React, { useState } from "react";
import Slider from "react-slick";
import bannerContact from "../images/png/contact/contact-banner.jpg";
import mapContact from "../images/png/contact/map.jpg";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { IconPhoneCall } from "@tabler/icons-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Contact = () => {
  const [bannerInd, setBannerInd] = useState(0);
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
  return (
    <div className="space-y-20 mb-28">
      <Slider {...bannerSetting}>
        <div>
          <img src={bannerContact} alt="banner w-full" />
        </div>
        <div>
          <img src={bannerContact} alt="banner w-full" />
        </div>
        <div>
          <img src={bannerContact} alt="banner w-full" />
        </div>
      </Slider>
      <div className="px-10 lg:px-20 space-y-6">
        <div className="my-10  sm:my-14 md:my-20">
          <div className="capitalize font-lora italic text-xl text-[#F1931F] font-[600] flex justify-center">
            Our Branches
          </div>
          <div className="relative mt-4  flex justify-center">
            <div className="w-full font-rubik flex justify-center capitalize tracking-normal md:tracking-widest font-bold text-xl sm:text-2xl md:text-4xl">
              We Are Everywhere
            </div>
          </div>
          <div className="flex font-rubik justify-center text-center w-full text-[#626262] mt-6 text-md md:text-lg md:mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
          </div>
        </div>
        <div className="lg:px-8">
          <img src={mapContact} alt="map" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Name"
              />
              <input
                type="text"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Email"
              />
              <input
                type="text"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Phone"
              />
              <input
                type="text"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Subject"
              />
              <textarea
                type="text"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-3xl p-5 col-span-1 sm:col-span-2 min-h-32"
                placeholder="Write Message Here"
              />
            </div>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="capitalize font-lora italic text-xl text-[#F1931F] font-[600]">
              get in touch
            </div>
            <div className="relative mt-4">
              <div className="w-full font-rubik capitalize tracking-normal md:tracking-widest font-bold text-xl sm:text-2xl md:text-4xl">
                you can contact us when you need any help
              </div>
            </div>
            <div className="w-full font-rubik text-[#626262] mt-6 text-sm md:text-md md:mt-4">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the, when unknown printer took a galley of type and
              scrambled it to make a type specimen book
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col items-center gap-8 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] px-6 mt-20 relative pb-8">
            <div className="rounded-full p-4 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mt-10 bg-white">
              <EnvelopeIcon className="w-10 h-10 text-black" />
            </div>
            <div className="text-[#F1931F] font-lora font-[600] italic text-xl">
              ∘∘∘ Email ∘∘∘
            </div>
            <div className="text-[#626262] font-rubik text-center">
              abcd@gamil.com
            </div>
            <div className="absolute bottom-0 text-[#626262] rounded-full p-1 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mb-3 bg-white">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] px-6 mt-20 relative pb-8">
            <div className="rounded-full p-4 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mt-10 bg-white">
              <IconPhoneCall className="w-10 h-10 text-black" />
            </div>
            <div className="text-[#F1931F] font-lora font-[600] text-xl">
              ∘∘∘ Call ∘∘∘
            </div>
            <div className="text-[#626262] font-rubik text-center">
              (+85) 12345 67890
            </div>
            <div className="absolute bottom-0 text-[#626262] rounded-full p-1 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mb-3 bg-white">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] px-6 mt-20 relative pb-8">
            <div className="rounded-full p-4 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mt-10 bg-white">
              <MapPinIcon className="w-10 h-10 text-black" />
            </div>
            <div className="text-[#F1931F] font-lora font-[600] text-xl">
              ∘∘∘ Visit Us ∘∘∘
            </div>
            <div className="text-[#626262] font-rubik text-center">
              123, Brooklyn Rode 500 New York
            </div>
            <div className="absolute bottom-0 text-[#626262] rounded-full p-1 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mb-3 bg-white">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </div>
          <div className="flex flex-col items-center gap-8 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] px-6 mt-20 relative pb-8">
            <div className="rounded-full p-4 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mt-10 bg-white">
              <UserIcon className="w-10 h-10 text-black" />
            </div>
            <div className="text-[#F1931F] font-lora font-[600] text-xl">
              ∘∘∘ Get To Know ∘∘∘
            </div>
            <div className="text-[#626262] font-rubik text-center">
              Gold Sparrow Global
            </div>
            <div className="absolute bottom-0 text-[#626262] rounded-full p-1 shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px] -mb-3 bg-white">
              <ChevronRightIcon className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
