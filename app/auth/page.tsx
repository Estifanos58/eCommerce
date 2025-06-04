"use client";
import Input from "@/components/shared/Input";
import Image from "next/image";
import React, { useState } from "react";
import shopCart from "@/public/shopping-cart.png";
import { LoginFunction, RegisterFunction } from "@/actions/serverActions";
import useStore from "@/store/store";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

function page() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const {userData, setUserData} = useStore();
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");
  const router = useRouter();

    const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    if (!isLogin) {
      if (!fullName) {
        newErrors.fullName = 'Full name is required';
      }
      
      if (!confirmPassword) {
        newErrors.confirmPassword = 'Please confirm your password';
      } else if (password !== confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match';
      }
      
      if (!acceptTerms) {
        newErrors.terms = 'You must accept the terms and conditions';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const loginToAccount = async(email: string, password: string, rememberMe: boolean) => {
    setLoading(true);
    const response = await LoginFunction(email, password);
    console.log("Response from login:", response);
    if(response.success){
        setLoading(false);
        setUserData(response.data);
        router.push("/");
    }else{
        setLoading(false);
        setAuthError(response.error);
    }
  }

  const SignUpAccount = async(email:string, password:string,fullName:string) => {
    setLoading(true);
    const response = await RegisterFunction(email, password, fullName);
    console.log("Response from signup:", response);
    if(response.success){
      setLoading(false);
      setUserData(response.data);
      router.push("/");
    }else{
      setLoading(false);
      setAuthError(response.error);
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      if(isLogin) {
        // Handle login logic here
        console.log("Login:", { email, password, rememberMe });
        if(email && password){
          loginToAccount(email, password, rememberMe);
        }

      } else {
        // Handle sign up logic here
        console.log("Sign Up:", {
          fullName,
          email,
          password,
          confirmPassword,
          acceptTerms,
        });
        if(fullName && password && email && confirmPassword && acceptTerms) {
          SignUpAccount(email, password,fullName)
        }
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md relative z-10">
        <div className="p-8">
          {/* Logo and branding */}
          <div className="flex justify-center w-full gap-2">
            {/* <Image/> */}
            <Image src={shopCart} alt="" className="w-10"/>
            <h1 className="text-3xl font-extrabold text-blue-400">GebeYa</h1>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-gray-200 mb-6 mt-5">
            <button
              className={`flex-1 py-3 font-medium text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer !rounded-button ${
                isLogin
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
            <button
              className={`flex-1 py-3 font-medium text-sm transition-colors duration-300 whitespace-nowrap cursor-pointer !rounded-button ${
                !isLogin
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (

                <Input
                value={fullName}
                setValue={setFullName}
                placeholder="Abebe Tesfaye"
                errors={errors.fullName}
                title={"Full Name"}
                setShowPassword={() => {}}
                showPassword={false}
              />
            )}

            <Input
                value={email}
                setValue={setEmail}
                placeholder="you@example.com"
                errors={errors.email}
                title={"Email Address"}
                setShowPassword={() => {}}
                showPassword={false}
              />

            <Input
                value={password}
                setValue={setPassword}
                password
                placeholder="••••••••"
                setShowPassword={setShowPassword}
                showPassword={showPassword}
                errors={errors.password}
                title={"Password"}
              />

            {!isLogin && (
              <Input
                value={confirmPassword}
                setValue={setConfirmPassword}
                password
                placeholder="••••••••"
                setShowPassword={setConfirmPassword}
                showPassword={showConfirmPassword}
                errors={errors.confirmPassword}
                title={"Confirm Password"}
              />
            )}

            {isLogin ? (
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <div className="flex items-start">
                  <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 mt-1 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    I agree to the{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-1 text-sm text-red-600">{errors.terms}</p>
                )}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-medium py-3 px-4 rounded-xl hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transform transition-all hover:scale-[1.01] active:scale-[0.98] cursor-pointer !rounded-button whitespace-nowrap"
            >
              {loading ? "Loading...":  isLogin ? "Sign In" : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer !rounded-button whitespace-nowrap"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
