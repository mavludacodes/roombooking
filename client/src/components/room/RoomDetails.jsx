import React from "react";

function RoomDetails({ roomData }) {
  return (
    <div>
      <p className="font-bold">Name: {roomData && roomData.name}</p>
      <p className="text-sm">Type: {roomData && roomData.type} </p>
      <p className="text-sm">Capacity: {roomData && roomData.capacity}</p>
      <p className="text-sm">Location: Mirzo Ulugbek district, Tashkent</p>
    </div>
  );
}

export default RoomDetails;
