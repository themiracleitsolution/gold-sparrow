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
    href: "https://www.instagram.com/goldsparrowinternational/",
  },
  {
    icon: IconBrandFacebookFilled,
    href: "https://www.facebook.com/goldsparrowinternational",
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
    <div className="bg-[url('/public/footer-image.png')] bg-cover bg-center w-full pb-8 pt-10 ">
      <div className="border-b border-white ">
        <div className="mx-10 lg:flex gap-10 my-8">
          <div className="w-full lg:w-1/2">
            <h2 className="capitalize font-semibold text-white text-lg">
              why people like us
            </h2>
            <div className="capitalize my-6 text-white w-3/4 ">
              Gold Sparrow International is a leading export company founded by
              Mr. Hardik Dhankecha in Surat, Gujarat, India with the objective
              of owning the tag of an ideal supplying company on a global
              platform.
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
          <div className="w-full mt-5 sm:grid sm:grid-cols-2 lg:mt-0 md:flex">
            <div className="w-full md:w-1/2">
              <h2 className="capitalize font-semibold text-white text-lg">
                information
              </h2>
              <ul className="mt-3 md:mt-6 md:space-y-5">
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
            <div className="w-full md:w-1/2">
              <h2 className="capitalize font-semibold text-white text-lg">
                our policies
              </h2>
              <ul className="mt-3 md:mt-6 md:space-y-5">
                <li>
                  <a className="capitalize transition text-white" href="/">
                    private policy
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    Refund and Returns Policy
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    Payments & Returns
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="capitalize font-semibold text-white text-lg">
                contact us
              </h2>
              <ul className="my-3 md:mt-6 md:space-y-4">
                <li>
                  <a className="capitalize transition text-white" href="/">
                    <span className="capitalize text-lg font-semibold">
                      address :-
                    </span>{" "}
                    420 , Times Trade Center, opp polaris, parvat patiya to vesu
                    canal rd, surat - 395010
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    <span className="capitalize text-lg font-semibold">
                      email :-
                    </span>{" "}
                    Goldsparrowgloballlp@gmail.com
                  </a>
                </li>
                <li>
                  <a className="capitalize transition text-white" href="/">
                    <span className="capitalize text-lg font-semibold">
                      phone :-
                    </span>{" "}
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

      <div className="mt-8 mx-10 flex justify-center md:justify-between">
        <div className="font-rubik text-white">
          Copyright 2024 © Gold Sparrow
        </div>
        <div className="flex gap-3">
          <p className="text-[#F1931F]  border-r-2 pr-3 font-semibold capitalize">
            privacy policy
          </p>
          <p className="text-white font-semibold border-r-2 pr-3 capitalize">
            terms of use
          </p>
          <p className="text-white font-semibold capitalize">
            sales and refuds
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
