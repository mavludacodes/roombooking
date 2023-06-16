import React from "react";

import Img from "../images/1.jpg";
import Img2 from "../images/2.jpg";

function Rooms() {
  return (
    <>
      <div className="mt-28 mb-28 flex justify-center gap-4 flex-col ">
        <div className="bg-white h-54 flex mx-32 p-4  ">
          <div className="w-[310px] ">
            <div>
              <img src={Img} className=" w-[290px] object-contain"></img>
            </div>
          </div>
          <div className=" w-4/6 flex flex-col justify-between  ">
            <div className="">
              <p className="font-bold">Name: Express24</p>
              <p className="text-sm">Type: focus </p>
              <p className="text-sm">Capacity: 5</p>
              <p className="text-sm mt-3 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aliquam quibusdam ducimus nulla consectetur nihil, sunt dolorum
                quisquam dolore, reprehenderit laborum omnis, unde similique
                vitae quis id quas amet? Facere?
              </p>
            </div>
            <div className="">
              <button className=" bg-black   py-1 px-8 text-white text-base   font-semibold">
                More
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white h-54 flex mx-32 p-4  ">
          <div className="w-[310px] ">
            <div>
              <img src={Img2} className=" w-[290px] object-contain"></img>
            </div>
          </div>
          <div className=" w-4/6 flex flex-col justify-between  ">
            <div className="">
              <p className="font-bold">Name: Express24</p>
              <p className="text-sm">Type: focus </p>
              <p className="text-sm">Capacity: 5</p>
              <p className="text-sm mt-3 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                aliquam quibusdam ducimus nulla consectetur nihil, sunt dolorum
                quisquam dolore, reprehenderit laborum omnis, unde similique
                vitae quis id quas amet? Facere?
              </p>
            </div>
            <div className="">
              <button className=" bg-black   py-1 px-8 text-white text-base   font-semibold">
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
