import React from "react";
import Slider from "react-slick";

import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";

import { Clock, Loader } from "lucide-react";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 4 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  if (loading)
    return (
      <div className="text-center p-6 text-gray-300">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading {title}...
      </div>
    );

  return (
    <section className="mt-4">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-100 mb-4 pl-3 flex items-center">
        <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-500" />
        {title}
      </h2>

      <div className="w-full mx-auto px-2">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 flex justify-center">
              <Link to={`/recipe/${meal.idMeal}`}>
                <div className="relative bg-gray-900 rounded-xl shadow-xl overflow-hidden group transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 mb-4">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

                  <div className="flex justify-center items-center p-4">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="h-32 w-44 sm:h-[140px] sm:w-[200px] rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-2 text-center">
                    <h5 className="text-sm sm:text-base lg:text-lg pb-3 font-bold text-yellow-300 group-hover:text-blue-400 transition duration-300">
                      {meal.strMeal}
                    </h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TrendingSlider;
