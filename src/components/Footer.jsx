import React, { useRef } from "react";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import emailjs from "emailjs-com";

const socialMedia = [
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/goldsparrowglobal/",
  },
  {
    icon: IconBrandFacebookFilled,
    href: "https://www.facebook.com/profile.php?id=61556896196768",
  },
  { icon: IconMailFilled, href: "mailto:support@goldsparrow.co" },
  { icon: IconBrandTwitterFilled, href: "https://twitter.com/GoldSparrowInt" },
  {
    icon: IconBrandYoutubeFilled,
    href: "https://www.youtube.com/channel/UCOIrqndAGiz16Bf74Is1WEw",
  },
  {
    icon: IconBrandLinkedin,
    href: "https://www.linkedin.com/company/96009040",
  },
];
const Footer = () => {
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
    <div className="bg-[url('/public/footer-image.png')] bg-cover bg-center w-full pb-8 pt-10 px-4 sm:px-10 lg:px-20 ">
      <div className="border-b border-white ">
        <div className="lg:flex justify-betweeen gap-40 my-8">
          <div className="w-full lg:w-1/2">
            <h2 className="capitalize font-semibold text-white text-lg">
              why people like us
            </h2>
            <div className="capitalize my-6 text-white w-5/5 text-justify">
             Gold Sparrow Global Is A Leading Export Company In Surat,
              Gujarat, India With The Objective Of Owning The Tag Of An Ideal
              Supplying Company Of Fruits, Vegetables, Tea And Coffee On A
              Global Platform.
            </div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <div className="relative">
                <label className="sr-only" htmlFor="email">
                  {" "}
                  Email{" "}
                </label>

                <input
                  className="w-full text-white rounded-full border-gray-200 bg-[#1B1B1B] p-3  text-sm font-medium"
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="john@doe.com"
                />

                <button className="absolute end-1 top-1/2 right-0 -translate-y-1/2 rounded-full bg-[#F1931F] px-5 py-3 text-sm font-medium text-white transition ">
                  Subscribe Now
                </button>
              </div>
            </form>
          </div>
          <div className="w-full mt-5 gap-5 grid grid-cols-1 place-content-between sm:grid-cols-2 lg:mt-0 md:flex">
            <div className="w-full md:w-1/4">
              <h2 className="capitalize font-semibold text-white text-lg">
                information
              </h2>
              <ul className="mt-2 md:mt-6 md:space-y-5">
                <li>
                  <a className="capitalize transition text-white" href="/">
                    home
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    about us
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    blog
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    contact
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    products
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="w-full md:w-1/2">
              <h2 className="capitalize font-semibold text-white text-lg">
                our policies
              </h2>
              <ul className="mt-2 md:mt-6 md:space-y-5">
                <li>
                  <a
                    className="capitalize transition text-white"
                    href="/privacy-policy"
                  >
                    private policy
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize transition text-white"
                    href="/refund-and-returns-policy"
                  >
                    Refund and Returns Policy
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="w-full md:w-2/3">
              <h2 className="capitalize font-semibold text-white text-lg">
                contact us
              </h2>
              <ul className="my-2 md:mt-6 md:space-y-4">
                <li>
                  <a
                    className="capitalize transition text-white text-justify"
                    href="https://www.google.com/maps/search/420+,+Times+Trade+Center,+Opp+Polaris,+Canal+Rd,+Surat+-+395010/@21.1970786,72.8724897,17z/data=!3m1!4b1?entry=ttu"
                    target="_blank"
                  >
                    <span className="capitalize text-lg font-semibold">
                      address :
                    </span>{" "}
                    <br></br>
                    420 , Times Trade Center, opp polaris, canal rd, surat -
                    395010
                  </a>
                </li>
                <li>
                  <a
                    className="text-white"
                    href="mailto:support@goldsparrow.co"
                  >
                    <span className="capitalize text-lg font-semibold">
                      email :
                    </span>{" "}
                    <br></br>
                    goldsparrowgloballlp@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="capitalize transition text-white"
                    href="tel:+919327704700"
                  >
                    <span className="capitalize text-lg font-semibold">
                      phone :
                    </span>{" "}
                    <br></br>
                    +91 93277 04700
                  </a>
                </li>
              </ul>
              <div className=" flex lg:justify-start w-full gap-2 items-start ">
                {socialMedia.map((icon, ind) => (
                  <a
                    key={ind}
                    href={icon.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="bg-white p-1 rounded-full">
                      <icon.icon className="h-6 w-6" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-center md:justify-between">
        <div className="font-rubik text-white">
          Copyright 2024 © Gold Sparrow
        </div>
        <div className="flex gap-3">
          <a
            className="text-[#F1931F] text-right border-r-2 pr-3 font-semibold capitalize"
            href="/privacy-policy"
          >
            Privacy Policy
          </a>
          <a
            className="text-white font-semibold pr-3 capitalize"
            href="/refund-and-returns-policy"
          >
            Refund and Return Policy
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
