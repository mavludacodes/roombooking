import React from "react";

function Input({ type, placeholder, value, handleChange }) {
  return (
    <div className="relative">
      <input
        type={type}
        className="block w-full border-0 py-3.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {value && (
        <button
          className="absolute inset-y-0 right-0 pr-3"
          onClick={(e) => handleChange("")}
        >
          <span className="text-gray-500 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>
      )}
    </div>
  );
}

export default Input;
