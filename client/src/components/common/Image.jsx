import React from "react";

function RoomImage({ src }) {
  return (
    <img src={src} className="w-full md:w-[290px] h-[240px] object-cover"></img>
  );
}

export default RoomImage;
