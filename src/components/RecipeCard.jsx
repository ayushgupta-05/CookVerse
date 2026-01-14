import { Link } from "react-router-dom";

const RecipeCard = ({ meal }) => (
  <Link to={`/recipe/${meal.idMeal}`}>
    <div className="bg-gray-900 rounded-xl border border-gray-800 shadow-md
      transition hover:shadow-blue-500/40 active:scale-95">

      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full h-40 sm:h-52 object-cover rounded-t-xl"
      />

      <div className="p-3 text-center">
        <h3 className="text-sm sm:text-base font-bold text-gray-100">
          {meal.strMeal}
        </h3>
      </div>
    </div>
  </Link>
);

export default RecipeCard;
