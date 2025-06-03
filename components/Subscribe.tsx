import React from 'react'

function Subscribe() {
  return (
     <div className="bg-blue-50 rounded-xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-600 mb-6">
            Stay updated with our latest products and exclusive offers.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
            type="email"
            placeholder="Your email address"
            className="flex-grow py-3 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
            Subscribe
            </button>
        </div>
        </div>
    </div>
  )
}

export default Subscribe