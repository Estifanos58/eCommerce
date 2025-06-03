import React, { useState } from "react";
import { sortOptions } from "@/utils/data";

function SortOrder(
  { isSortDropdownOpen, setIsSortDropdownOpen, setSortOption}:
  {
    isSortDropdownOpen: boolean,
    setIsSortDropdownOpen: any,
    setSortOption: any,
  }
) {
  return (
    <div className="relative ml-2">
      <button
        className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg text-sm font-medium flex items-center whitespace-nowrap cursor-pointer"
        onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
      >
        <span>Sort by</span>
        {
          isSortDropdownOpen ? 
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          :
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        }
        
      </button>
      {isSortDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            {sortOptions.map((option: any) => (
              <button
                key={option.id}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                onClick={() => {
                  setSortOption(option.value);
                  setIsSortDropdownOpen(false);
                }}
              >
                {option.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SortOrder;
