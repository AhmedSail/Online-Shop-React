import React from "react";
import Image1 from "../../assets/hero/woman_shopping-removebg-preview.png";
import Image2 from "../../assets/hero/togather_shop-removebg-preview.png";
import Image3 from "../../assets/hero/sale-removebg-preview.png";
import Slider from "react-slick";
const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off all Men's wear",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, dolor. Minus vero rerum beatae amet! Nemo labore cumque, possimus aut soluta aperiam, doloremque officiis animi sit corporis quae commodi accusamus.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off all Woman's wear",
    description:
      "Who's there Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum, dolor. Minus vero rerum beatae amet! Nemo labore cumque, possimus aut soluta aperiam, doloremque officiis animi sit corporis quae commodi accusamus.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off all Product's Sale",
    description:
      "consectetur adipisicing elit. Voluptatum, dolor. Minus vero rerum beatae amet! Nemo labore cumque, possimus aut soluta aperiam, doloremque officiis animi sit corporis quae commodi accusamus.",
  },
];

function Hero({ handleOrderPopup }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-300">
      {/* background Pattern */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute rotate-45 -top-[40%] right-0 rounded-3xl -z-9"></div>
      {/* Hero Section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                  <h1
                    data-aos="zoom-out"
                    data-aos-once="true"
                    data-aos-duration="500"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold relative z-10"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => handleOrderPopup()}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-300 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2 relative ">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-125 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Hero;
