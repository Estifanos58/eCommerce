import React from "react";

function Input({
  showPassword,
  title,
  setShowPassword,
  value,
  setValue,
  errors,
  password,
  placeholder
}: {
  showPassword?: boolean;
  title: string;
  setShowPassword: any;
  value: string;
  setValue: (value: string) => void;
  errors: string;
  password?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="mb-4">
      <label
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {title}
      </label>
      <div className="relative">
        <input
          type={!password ? "text" :showPassword ? "text" : "password"}
          className={`w-full px-4 py-3 rounded-xl border-none bg-gray-50 text-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all ${
            errors ? "bg-red-50 focus:ring-red-500" : ""
          }`}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {password && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer !rounded-button whitespace-nowrap"
            onClick={() => setShowPassword(!showPassword)}
          >
            <i
              className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            ></i>
          </button>
        )}
      </div>
      {errors && <p className="mt-1 text-sm text-red-600">{errors}</p>}
    </div>
  );
}

export default Input;
