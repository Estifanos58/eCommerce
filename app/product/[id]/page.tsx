"use client";
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import useStore from '@/store/store'
import React from 'react'

function page() {
    const {selectedProduct, updateQuantity, increamentQuantity, decrementQuantity , quantity} = useStore();

  let productQuantity = quantity(selectedProduct.id);
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <Nav/>
      {/* <Navbar /> */}

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={selectedProduct.image} // Replace with actual image path
            alt="Ergonomic Office Chair"
            className="w-full max-w-md object-contain"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">{selectedProduct.title}</h2>
          <p className="text-sm text-gray-600">
            {selectedProduct.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="text-yellow-500">★★★★★</div>
            <span className="text-sm text-gray-600">{selectedProduct.rating?.count} reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold text-black">${(selectedProduct.price * 1.2).toFixed(2)}</span>
            <span className="text-gray-500 line-through">${selectedProduct.price}</span>
            <span className="text-sm bg-red-500 text-white px-2 py-1 rounded">25% OFF</span>
          </div>

          {/* Color Selection */}
          <div>
            <label className="block mb-1 font-medium">Color</label>
            <div className="flex gap-2">
              <button className="w-8 h-8 rounded border-2 border-black bg-black" />
              <button className="w-8 h-8 rounded bg-gray-300" />
              <button className="w-8 h-8 rounded bg-blue-500" />
            </div>
            <p className="text-sm mt-1 text-gray-500">Selected: Black</p>
          </div>

          {/* Size Selection */}
          <div>
            <label className="block mb-1 font-medium">Size</label>
            <div className="flex gap-2">
              {["S", "M", "L", "XL"].map((size, i) => (
                <button
                  key={i}
                  className={`px-4 py-1 rounded border ${
                    size === "M"
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <label className="block mb-1 font-medium">Quantity</label>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded border" onClick={()=> decrementQuantity(selectedProduct.id)}>-</button>
              <span>{productQuantity}</span>
              <button className="w-8 h-8 rounded border" onClick={()=> increamentQuantity(selectedProduct.id)}>+</button>
              <span className="text-sm text-gray-500">15 items available</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-indigo-600 text-white px-6 py-2 rounded">Add to Cart</button>
            <button className="bg-black text-white px-6 py-2 rounded">Buy Now</button>
          </div>

          {/* Links */}
          <div className="flex gap-4 text-sm text-indigo-600 underline">
            <button>Add to Wishlist</button>
            <button>Share</button>
          </div>

          {/* Delivery Info */}
          <div className="text-sm text-gray-600 space-y-1">
            <p>🚚 Free Delivery — Enter your postal code for delivery availability</p>
            <p>🔁 Return Policy — Free 30-day returns. See details</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer/>
      {/* <Footer /> */}
    </div>
  );
}

export default page