import React, { useRef } from "react";
import bannerContact from "../images/png/contact/contact-banner.jpg";
import mapContact from "../images/png/contact/map.jpg";
import {
  ChevronRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { IconPhoneCall } from "@tabler/icons-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_CONTACT_TEMPLATE_ID,
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
    <div className="space-y-20 mb-28">
      <div>
        <img className="w-full" src={bannerContact} alt="banner" />
      </div>
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
            Wherever you are, we're there for you – delivering quality and
            convenience wherever you need us.
          </div>
        </div>
        <div className="lg:px-8">
          <img src={mapContact} alt="map" />
        </div>
        <div className="flex flex-wrap lg:flex-nowrap gap-6">
          <div className="w-full">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="name"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="phone_number"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Your Phone"
                minLength={10}
                maxLength={10}
                required
              />
              <input
                type="text"
                name="subject"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-full p-5"
                placeholder="Subject"
                required
              />
              <textarea
                type="text"
                name="message"
                className="appearance-none w-full focus:outline-none border border-[#D9D9D9] text-[#626262] rounded-3xl p-5 col-span-1 sm:col-span-2 min-h-32"
                placeholder="Write Message Here"
                required
              />
              <button
                type="submit"
                className="bg-[#F1931F] rounded-full items-center text-white p-2 px-4 font-mono font-bold tracking-widest mt-8 w-fit"
              >
                Contact Us
              </button>
            </form>
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
              Feel free to contact us whenever you need assistance or have
              questions. Our dedicated customer support team is ready to provide
              detailed information, address your concerns, and ensure that your
              experience with us is seamless. Your satisfaction is our utmost
              priority, and we are committed to helping you every step of the
              way.
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
              Goldsparrowgloballlp@gmail.com
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
              +91 93277 04700
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
              420 , Times Trade Center, opp polaris, parvat patiya to vesu canal
              rd, surat - 395010
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
