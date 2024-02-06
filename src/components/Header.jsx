import React, { useState } from "react";
import logoPng from "../images/png/logo.png";
// import searchPng from "../images/png/search.png";
// import settingPng from "../images/png/setting.png";
// import shopBagPng from "../images/png/shop-bag.png";
// import facebookSvg from "../images/svg/facebook.svg";
// import mailSvg from "../images/svg/mail.svg";
// import linkedinSvg from "../images/svg/linkedin.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconBrandYoutubeFilled,
  IconCaretDownFilled,
  IconMailFilled,
} from "@tabler/icons-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const [openProduct, setOpenProduct] = useState(false);
  const pathname = useLocation().pathname;
  return (
    <div>
      {/* <div className="bg-white p-5  flex justify-center items-center gap-4 lg:px-20">
        <div className="w-full flex gap-4">
          <div
            onClick={() => setSidebar(!sidebar)}
            className="lg:hidden bg-[#F1931F] rounded-full p-1 flex justify-center items-center shadow-md shadow-gray-400"
          >
            <Bars3Icon className="w-8 h-8 text-white" />
          </div>
          <div className="bg-[#F1931F] rounded-full p-1 w-10 h-10 flex justify-center items-center shadow-md shadow-gray-400">
            <img src={searchPng} alt="search" />
          </div>
        </div>
        <div className="h-full py-1 w-full flex justify-center">
          <img src={logoPng} alt="logo" className="w-24" />
        </div>
        <div className="flex gap-4 w-full justify-end">
          <div className="bg-[#F1931F] rounded-full p-1 w-10 h-10 flex justify-center items-center shadow-md shadow-gray-400">
            <img src={settingPng} alt="search" />
          </div>
          <div className="bg-[#F1931F] rounded-full p-1 w-10 h-10 flex justify-center items-center shadow-md shadow-gray-400">
            <img src={shopBagPng} alt="search" />
          </div>
        </div>
      </div> */}
      <div className="lg:flex bg-[#FFCF9F] p-4 w-full gap-2 justify-between items-center lg:px-20">
        <div className="flex justify-between items-center lg:block">
          <div className="h-full py-1">
            <a href="/">
              <img src={logoPng} alt="logo" className="w-24" />
            </a>
          </div>
          <div className="">
            <div
              onClick={() => setSidebar(!sidebar)}
              className="lg:hidden cursor-pointer bg-[#F1931F] rounded-full p-1 flex justify-center items-center shadow-md shadow-gray-400"
            >
              <Bars3Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-3 lg:gap-6 font-bold text-sm text-[#363635]">
          <Link
            to="/"
            className={`flex gap-1 items-center ${
              pathname === "/" && "text-[#F1931F]"
            }`}
          >
            HOME
          </Link>
          <div className="group">
            <Link
              to="/products/all"
              className={`flex gap-1 items-center ${
                pathname.includes("products") && "text-[#F1931F]"
              }`}
            >
              PRODUCTS <IconCaretDownFilled />
            </Link>
            <div className="invisible absolute z-50 flex w-fit flex-col bg-white py-1 shadow-xl group-hover:visible">
              <Link
                to="/products/vegetables"
                className="py-2 block my-1 font-semibold text-[#F1931F] hover:text-white hover:bg-[#F1931F] md:px-4"
              >
                VEGETABLES
              </Link>
              <Link
                to="/products/tea"
                className="py-2 block my-1 font-semibold text-[#F1931F] hover:text-white hover:bg-[#F1931F] md:px-4"
              >
                TEA
              </Link>
              <Link
                to="/products/fruits"
                className="py-2 block my-1 font-semibold text-[#F1931F] hover:text-white hover:bg-[#F1931F] md:px-4"
              >
                Fruit
              </Link>
              <Link
                to="/products/coffee"
                className="py-2 block my-1 font-semibold text-[#F1931F] hover:text-white hover:bg-[#F1931F] md:px-4"
              >
                COFFEE
              </Link>
            </div>
          </div>
          <Link
            to="/about-us"
            className={`flex gap-1 items-center ${
              pathname.includes("about-us") && "text-[#F1931F]"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            className={`flex gap-1 items-center ${
              pathname.includes("contact") && "text-[#F1931F]"
            }`}
          >
            CONTACT US
          </Link>
          {/* <Link
            to="/blog"
            className={`flex gap-1 items-center ${
              pathname.includes("blog") && "text-[#F1931F]"
            }`}
          >
            BLOG <IconCaretDownFilled />
          </Link> */}
        </div>
        <div className="hidden lg:flex gap-2">
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.instagram.com/goldsparrowinternational/"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandInstagram className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.facebook.com/goldsparrowinternational"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandFacebookFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="mailto:support@goldsparrow.co"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconMailFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://twitter.com/GoldSparrowInt"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandTwitterFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.youtube.com/channel/UCOIrqndAGiz16Bf74Is1WEw"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandYoutubeFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.linkedin.com/company/96009040"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] rounded-full p-1 flex justify-center items-center">
              <IconBrandLinkedin className="text-white w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
      <div
        className={`lg:hidden bg-[#FFCF9F] fixed z-50 h-screen w-screen transition-all duration-700 top-0 p-4 flex flex-col justify-between ${
          sidebar ? "left-0" : "-left-full"
        } font-bold text-sm text-[#363635]`}
      >
        <div className="flex flex-col gap-4">
          <div className="flex justify-end gap-4">
            <XMarkIcon
              className="text-white cursor-pointer text-lg w-10 h-10"
              onClick={() => setSidebar(!sidebar)}
            />
          </div>
          <Link
            to="/"
            onClick={() => setSidebar(false)}
            className={`flex gap-1 items-center ${
              pathname === "/" && "text-[#F1931F]"
            }`}
          >
            HOME
          </Link>
          <div className="flex justify-between items-center">
            <Link
              to="/products/all"
              onClick={() => setSidebar(false)}
              className={`flex gap-1 items-center ${
                pathname.includes("products") && "text-[#F1931F]"
              }`}
            >
              PRODUCTS
            </Link>
            <IconCaretDownFilled
              className={`${openProduct && "rotate-180"}`}
              onClick={() => setOpenProduct(!openProduct)}
            />
          </div>
          {openProduct && (
            <>
              <Link
                to="/products/vegetables"
                onClick={() => setSidebar(false)}
                className={`ml-4 flex gap-1 items-center ${
                  pathname.includes("/products/vegetables") && "text-[#F1931F]"
                }`}
              >
                VEGETABLES
              </Link>
              <Link
                to="/products/fruits"
                onClick={() => setSidebar(false)}
                className={`ml-4 flex gap-1 items-center ${
                  pathname.includes("/products/fruits") && "text-[#F1931F]"
                }`}
              >
                FRUITS
              </Link>
              <Link
                to="/products/tea"
                onClick={() => setSidebar(false)}
                className={`ml-4 flex gap-1 items-center ${
                  pathname.includes("/products/tea") && "text-[#F1931F]"
                }`}
              >
                TEA
              </Link>
              <Link
                to="/products/coffee"
                onClick={() => setSidebar(false)}
                className={`ml-4 flex gap-1 items-center ${
                  pathname.includes("/products/coffee") && "text-[#F1931F]"
                }`}
              >
                COFFEE
              </Link>
            </>
          )}
          <Link
            to="/about-us"
            onClick={() => setSidebar(false)}
            className={`flex gap-1 items-center ${
              pathname.includes("about-us") && "text-[#F1931F]"
            }`}
          >
            ABOUT US
          </Link>
          <Link
            to="/contact"
            onClick={() => setSidebar(false)}
            className={`flex gap-1 items-center ${
              pathname.includes("contact") && "text-[#F1931F]"
            }`}
          >
            CONTACT
          </Link>
          {/* <Link
            to="/blog"
            onClick={() => setSidebar(false)}
            className={`flex gap-1 items-center ${
              pathname.includes("blog") && "text-[#F1931F]"
            }`}
          >
            BLOG <IconCaretDownFilled />
          </Link> */}
        </div>
        <div className="flex gap-2 justify-center">
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.instagram.com/goldsparrowinternational/"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandInstagram className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.facebook.com/goldsparrowinternational"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandFacebookFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="mailto:support@goldsparrow.co"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconMailFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://twitter.com/GoldSparrowInt"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandTwitterFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.youtube.com/channel/UCOIrqndAGiz16Bf74Is1WEw"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] p-1 rounded-full">
              <IconBrandYoutubeFilled className="text-white w-6 h-6" />
            </div>
          </a>
          <a
            className="cursor-pointer"
            target="_blank"
            href="https://www.linkedin.com/company/96009040"
            rel="noreferrer"
          >
            <div className="bg-[#F1931F] rounded-full p-1 flex justify-center items-center">
              <IconBrandLinkedin className="text-white w-6 h-6" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
