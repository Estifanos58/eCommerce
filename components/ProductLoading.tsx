import React from 'react'

function ProductLoading() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
        <div
            key={index}
            className="bg-white rounded-lg shadow-sm overflow-hidden"
        >
            <div className="aspect-square bg-gray-200 animate-pulse"></div>
            <div className="p-4">
            <div className="h-4 bg-gray-200 rounded animate-pulse mb-2"></div>
            <div className="h-4 bg-gray-200 rounded animate-pulse w-2/3"></div>
            <div className="mt-4 h-8 bg-gray-200 rounded animate-pulse"></div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default ProductLoading