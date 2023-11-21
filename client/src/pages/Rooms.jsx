import React from "react";
import { useNavigate } from "react-router-dom";
import RoomImage from "../components/common/Image";

function Rooms({ rooms }) {
  const navigate = useNavigate();
  const navigateBtn = (e, id) => {
    e.preventDefault();
    navigate(`/rooms/${id}`);
  };
  return (
    <>
      <div className="mt-40 md:mt-28 mb-28 flex justify-center gap-4 flex-col">
        {rooms &&
          rooms.map((el, index) => (
            <div
              key={index}
              className="bg-white h-54 flex flex-col gap-3 sm:flex-row mx-4 lg:mx-32 p-4"
            >
              <div>
                <RoomImage src={`/assets/images/${el.image}`} />
              </div>
              <div className=" sm:w-4/6 flex flex-col justify-between gap-3  ">
                <div>
                  <p className="font-bold">Name: {el.name}</p>
                  <p className="text-sm">Type: {el.type} </p>
                  <p className="text-sm">Capacity: {el.capacity}</p>
                  <p className="text-sm mt-3 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    aliquam quibusdam ducimus nulla consectetur nihil, sunt
                    dolorum quisquam dolore, reprehenderit laborum omnis, unde
                    similique vitae quis id quas amet? Facere?
                  </p>
                </div>
                <div>
                  <button
                    onClick={(e) => navigateBtn(e, el.id)}
                    className=" bg-black   py-1 px-8 text-white text-base   font-semibold"
                  >
                    More
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default Rooms;
