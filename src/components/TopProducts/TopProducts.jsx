import React from "react";
import Img1 from "../../assets/topProduct/8fc2048f12aadf248d1752ea86d5f797-removebg-preview.png";
import Img2 from "../../assets/topProduct/1ac5effd660a713c1ad47faf22227217-removebg-preview.png";
import Img3 from "../../assets/topProduct/7efffde3cbdb1fe2e86037af27a40e0c-removebg-preview.png";
import { IoStar } from "react-icons/io5";
const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur quo, sequi quod dicta cupiditate ducimus voluptatum corporis porro adipisci.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur quo, sequi quod dicta cupiditate ducimus voluptatum corporis porro adipisci.",
  },
  {
    id: 3,
    img: Img3,
    title: "Woman Shirt",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum aspernatur quo, sequi quod dicta cupiditate ducimus voluptatum corporis porro adipisci.",
  },
];
function TopProducts({ handleOrderPopup }) {
  return (
    <div>
      <div className="container">
        {/* Header Section  */}
        <div className="text-left mb-24 ">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for You
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-3xl font-bold"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="600"
            className="text-xs text-gray-400"
          >
            Explore our top-selling products with the best offers and discounts.
          </p>
        </div>
        {/* Body Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center mt-24">
          {ProductsData.map((data) => (
            <div
              key={data.id}
              data-aos="zoom-in"
              className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px] transition-all duration-300"
            >
              {/* image section  */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[150px] block mx-auto transform -translate-y-20 group-hover:scale-110 duration-300 ease-in-out drop-shadow-md"
                />
              </div>
              {/* details section  */}
              <div className="p-5 text-center">
                {/* start rating  */}
                <div className="w-full flex items-center justify-center gap-1">
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                  <IoStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold dark:text-white">
                  {data.title}
                </h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-white/60">
                  {data.description}
                </p>
                <button
                  onClick={() => handleOrderPopup()}
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary dark:group-hover:bg-white dark:group-hover:text-primary "
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopProducts;
