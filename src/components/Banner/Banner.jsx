import React from "react";
import Img from "../../assets/products/7dd82d6b14dfe3bb8c9e25a27dcabd05.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdLocalOffer } from "react-icons/md";

function Banner() {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container mt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* image section  */}
          <div data-aos="fade-right">
            <img
              src={Img}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover"
              style={{
                boxShadow: "-10px 10px 12px rgba(0, 0, 0, 1)",
              }}
            />
          </div>
          {/* text details section  */}
          <div className="flex flex-col justify-center gap-6">
            <h1 className="text-3xl font-bold sm:text-4xl">
              Winter Sale upto 50% off
            </h1>
            <p className="text-gray-500 text-sm tracking-wide leading-7">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea
              aliquam beatae quas eaque voluptate natus necessitatibus numquam a
              ducimus cupiditate.
            </p>
            <div className=" flex flex-col gap-4">
              <div
                className="flex justify-start items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <GrSecure className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-violet-100 dark:bg-violet-400 " />
                <p>Quality Products</p>
              </div>
              <div
                className="flex justify-start items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <IoFastFood className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-orange-100 dark:bg-orange-400 " />
                <p>Fast Delivery</p>
              </div>
              <div
                className="flex justify-start items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-green-100 dark:bg-green-400 " />
                <p>Easy Payment Method</p>
              </div>
              <div
                className="flex justify-start items-center gap-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <MdLocalOffer className="text-4xl h-12 w-12 shadow-md p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 " />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
