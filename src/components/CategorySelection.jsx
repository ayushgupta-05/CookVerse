import { Utensils } from "lucide-react";
import { Link } from "react-router-dom";

const CategorySelection = ({ filterByCategory }) => {
  const featuredCategories = [
    "Chicken","Dessert","Seafood","Vegetarian",
    "Breakfast","Pasta","Goat","Pork","Lamb",
  ];

  return (
    <section className="mb-14">
      <h2 className="text-xl sm:text-3xl font-extrabold text-gray-100 mb-6 pl-3 flex items-center">
        <Utensils className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-blue-500" />
        Quick Search by Ingredient
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-6">
        {featuredCategories.map((cat) => (
          <Link
            key={cat}
            to={`search/${cat}`}
            onClick={() => filterByCategory(cat)}
            className="bg-gray-800 py-3 px-2 sm:p-5 rounded-xl text-center text-sm sm:text-base font-semibold
            text-gray-100 border border-gray-700 transition active:scale-95
            hover:border-blue-500 hover:text-blue-400"
          >
            {cat}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySelection;
