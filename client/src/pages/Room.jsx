import React from "react";

// import Img from "../images/1.jpg";
// import Img2 from "../images/2.jpg";

export default function Room() {
  return (
    <>
      <div className="ml-32  mt-16">
        <button className="flex gap-1 items-center font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
            />
          </svg>
          Back
        </button>
      </div>
      <div className="bg-white h-[450px] flex flex-col mx-32 p-4 mt-2 gap-8 ">
        <div className="flex">
          <div className="w-[310px] ">
            <div>
              <img src={"#"} className=" w-[290px] object-contain"></img>
            </div>
          </div>
          <div className=" w-4/6 flex flex-col justify-between  ">
            <div className="">
              <p className="font-bold">Name: Express24</p>
              <p className="text-sm">Type: focus </p>
              <p className="text-sm">Capacity: 5</p>
              <p className="text-sm">
                Location: Mirzo Ulugbek district, Tashkent
              </p>
            </div>
            <div className="">
              <button className=" bg-black   py-1 px-8 text-white text-base   font-semibold">
                Reserve
              </button>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-2">Overview</p>
          <hr />
          <p className="text-sm font-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium ipsum labore sint assumenda cum, porro ratione accusamus
            voluptatem magni tempore. Similique quod amet incidunt.
            Reprehenderit dolorem iste optio rem. Dolores. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ex consectetur enim
            exercitationem libero sunt, nobis dolore consequuntur odio,
            consequatur neque sapiente aliquam accusantium maxime odit modi
            placeat illo ratione necessitatibus? Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt, mollitia omnis! Odio quaerat
            veritatis rem consectetur voluptates deserunt natus facere?
            Cupiditate delectus doloribus, ipsum animi velit natus quidem ad
            perferendis.
          </p>
          <p className="font-bold my-2 ">Most popular facilities</p>

          <div className="flex gap-6">
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>
              Free WiFi
            </div>

            <div className="flex gap-2">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
              >
                <path
                  d="M8 16V14M8 14V9V6.5H11L13 8.5L11.5 10.5H8V14ZM19 10.5C19 15.4706 14.9706 19.5 10 19.5C5.02944 19.5 1 15.4706 1 10.5C1 5.52944 5.02944 1.5 10 1.5C14.9706 1.5 19 5.52944 19 10.5Z"
                  stroke="#0F172A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>{" "}
              Free parking
            </div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                />
              </svg>
              Good Breakfast
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
