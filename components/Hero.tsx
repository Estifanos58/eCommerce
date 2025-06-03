import React from 'react'

function Hero() {
  return (
    <div className="relative rounded-xl mt-10 overflow-hidden mb-10">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-transparent z-10"></div>
          <div className="absolute inset-0">
            <img
              src="https://readdy.ai/api/search-image?query=Luxurious%20modern%20fashion%20retail%20display%20with%20elegant%20summer%20clothing%20and%20accessories%2C%20dramatic%20lighting%20with%20soft%20shadows%2C%20premium%20lifestyle%20photography%20on%20clean%20minimalist%20background%20with%20subtle%20texture%2C%20high-end%20commercial%20atmosphere&width=1440&height=600&seq=5&orientation=landscape"
              alt="Summer Collection"
              className="w-full h-full object-fit object-center"
            />
          </div>
          <div className="relative z-20 container mx-auto">
            <div className="flex flex-col md:flex-row items-center lg:min-h-[600px]">
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center text-white">
                <span className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  New Collection 2025
                </span>
                <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight">
                  በ ገበያ ይሸምቱ
                  <br />
                  <span className="text-blue-300">Premium Style</span>
                </h1>
                <p className="text-lg text-blue-50 max-w-lg">
                  Experience luxury fashion with our exclusive summer
                  collection. Limited time offer with up to 40% off on selected
                  items.
                </p>
                <div className="flex mt-5 flex-wrap gap-4">
                  <button className="bg-white text-blue-900 hover:bg-blue-50 md:font-medium md:py-3 md:px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 !rounded-button whitespace-nowrap cursor-pointer flex items-center">
                    Shop Collection
                  </button>
                  <button className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-medium py-3 px-8 rounded-lg transition duration-300 ease-in-out !rounded-button whitespace-nowrap cursor-pointer">
                    Learn More
                  </button>
                </div>
                <div className="flex items-center mt-12 space-x-8">
                  <div className="flex items-center">
                    <i className="fas fa-truck text-blue-300 text-2xl mr-3"></i>
                    <div>
                      <p className="font-medium">Free Shipping</p>
                      <p className="text-sm text-blue-200">
                        On orders over $50
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-undo text-blue-300 text-2xl mr-3"></i>
                    <div>
                      <p className="font-medium">Easy Returns</p>
                      <p className="text-sm text-blue-200">30-day returns</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  )
}

export default Hero