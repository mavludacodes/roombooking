import React from "react";

function RoomImage({ src }) {
  return (
    <img
      src={src}
      alt="room"
      className="w-full md:w-[290px] h-[240px] object-cover"
    />
  );
}

export default RoomImage;
