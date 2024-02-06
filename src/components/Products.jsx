import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useMemo, useState } from "react";
import { ProductData } from "../data/product";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductBanner from "../images/png/products/product-banner.jpg";
import bannerAll from "../images/png/products/product-all-banner.jpg";
import bannerVegetable from "../images/png/products/product-vegetable-banner.jpg";
import bannerFruit from "../images/png/products/product-fruit-banner.jpg";
import bannerTea from "../images/png/products/product-tea-banner.jpg";
import bannerCoffee from "../images/png/products/product-coffee-banner.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products = () => {
    const navigate = useNavigate();
const { tab } = useParams();
  const activeTab = tab;
  const [search, setSearch] = useState("");
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
  const bannerImgArr =
    activeTab === "vegetables"
      ? [bannerVegetable, bannerVegetable, bannerVegetable]
      : activeTab === "fruits"
      ? [bannerFruit, bannerFruit, bannerFruit]
      : activeTab === "tea"
      ? [bannerTea, bannerTea, bannerTea]
      : activeTab === "coffee"
      ? [bannerCoffee, bannerCoffee, bannerCoffee]
      : [bannerAll, bannerAll, bannerAll];
  const banner = useMemo(
    () => (
      <Slider {...bannerSetting}>
        {bannerImgArr.map((v, i) => (
          <div key={i}>
            <img src={bannerAll} alt="banner w-full" />
          </div>
        ))}
      </Slider>
    ),
    [activeTab]
  );
  return (
    <div className="space-y-20 mb-20">
      {banner}
      <div className="px-10 lg:px-20 space-y-14">
        <div className="flex flex-col items-center w-full gap-6">
          <div className="max-w-[600px] w-full border-b border-[#626262] flex gap-2 items-center pb-2">
            <MagnifyingGlassIcon className="w-8 h-8 text-[#626262]" />
            <input
              placeholder="Search Any Product"
              type="text"
              className="w-full appearance-none focus:outline-none text-[#626262]"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="max-w-[700px] w-full flex gap-2 items-center justify-between overflow-x-auto">
            <Link
              to="/products/all"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                activeTab === "all"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
              >
              All
            </Link>
            <Link
              to="/products/vegetables"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                activeTab === "vegetables"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
                          >
              Vegetables
            </Link>
            <Link
              to="/products/tea"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                activeTab === "tea"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
              >
              Tea
            </Link>
            <Link
              to="/products/fruits"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                activeTab === "fruits"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
                          >
              Fruit
            </Link>
            <Link
              to="/products/coffee"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                activeTab === "coffee"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
                          >
              Coffee
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {ProductData.filter(
            (v) =>
              (v.type.includes(activeTab) || activeTab === "all") &&
              v.name.toLowerCase().includes(search.toLowerCase())
          ).map((product, ind) => {
            if (activeTab === "all" && ind > 7) return null;
            return (
              <div key={ind} className="md:max-w-48">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full md:w-48 rounded-2xl shadow-[rgba(0,0,0,0.25)_0px_0px_10px_2px]"
                />
                <div className="mt-6 flex gap-0.5">
                  <StarIcon className="w-3 h-3 text-[#FF972B]" />
                  <StarIcon className="w-3 h-3 text-[#FF972B]" />
                  <StarIcon className="w-3 h-3 text-[#FF972B]" />
                  <StarIcon className="w-3 h-3 text-[#FF972B]" />
                  <StarIcon className="w-3 h-3 text-[#FF972B]" />
                </div>
                <div className="font-rubik capitalize text-sm text-[#626262] mt-2">
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
                  className="text-sm font-lora italic text-[#626262] mt-4 text-center w-full rounded-xl border border-[#D9D9D9] p-2 cursor-pointer"
                >
                  Quick View
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="w-full bg-cover bg-center"
        style={{ height: "32rem", backgroundImage: `url(${ProductBanner})` }}
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
            Today's exclusive deal: Elevate your kitchen with our premium food powder at an unbeatable price – a daily delight for culinary enthusiasts and exporters alike!
            </p>
            <p className="text-xl font-lora capitalize italic 2xl:text-2xl w-full text-center md:text-left md:w-3/4 font-semibold">
              beetroot powder
            </p>

            <div className="flex justify-between md:justify-normal md:gap-10">
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                0<p className="capitalize">days</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                0<p className="capitalize">hours</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                0<p className="capitalize">minutes</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                0<p className="capitalize">seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
