import { footerLinks, socialLinks } from '@/utils/data'
import React from 'react'

function Footer() {
  const date = new Date().getFullYear(); 
  return (
    <div>
        <footer className="bg-white border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center mb-6">
                  <i className="fas fa-shopping-bag text-2xl text-blue-600 mr-2"></i>
                  <span className="text-2xl font-bold text-gray-900">
                    GebeYa
                  </span>
                </div>
                <p className="text-gray-600 mb-8 max-w-md">
                  Experience the future of shopping with ShopEase. We're
                  committed to providing you with the best products and shopping
                  experience.
                </p>
                <div className="flex items-center gap-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="w-10 h-10 bg-gray-50 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer"
                        aria-label={link.name}
                      >
                        <i className={link.icon}></i>
                      </a>
                    ))}
                  </div>

              </div>
             <div className='flex w-[600px] justify-between'>
              {footerLinks.map((section) => (
                <div key={section.title}>
                  <h3 className="text-gray-900 font-semibold mb-4">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
             </div>
            </div>
          </div>
          <div className="border-t border-gray-100 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span>© {date} GebeYa.</span>
                <span className="hidden md:inline">|</span>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Privacy Policy
                </a>
                <span className="hidden md:inline">|</span>
                <a
                  href="#"
                  className="hover:text-blue-600 transition-colors cursor-pointer"
                >
                  Terms
                </a>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-gray-400"></i>
                  <span className="text-sm text-gray-600">Secure Payment</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fab fa-cc-visa text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"></i>
                  <i className="fab fa-cc-mastercard text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"></i>
                  <i className="fab fa-cc-amex text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"></i>
                  <i className="fab fa-cc-paypal text-2xl text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer