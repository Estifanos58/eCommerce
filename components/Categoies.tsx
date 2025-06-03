"use client";
import React, { useState } from "react";
import {categories} from '@/utils/data'



function Categoies() {
   interface Category {
    id:number,
    name: string,
    link: string
  }
  
  const [selectedCategory, setSelectedCategory] = useState<Category>(categories[0]);

  return (
    <div>
      {/* Categories */}
      <div>
        <h1 className="text-2xl text-bold mb-3">Categoies</h1>
        <div className="flex gap-3">
          {categories.map((item) => (
            <div
              className={`${
                selectedCategory
                  ? selectedCategory?.id === item.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300"
                  : item.id === 1
                  ? "bg-blue-600"
                  : "bg-gray-300"
              } p-2 rounded-2xl text-sm md:text-1xl cursor-pointer`}
              key={item.id}
              onClick={() => setSelectedCategory(item)}
            >
              {item.name}
            </div>
          ))}
        </div>
        {/* Products */}
        <div className="my-6">
            <h1 className="text-2xl">{selectedCategory? selectedCategory.name: "All Products"}</h1>
            <div>
              {/* Products */}
              
            </div>
        </div>
      </div>
    </div>
  );
}

export default Categoies;
