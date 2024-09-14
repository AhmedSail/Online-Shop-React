import React from "react";
import Logo from "../../assets/online-shopping_3081559.png";
import { GoSearch } from "react-icons/go";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from "./DarkMode";
import { IoMdArrowDropdown } from "react-icons/io";

function Navbar({ handleOrderPopup }) {
  const Menu = [
    {
      id: 1,
      name: "Home",
      link: "/#",
    },
    {
      id: 2,
      name: "Top Rated",
      link: "/#services",
    },
    {
      id: 3,
      name: "Kids Wear",
      link: "/#",
    },
    {
      id: 4,
      name: "Menus Wear",
      link: "/#",
    },
    {
      id: 5,
      name: "Electronics",
      link: "/#",
    },
  ];
  const DropDownLinks = [
    {
      id: 1,
      name: "Trending Products",
      link: "/#Trending/trendingProducts",
    },
    {
      id: 2,
      name: "Best Selling",
      link: "/#Trending/bestSelling",
    },
    {
      id: 3,
      name: "Top Rated",
      link: "/#Trending/TopRated",
    },
  ];
  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* Upper Nav */}
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <h1 className="font-bold text-2xl sm:text-3xl my-auto uppercase">
                shopsy
              </h1>
            </a>
          </div>
          {/* search bar and order button */}
          <div className="flex items-center space-x-6 ">
            <div className="flex items-center space-x-14">
              <div>
                <div className="group relative hidden sm:block ">
                  <input
                    type="text"
                    placeholder="search"
                    className="dark:bg-gray-800 dark:border-gray-500 w-[200px] sm:w-[200px] group-hover:w-[300px] ease-in-out duration-300 transition-all border rounded-full border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary"
                  />
                  <GoSearch className="text-gray-500 group-hover:text-primary absolute top-1/4 right-3 dark:text-white" />
                </div>
              </div>
              {/* order button */}
              <div>
                <button
                  onClick={() => handleOrderPopup()}
                  className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center group"
                >
                  <span className="opacity-0 w-1 transform translate-x-2 group-hover:w-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
                    Order
                  </span>
                  <FaShoppingCart className="text-xl text-white cursor-pointer" />
                </button>
              </div>
            </div>
            {/* Dark mode button */}
            <div>
              <DarkMode />
            </div>
          </div>
        </div>
      </div>
      {/* Lower Nav */}
      <div data-aos="zoom-in">
        <div className="flex justify-center">
          <ul className="sm:flex hidden items-center gap-36 py-4">
            {Menu.map((data) => (
              <li key={data.id}>
                <a
                  href={data.link}
                  className="inline-block px-4 hover:text-primary transition-all ease-in-out duration-300"
                >
                  {data.name}
                </a>
              </li>
            ))}
            {/* Simple dropdown and links */}
            <li className="group relative cursor-pointer">
              <a href="#" className="flex items-center gap-[2px] py-2">
                Trending Products
                <span>
                  <IoMdArrowDropdown className="transition-all duration-300 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute opacity-0 z-[9999999]  group-hover:opacity-100 transition-all ease-in-out duration-700 w-[200px] rounded-md bg-white p-2 text-black shadow-lg">
                <ul>
                  {DropDownLinks.map((data) => (
                    <li key={data.id}>
                      <a
                        href={data.link}
                        className="inline-block w-full rounded-md p-2 hover:bg-primary/20"
                      >
                        {data.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
