import React from "react";
import Slider from "react-slick";
import { useFetch } from "./useFetch";
import { Link } from "react-router-dom";
import { Flame, Loader } from "lucide-react";

const TrendingRecipe = ({ title, fetchUrl }) => {
  const { data, loading } = useFetch(fetchUrl);
  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
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
    <section className="mt-6 overflow-hidden">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-100 mb-4 pl-3 flex items-center">
        <Flame className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-orange-500" />
        {title}
      </h2>

      <Slider {...settings}>
        {meals.map((meal) => (
          <div key={meal.idMeal} className="px-2">
            <Link to={`/recipe/${meal.idMeal}`}>
              <div
                className="bg-gray-900 rounded-xl border border-gray-800
                shadow-md transition hover:shadow-orange-500/40
                active:scale-95 w-full"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-48 sm:h-56 object-cover rounded-t-xl"
                />

                <div className="p-4 text-center">
                  <h5 className="text-base sm:text-lg font-bold text-yellow-300">
                    {meal.strMeal}
                  </h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TrendingRecipe;
