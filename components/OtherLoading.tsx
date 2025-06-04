import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow p-4 animate-pulse">
      <div className="bg-gray-300 rounded-xl h-60 w-full mb-4" />
      <div className="flex items-center gap-2 mb-2">
        <div className="h-4 w-24 bg-gray-200 rounded" />
        <div className="h-4 w-8 bg-gray-200 rounded" />
      </div>
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-200 rounded w-2/3 mb-4" />
      <div className="flex items-center justify-between">
        <div>
          <div className="h-3 w-12 bg-gray-300 rounded mb-1" />
          <div className="h-4 w-16 bg-gray-400 rounded" />
        </div>
        <div className="h-10 w-28 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

const ProductGridSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
      {[...Array(4)].map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
};

export default ProductGridSkeleton;
