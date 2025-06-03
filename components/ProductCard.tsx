import { Product } from '@/utils/types'
import Image from 'next/image'
import React from 'react'
import star from '@/public/star.png'

function ProductCard({product}: {product: Product}) {
  return (
    <div
                  key={product.id}
                  className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="aspect-square relative overflow-hidden bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="absolute inset-0 w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        // onClick={() => addToCart(product)}
                        className="bg-white/90 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 !rounded-button cursor-pointer"
                      >
                        <i className="fas fa-shopping-cart"></i>
                      </button>
                      <button className="bg-white/90 backdrop-blur-sm hover:bg-blue-600 hover:text-white text-gray-700 w-10 h-10 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 !rounded-button cursor-pointer">
                        <i className="fas fa-heart"></i>
                      </button>
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                        Quick View
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full">
                        {product.category}
                      </div>
                      <div className="flex items-center text-yellow-400 text-sm">
                        <Image src={star} alt='star'className='w-5 h-5'/>
                        <span className="text-gray-600">
                          {product.rating.rate}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-gray-800 font-medium text-lg mb-2 line-clamp-2 h-14 group-hover:text-blue-600 transition-colors duration-300">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 line-through">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                        <span className="text-xl font-bold text-gray-900">
                          ${product.price.toFixed(2)}
                        </span>
                      </div>
                      <button
                        className="bg-gray-900 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer"
                        // onClick={() => addToCart(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                </div>
  )
}

export default ProductCard