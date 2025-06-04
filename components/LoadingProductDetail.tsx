import React from 'react';

const LoadingProductDetail = () => {
  return (
     <div className="flex flex-col lg:flex-row gap-10 animate-pulse p-6 max-w-5xl mx-auto">
      {/* Image skeleton */}
      <div className="w-full lg:w-1/2 aspect-[3/4] bg-gray-300 rounded-xl" />

      {/* Info section skeleton */}
      <div className="flex flex-col gap-4 w-full lg:w-1/2">
        {/* Title */}
        <div className="h-6 bg-gray-300 rounded w-2/3" />
        {/* Description lines */}
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>

        {/* Price */}
        <div className="h-6 bg-gray-300 rounded w-1/3 mt-2" />

        {/* Color options */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="flex gap-2">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-8 w-8 bg-gray-300 rounded-full" />
            ))}
          </div>
        </div>

        {/* Size options */}
        <div className="flex flex-col gap-2 mt-4">
          <div className="h-4 w-24 bg-gray-200 rounded" />
          <div className="flex gap-2">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-8 w-10 bg-gray-300 rounded" />
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="h-4 w-24 bg-gray-200 rounded mt-4" />
        <div className="flex gap-2 mt-2">
          <div className="h-8 w-8 bg-gray-300 rounded" />
          <div className="h-8 w-8 bg-gray-300 rounded" />
          <div className="h-8 w-8 bg-gray-300 rounded" />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <div className="h-10 w-32 bg-gray-300 rounded" />
          <div className="h-10 w-24 bg-gray-300 rounded" />
        </div>
      </div>
    </div>
  );
};

export default LoadingProductDetail;
