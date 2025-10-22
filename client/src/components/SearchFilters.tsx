import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchFilters = () => {
  return (
    <div className="h-[64px] flex items-center justify-between border border-gray-300 rounded-full shadow-sm hover:shadow-md transition cursor-pointer bg-white">
      {/* Desktop Filters */}
      <div className="hidden lg:flex items-center">
        {/* Where */}
        <div className="w-[250px] h-[64px] px-6 flex flex-col justify-center rounded-full hover:bg-gray-100">
          <p className="text-xs font-semibold">Where</p>
          <p className="text-sm text-gray-500">Wanted location</p>
        </div>

        {/* Check In */}
        <div className="h-[64px] px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 border-l border-gray-200">
          <p className="text-xs font-semibold">Check in</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>

        {/* Check Out */}
        <div className="h-[64px] px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 border-l border-gray-200">
          <p className="text-xs font-semibold">Check out</p>
          <p className="text-sm text-gray-500">Add dates</p>
        </div>

        {/* Who */}
        <div className="h-[64px] px-6 flex flex-col justify-center rounded-full hover:bg-gray-100 border-l border-gray-200">
          <p className="text-xs font-semibold">Who</p>
          <p className="text-sm text-gray-500">Add guests</p>
        </div>
      </div>

      {/* Search Button */}
      <div className="p-2 flex items-center justify-center">
        <button className="p-3 bg-airbnb text-white rounded-full hover:bg-airbnb-dark transition cursor-pointer">
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchFilters;
