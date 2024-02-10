import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { ProductData } from "../data/product";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProductBanner from "../images/png/products/product-banner.jpg";
import bannerAll from "../images/png/Products_All.png";
import bannerVegetables from "../images/png/Products_Vegetables.png";
import bannerFruits from "../images/png/Products_Fruits.png";
import bannerTea from "../images/png/Products_Tea.png";
import bannerCoffee from "../images/png/Products_Coffee.png";

const Products = () => {
  const navigate = useNavigate();
  const { tab } = useParams();
  const [search, setSearch] = useState("");
  const filteredProducts = ProductData.filter(
    (v) =>
      (v.type.includes(tab) || tab === "all") &&
      v.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="space-y-20 mb-20">
      <div className="relative">
        {tab === "all" ? (
          <img className="w-full" src={bannerAll} alt="banner" />
        ) : tab === "vegetables" ? (
          <img className="w-full" src={bannerVegetables} alt="banner" />
        ) : tab === "fruits" ? (
          <img className="w-full" src={bannerFruits} alt="banner" />
        ) : tab === "tea" ? (
          <img className="w-full" src={bannerTea} alt="banner" />
        ) : (
          <img className="w-full" src={bannerCoffee} alt="banner" />
        )}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white bg-black/60 gap-4 text-2xl md:text-4xl lg:text-5xl font-bold capitalize">
          <span>Home</span>
          <span>{">"}</span>
            <span className="text-[#F1931F]">{tab === "all" ? "products" : tab}</span>
        </div>
      </div>
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
                tab === "all"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
            >
              All
            </Link>
            <Link
              to="/products/vegetables"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                tab === "vegetables"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
            >
              Vegetables
            </Link>
            <Link
              to="/products/fruits"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                tab === "fruits"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
            >
              Fruit
            </Link>
            <Link
              to="/products/tea"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                tab === "tea"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
            >
              Tea
            </Link>
            <Link
              to="/products/coffee"
              className={`px-4 font-lora font-[600] cursor-pointer font-serif italic ${
                tab === "coffee"
                  ? "rounded-full text-white bg-[#F1931F]"
                  : "text-[#F1931F]"
              }`}
            >
              Coffee
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {filteredProducts.length ? (
            filteredProducts.map((product, ind) => {
              // if (tab === "all" && ind > 7) return null;
              return (
                <div key={ind} className="md:max-w-48">
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
                    className="text-smflex justify-center font-lora italic text-[#626262] mt-4 text-center w-full rounded-xl border border-[#D9D9D9] p-2 cursor-pointer"
                  >
                    Quick View
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 w-full text-[#626262] text-center font-lora font-bold italic text-2xl">
              <br></br>
              <br></br>
              Coming Soon...
              <br></br>
              <br></br>
            </div>
          )}
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
              Today's exclusive deal: Elevate your kitchen with our premium
              fruits at an unbeatable price – a daily delight for culinary
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
                15<p className="capitalize">hours</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                20<p className="capitalize">minutes</p>
              </div>
              <div className="text-center font-lora italic font-[600] text-xl md:text-xl 2xl:text-4xl">
                15<p className="capitalize">seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
