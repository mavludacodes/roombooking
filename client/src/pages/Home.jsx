import React, { useState, useEffect } from "react";
import Rooms from "./Rooms";
import { getAllRooms, getFilteredRooms } from "../fetch/apies";
import Input from "../components/common/Input";

export default function Home() {
  const [rooms, setRooms] = useState();
  const [searchInput, setSearchInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [capacityInput, setCapacityInput] = useState("");

  useEffect(() => {
    getAllRooms().then((res) => {
      setRooms(res.results);
    });
  }, []);

  const searchBtn = (e) => {
    getFilteredRooms(searchInput, typeInput, capacityInput).then((res) => {
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
          <Input
            type={"text"}
            placeholder={"Search all rooms..."}
            value={searchInput}
            handleChange={setSearchInput}
          />
          <Input
            type={"text"}
            placeholder={"Room type..."}
            value={typeInput}
            handleChange={setTypeInput}
          />
          <Input
            type={"number"}
            placeholder={"Capacity..."}
            value={capacityInput}
            handleChange={setCapacityInput}
          />

          <div>
            <button
              className="bg-black py-3 px-20 text-white text-lg font-medium "
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
