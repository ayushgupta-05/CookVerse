import React, { useState } from "react";
import { Search, Soup, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    handleSearch(input.trim());
    navigate(`/search/${input}`);
    setInput("");
    setShowMobileSearch(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-gray-950/90 backdrop-blur border-b border-blue-900">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center text-xl font-black">
            <Soup className="w-6 h-6 mr-2 text-yellow-400" />
            <span className="text-blue-400">Cook</span>Verse
          </Link>

          {/* DESKTOP SEARCH */}
          <form
            onSubmit={searchHandler}
            className="hidden sm:flex flex-1 max-w-lg mx-4"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search recipes..."
              className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-l-full text-sm"
            />
            <button className="bg-blue-600 px-4 rounded-r-full">
              <Search size={18} />
            </button>
          </form>

          {/* MOBILE SEARCH ICON */}
          <button
            onClick={() => setShowMobileSearch(true)}
            className="sm:hidden text-gray-200"
          >
            <Search />
          </button>
        </div>

        {/* MOBILE SEARCH BAR */}
        {showMobileSearch && (
          <form
            onSubmit={searchHandler}
            className="sm:hidden flex items-center gap-2 pb-3"
          >
            <input
              autoFocus
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Search recipes..."
              className="flex-1 px-4 py-2 bg-gray-900 border border-gray-700 rounded-full text-sm"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-full">
              <Search size={18} />
            </button>
            <button
              type="button"
              onClick={() => setShowMobileSearch(false)}
              className="text-gray-400"
            >
              <X />
            </button>
          </form>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
