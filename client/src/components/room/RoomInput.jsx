import React from "react";

function RoomInput({ label, placeholder, value, handleChange }) {
  return (
    <div>
      <label>{label}</label>
      <input
        type="text"
        className="mt-1 relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed focus:border-blue-500 focus:ring-blue-500/20"
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}

export default RoomInput;
