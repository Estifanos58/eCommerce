import { Features } from '@/utils/data'
import React from 'react'

function Feature() {
  return (
    <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                Features.map((feature)=> (
                    <div className="relative rounded-xl overflow-hidden h-64 group cursor-pointer">
                    <img
                        src={feature.image}
                        alt={feature.name}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-white text-xl font-bold mb-2">
                        {feature.name}
                        </h3>
                        <p className="text-white/80 mb-3">
                        {feature.description}
                        </p>
                        <button className="bg-white text-gray-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors hover:bg-gray-100 w-fit !rounded-button whitespace-nowrap cursor-pointer">
                        Shop Now
                        </button>
                    </div>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default Feature