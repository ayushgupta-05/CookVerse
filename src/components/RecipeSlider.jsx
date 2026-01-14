import React from "react";
import Slider from "react-slick";

import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";

import { HandPlatter, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
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
        <HandPlatter className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-500" />
        {title}
      </h2>

      <div className="w-full sm:w-[90%] mx-auto px-2 sm:px-0">
        <Slider {...settings}>
          {meals.map((meal) => (
            <div key={meal.idMeal} className="px-2 sm:px-6 flex justify-center">
              <RecipeCard meal={meal} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default RecipeSlider;
