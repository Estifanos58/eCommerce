"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import shopCart from '../../public/shopping-cart.png';
import { useRouter } from 'next/navigation';
import useStore from '@/store/store';
import { toast } from 'react-toastify';
import { UpdateProfileFunction } from '@/actions/serverActions';

function ProfilePage() {
  const router = useRouter();
  const { userData, setUserData } = useStore();
  const [fullName, setFullName] = useState(userData.fullName || "");
  const [isLoading, setLoading] = useState(false);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!fullName.trim()) toast.error("Full Name cannot be empty");
    if(fullName.length < 3) {
      toast.error("Full Name must be at least 3 characters long");
      return;
    }
    const updatedUser = await UpdateProfileFunction(userData.email, fullName);
    if (updatedUser.error) {
      toast.error(updatedUser.error);
      return;
    }
    if (updatedUser.data) {
      setUserData({
        ...userData,
        fullName: updatedUser.data.fullName,
      });
      toast.success("Profile updated successfully");
    } else {
      toast.error("Failed to update profile. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-50  justify-center">
      <div className="h-auto w-[500px] bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
        {/* Header */}
        <div className="flex items-center gap-2 cursor-pointer mb-6" onClick={() => router.push("/")}>
          <Image src={shopCart} alt="Logo" className="w-10 h-10" />
          <h1 className="text-3xl font-extrabold text-blue-400">GebeYa</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-[400px] flex flex-col gap-4">
          <div>
            <label className="text-gray-500 text-sm">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              required
            />
          </div>

          <div>
            <label className="text-gray-500 text-sm">Email</label>
            <input
              type="email"
              value={userData.email || "No email"}
              readOnly
              className="w-full mt-1 px-3 py-2 border border-gray-100 bg-gray-100 rounded-md text-gray-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-semibold mt-4"
          >
            {isLoading ? "Loading..." : "Save Changes"}
          </button>

          <button
            type="button"
            onClick={() => router.back()}
            className="w-full border border-gray-300 text-gray-600 py-2 rounded-md font-medium mt-2 hover:bg-gray-100"
          >
            Return
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProfilePage;
