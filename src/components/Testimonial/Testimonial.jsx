import React from "react";
import Slider from "react-slick";
const TestimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellendus explicabo quibusdam fugit sequi deserunt eaque quam praesentium eos accusamus!",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Ahmed",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellendus explicabo quibusdam fugit sequi deserunt eaque quam praesentium eos accusamus!",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Leo",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellendus explicabo quibusdam fugit sequi deserunt eaque quam praesentium eos accusamus!",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 4,
    name: "Sail",
    text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur repellendus explicabo quibusdam fugit sequi deserunt eaque quam praesentium eos accusamus!",
    img: "https://picsum.photos/104/104",
  },
];
function Testimonial() {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What are customers are saying
          </p>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl font-bold dark:text-white"
          >
            Testimonials
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-xs text-gray-400"
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, minima?
          </p>
        </div>
        {/* Testimonial cards  */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/20 relative"
                >
                  <div>
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20 mb-4"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4 ">
                    <p className="text-xs text-gray-500">{data.text}</p>
                    <h1 className="text-xl font-bold text-black/80 dark:text-light">
                      {data.name}
                    </h1>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
