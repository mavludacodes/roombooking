import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import Input from "../components/common/Input";

import { postRoomBooking, getBookedRooms } from "../fetch/apies";

function Booking({ roomId, setOpen }) {
  const [bookedDays, setBookedDays] = useState();
  useEffect(() => {
    getBookedRooms(roomId).then((res) => {
      console.log(res, "kk");
      let disabledDates = res?.map((el) => ({
        startDate: el.day,
        endDate: el.day,
      }));
      console.log(disabledDates, "jjj");
      setBookedDays(disabledDates);
    });
  }, []);

  const currentMonth = new Date().getMonth();
  const nextMonth = currentMonth + 1;
  console.log(nextMonth);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  const [nameInput, setNameInput] = useState();
  const reserveBtn = (e) => {
    e.preventDefault();
    const data = {
      day: value.startDate,
    };

    postRoomBooking(roomId, data).then((el) => console.log(el));
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className=" fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto ">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="h-[600px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full flex flex-col gap-6 mt-3 text-center sm:ml-4 sm:mr-4 sm:mt-0 sm:text-left">
                  <Input
                    label={"Name:"}
                    type={"text"}
                    placeholder={"Your name"}
                    value={nameInput}
                    handleChange={setNameInput}
                  />
                  <label>
                    Date:
                    <Datepicker
                      asSingle={true}
                      placeholder={"YYYY-MM-DD"}
                      minDate={new Date()}
                      maxDate={new Date().setMonth(nextMonth)}
                      useRange={false}
                      value={value}
                      onChange={handleValueChange}
                      popoverDirection="down"
                      disabledDates={bookedDays}
                    />
                  </label>
                  <div className=" py-3 sm:flex sm:flex-row-reverse ">
                    <button
                      onClick={(e) => reserveBtn(e)}
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Reserve
                    </button>
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
