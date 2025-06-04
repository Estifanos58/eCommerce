"use client"
import useStore from '@/store/store'
import React from 'react'


function CartDetail() {
    const {setIsCartOpen, cart, updateQuantity, removeFromCart, getTotalPrice, isCartOpen} = useStore()
    // console.log("cart", cart)
  return (
    <div>
        {
        isCartOpen &&  (
          <div>
             <div
              className="fixed inset-0 bg-white/75 bg-opacity-50 z-50"
              onClick={() => setIsCartOpen()}
            ></div>
             <div className="fixed inset-y-0 right-0 w-full md:w-96 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">Your Cart</h2>
                <button
                  className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  onClick={() => setIsCartOpen()}
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              {cart.length > 0 ? (
                <>
                  <div className="space-y-4 mb-6">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="flex border-b border-gray-200 pb-4"
                      >
                        <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-contain p-2"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {/* ${item.price.toFixed(2)} */}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center border border-gray-300 rounded-md">
                              <button
                                className="px-2 py-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                              >
                                <p>-</p>
                              </button>
                              <span className="px-2 py-1 text-gray-800">
                                {item.quantity}
                              </span>
                              <button
                                className="px-2 py-1 text-gray-500 hover:text-gray-700 cursor-pointer"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                              >
                                <p>+</p>
                              </button>
                            </div>
                            <button
                              className="text-red-500 hover:text-red-700 cursor-pointer"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between text-base font-medium text-gray-900 mb-2">
                      <p>Subtotal</p>
                      <p>${getTotalPrice().toFixed(2)}</p>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer">
                      Checkout
                    </button>
                    <div className="mt-4">
                      <button
                        className="w-full text-blue-600 hover:text-blue-800 text-center cursor-pointer"
                        onClick={() => setIsCartOpen()}
                      >
                        Continue Shopping
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
                    <i className="fas fa-shopping-cart text-gray-400 text-2xl"></i>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Your cart is empty
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Looks like you haven't added anything to your cart yet.
                  </p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-300 !rounded-button whitespace-nowrap cursor-pointer"
                    onClick={() => setIsCartOpen()}
                  >
                    Start Shopping
                  </button>
                </div>
              )}
            </div>
          </div>
          </div>
        )}

    </div>
   
  )
}

export default CartDetail