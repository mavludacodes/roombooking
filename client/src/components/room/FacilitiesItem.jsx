import React from "react";

function FacilitiesItem({ svg, title }) {
  return (
    <div className="flex gap-1 sm:gap-2">
      {" "}
      {svg}
      <p className="text-xs md:text-sm">{title}</p>
    </div>
  );
}

export default FacilitiesItem;
