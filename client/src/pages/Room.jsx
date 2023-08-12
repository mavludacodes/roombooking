import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Booking from "./Booking";
import Toast from "../components/common/Toast";
import RoomImage from "../components/common/Image";
import BackButton from "../components/common/BackButton";
import RoomDetails from "../components/room/RoomDetails";
import RoomOverview from "../components/room/RoomOverview";
import RoomFacilities from "../components/room/RoomFacilities";
import { getSingleRoom } from "../fetch/apies";

export default function Room() {
  const { id } = useParams();

  const [roomData, setRoomData] = useState();

  useEffect(() => {
    getSingleRoom(id).then((res) => {
      setRoomData(res);
    });
  }, [id]);

  const [open, setOpen] = useState(false);
  const [openToast, setOpenToast] = useState(false);

  return (
    <>
      <div className="ml-3 md:ml-16 lg:ml-32   mt-16">
        <BackButton />
      </div>
      <div className="bg-white flex flex-col mx-3 md:mx-16 lg:mx-32 p-4 mt-2 gap-8  mb-16">
        <div className="flex flex-col sm:flex-row gap-6 ">
          <div>
            {roomData && (
              <div>
                <RoomImage
                  src={`${process.env.PUBLIC_URL}/assets/images/${roomData.image}`}
                />
              </div>
            )}
          </div>
          <div className="flex flex-col gap-y-3  sm:justify-between">
            <RoomDetails roomData={roomData} />
            <div className="">
              <button
                onClick={() => setOpen(true)}
                className=" bg-black   py-1 px-8 text-white text-base   font-semibold"
              >
                Reserve
              </button>
            </div>
          </div>
        </div>
        <RoomOverview />
        <RoomFacilities />
      </div>

      {/* Modal */}
      {open && (
        <Booking roomId={id} setOpen={setOpen} setOpenToast={setOpenToast} />
      )}
      {openToast && <Toast setOpenToast={setOpenToast} />}
    </>
  );
}
