import React from "react";
import Img from "../../assets/products/7dd82d6b14dfe3bb8c9e25a27dcabd05.jpg";

const BannerImg = {
  backgroundImage: `url(${Img})`,
  backgroundPosition: "top",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  hight: "100%",
};
function Subscribe() {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white bg-gradient-to-r from-[#CCA824] to-[#F8D873]"
      data-aos="zoom-in"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            type="text"
            data-aos="fade-up"
            placeholder="Enter Your Email"
            className="w-full p-3 outline-none text-gray-600"
          />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
