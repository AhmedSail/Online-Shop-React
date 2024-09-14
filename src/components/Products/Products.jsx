import React from "react";
import Img1 from "../../assets/products/woman shopping.jpg";
import Img2 from "../../assets/products/05ed3f10b3580fd309c3e0bc455fbdd8.jpg";
import Img5 from "../../assets/products/ff4a321b0c4f69c2e0caa38500362fd5.jpg";
import Img4 from "../../assets/products/7dd82d6b14dfe3bb8c9e25a27dcabd05.jpg";
import Img3 from "../../assets/products/e0e729939d542942cbe32c6cd0c5304d.jpg";
import { IoStar } from "react-icons/io5";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Woman Ethnic",
    rating: 5.0,
    color: "Purple",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Woman Western",
    rating: 4.5,
    color: "Pink",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 5.0,
    color: "White",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.0,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    rating: 3.5,
    color: "Orange",
    aosDelay: "800",
  },
];

function Products() {
  return (
    <div className="mt-10 mb-12">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for You
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl font-bold dark:text-white"
          >
            Products
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xs text-gray-400"
          >
            Explore our top-selling products with the best offers and discounts.
          </p>
        </div>
        {/* Body Section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center gap-5 ">
            {/* Card Section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3 p-3 bg-white shadow-md rounded-md dark:bg-black/80 dark:text-white"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[250px] object-cover rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-white/80">
                    {data.color}
                  </p>
                  <div className="flex items-center gap-1">
                    <IoStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View all button  */}
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md hover:bg-gradient-to-r from-primary to-secondary transition-all duration-300  ease-in-out">
              View All Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
