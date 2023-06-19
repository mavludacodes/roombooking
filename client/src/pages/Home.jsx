import React, { useState, useEffect } from "react";
import Rooms from "./Rooms";
import { getAllRooms, getFilteredRooms } from "../fetch/apies";

export default function Home() {
  const [rooms, setRooms] = useState();
  useEffect(() => {
    getAllRooms().then((res) => {
      setRooms(res.results);
    });
  }, []);

  const [searchInput, setSearchInput] = useState("");
  const [typeInput, setTypeInput] = useState("");

  const searchBtn = (e) => {
    getFilteredRooms(searchInput, typeInput).then((res) => {
      setRooms(res.results);
    });
  };

  return (
    <>
      <div className="relative h-96  bg-cyan-500 ">
        <div className="absolute left-[10%] bottom-[80px]">
          <p className="text-5xl font-bold text-white ">Find your next stay</p>
          <p className="text-2xl  text-white mt-2">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
        <div className="absolute bottom-[-25px] flex bg-cyan-800 gap-1 p-1 left-[10%] right-[10%]">
          <div>
            {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-500 sm:text-sm">$</span>
            </div> */}
            <input
              type="text"
              name="price"
              id="price"
              className="block w-full  border-0 py-3.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>

          <div>
            {/* <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class="text-gray-500 sm:text-sm">$</span>
            </div> */}
            <input
              type="text"
              name="type"
              className="block w-full  border-0 py-3.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="0.00"
              value={typeInput}
              onChange={(e) => setTypeInput(e.target.value)}
            />
          </div>

          <div>
            <button
              className=" bg-black   py-3 px-20 text-white text-lg font-medium "
              onClick={(e) => searchBtn(e)}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <Rooms rooms={rooms} />
    </>
  );
}
