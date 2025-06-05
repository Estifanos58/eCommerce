"use client";
import React, { useEffect, useState } from "react";
import {categories} from '@/utils/data'
import useStore from "@/store/store";
import { StoreType } from "@/utils/types";
import ProductCard from "./ProductCard";
import ProductLoading from "./ProductLoading";



function Categoies() {
   interface Category {
    id:number,
    name: string,
    link: string
  }
  
  const [isLoading, setLoading] = useState(true);
  const {setProducts, products, selectedCategory, setSelectedCategory, sortProductsAndUpdate, filteredProducts} = useStore();

   useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        // Extract unique categories
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // console.log("Products: ", products)
  // console.log("IsLoading", isLoading)

  return (
    <div>
      {/* Categories */}
      <div>
        <h1 className="text-2xl text-bold mb-3">Categoies</h1>
        <div className="flex gap-3 my-5">
          {categories.map((item) => (
            <div
              className={`${
                selectedCategory
                  ? selectedCategory === item.name
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300"
                  : item.id === 1
                  ? "bg-blue-600"
                  : "bg-gray-300"
              } p-2 rounded-2xl text-sm md:text-1xl cursor-pointer`}
              key={item.id}
              onClick={() => {
                setSelectedCategory(item.name)
                sortProductsAndUpdate()
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
        {/* Products */}
        <div className="my-6">
            <h1 className="text-2xl">{selectedCategory? selectedCategory: "All Products"}</h1>
            <div className="my-5">
              {/* Products */}
                {
                  isLoading ? <ProductLoading/> 
                  : products.length === 0  ?
                  <div>No Product found</div> :
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                (filteredProducts && filteredProducts.length > 0
                  ? filteredProducts
                  : products
                )?.map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))
                }
                  </div>
                 

                }
                
            </div>
        </div>
      </div>
    </div>
  );
}

export default Categoies;
