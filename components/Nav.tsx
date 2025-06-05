"use client";
import Image from "next/image";
import React, { useState } from "react";
import SortOrder from "./shared/SortOrder";
import profile from "../public/profile.png"
import cart from "../public/cart.png"
import search from "../public/search.png"
import shopCart from '../public/shopping-cart.png'
import useStore from "@/store/store";
import { useRouter } from "next/navigation";

function Nav() {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);
  const { getTotalItems, setIsCartOpen, userData} = useStore();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();
  let items = getTotalItems();

  console.log("userData", userData);
  return (
    <div className="flex px-20 top-0 sticky z-99 justify-between items-center bg-white py-3">
      {/* Left */}
      <div className="flex gap-2 cursor-pointer" onClick={()=> router.push("/")}>
        {/* <Image/> */}
        <Image src={shopCart} alt="" className="w-10"/>
        <h1 className="text-3xl font-extrabold text-blue-400">GebeYa</h1>
      </div>
      {/* Middle */}
      <div className="flex justify-between items-center gap-4">
        {/* Search */}
        <div className=" border border-gray-300 hidden lg:w-[500px] lg:flex items-center px-3 rounded-lg focus:outline-none focus:ring-2 focus:border-transparent focus:ring-blue-500 ">
          <Image src={search} alt="Search" className="w-5 h-5"/>
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-10 outline-0 pr-4 border-none text-sm  "
          />
        </div>
        {/* Sort */}
        <div className="flex justify-end items-center gap-3">
          <SortOrder
            isSortDropdownOpen={isSortDropdownOpen}
            setIsSortDropdownOpen={setIsSortDropdownOpen}
          />
          
        </div>
      </div>
      {/* Right */}
      <div className="flex gap-4">
        {/* Cart */}
        <div className="relative bg-amber-50 p-2 hover:bg-amber-100 rounded-full" onClick={()=> setIsCartOpen()}>
            <Image src={cart} alt="cart" className="w-7"/>
            <div className="absolute top-0 right-0 rounded-full w-5 h-5 flex items-center justify-center bg-amber-500 text-white">
              <p className="text-sm">{items}</p>
            </div>
        </div>
       
        {/* Profile */}
         <div className="relative bg-amber-50 p-2 hover:bg-amber-100 rounded-full">
          <Image src={profile} alt="profile" className="w-8" onClick={()=>setIsProfileOpen(!isProfileOpen)}/>
            {
              isProfileOpen ? userData.email ? (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                    onClick={() => router.push("/profile")}
                  >
                    Profile
                  </button>
                </div>
              </div>
              )
              : (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <div className="py-1">
                  <button
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left cursor-pointer"
                    onClick={() => router.push("/auth")}
                  >
                    Login
                  </button>
                </div>
              </div>
              ) : null
            }
        </div>
      </div>
    </div>
  );
}

export default Nav;
