import React, { useState } from "react";
import Input from "../components/common/Input";
import Rooms from "./Rooms";

export default function Home() {
  const [searchInput, setSearchInput] = useState("");
  const [typeInput, setTypeInput] = useState("");
  const [capacityInput, setCapacityInput] = useState("");
  const [filters, setFilters] = useState();

  return (
    <>
      <div className="relative h-96  bg-cyan-500 ">
        <div className="absolute left-[3%] right-[3%] md:left-[2%] lg:left-[10%] lg:right-[10%] bottom-[140px] md:bottom-[80px]">
          <p className="text-4xl  md:text-5xl font-bold text-white ">
            Find your next stay
          </p>
          <p className="text-xl md:text-2xl  text-white mt-2">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
        <div className="absolute bottom-[-140px] md:bottom-[-25px] grid md:grid-cols-4 bg-cyan-800 gap-1 p-1 left-[2%] right-[2%] lg:left-[10%] lg:right-[10%]">
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

          <button
            className="bg-black py-3 text-white text-lg font-medium text-center"
            onClick={(e) =>
              setFilters({
                searchInput,
                typeInput,
                capacityInput,
              })
            }
          >
            Search
          </button>
        </div>
      </div>

      <Rooms {...filters} />
    </>
  );
}
