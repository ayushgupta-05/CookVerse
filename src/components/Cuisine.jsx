import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Cuisine = ({ filterByArea }) => {
  const featuredAreas = [
    "American","British","Canadian","Chinese",
    "Indian","Italian","Mexican","Russian","Thai",
  ];

  return (
    <div className="bg-gray-900/90 border-b border-gray-800">
      <div className="max-w-8xl mx-auto px-3 overflow-x-auto scrollbar-hide">
        <div className="flex items-center space-x-3 py-3">
          <span className="flex items-center text-yellow-400 font-bold whitespace-nowrap">
            <Globe className="w-4 h-4 mr-2" />
            Cuisines
          </span>

          {featuredAreas.map((area) => (
            <Link
              key={area}
              to={`search/${area}`}
              onClick={() => filterByArea(area)}
              className="px-4 py-1.5 text-sm bg-gray-800 rounded-full text-gray-200
              hover:bg-blue-600 transition whitespace-nowrap active:scale-95"
            >
              {area}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
