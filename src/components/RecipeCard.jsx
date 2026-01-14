import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => {
  return (
    <Link to={`/recipe/${meal.idMeal}`}>
      <div className="relative bg-gray-900 rounded-xl shadow-xl overflow-hidden group transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600/50 w-[90%] sm:w-auto mx-auto">
        <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/80 transition duration-500"></div>

        <div className="flex justify-center items-center p-4">
          <img
            src={meal?.strMealThumb}
            alt={meal?.strMeal}
            className="h-44 w-44 sm:h-56 sm:w-56 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="p-2 text-center">
          <h3 className="text-base sm:text-lg lg:text-xl pb-3 font-bold text-gray-100 group-hover:text-blue-400 transition duration-300">
            {meal.strMeal}
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;
