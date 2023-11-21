import React, { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import RoomInput from "../components/room/RoomInput";
import LoaderBtn from "../components/common/LoaderBtn";
import { postRoomBooking, getBookedRooms } from "../fetch/apies";

function Booking({ roomId, setOpen, setOpenToast }) {
  const [bookedDays, setBookedDays] = useState();
  const [disableBtn, setDisabledBtn] = useState(false);
  const [validateInput, setValidateInput] = useState(false);
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const [nameInput, setNameInput] = useState("");

  useEffect(() => {
    getBookedRooms(roomId).then((res) => {
      let disabledDates = res?.map((el) => ({
        startDate: el.day,
        endDate: el.day,
      }));
      setBookedDays(disabledDates);
    });
  }, [roomId]);

  const currentMonth = new Date().getMonth();
  const nextMonth = currentMonth + 1;

  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  const reserveBtn = (e) => {
    e.preventDefault();
    if (nameInput === "" || value.startDate === null) {
      setValidateInput(true);
    } else {
      setDisabledBtn(true);
      const data = {
        day: value.startDate,
      };

      postRoomBooking(roomId, data).then((el) => console.log(el));
      setTimeout(() => {
        setDisabledBtn(false);
        setOpen(false);
      }, 1000);

      setTimeout(() => {
        setOpenToast(true);
      }, 2000);

      setTimeout(() => {
        setOpenToast(false);
      }, 5000);
    }
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
        <div className="flex  min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="w-full flex flex-col gap-6  mt-3  sm:ml-4 sm:mr-4 sm:mt-0 text-left font-light">
                  <div>
                    <RoomInput
                      label={"Name:"}
                      placeholder={"Your name"}
                      value={nameInput}
                      handleChange={setNameInput}
                    />
                    {validateInput && nameInput === "" && (
                      <p className="text-xs text-rose-400 pl-1 font-semibold">
                        Please, fill out this field.
                      </p>
                    )}
                  </div>
                  <label>
                    <p className="mb-1">Date:</p>
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
                    {validateInput && value.startDate === null && (
                      <p className="text-xs text-rose-400 pl-1 font-semibold">
                        Please, fill out this field.
                      </p>
                    )}
                  </label>
                  <div className=" py-3 sm:flex sm:flex-row-reverse ">
                    {disableBtn ? (
                      <LoaderBtn />
                    ) : (
                      <button
                        onClick={(e) => reserveBtn(e)}
                        type="button"
                        className="inline-flex w-full justify-center  bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm sm:ml-3 sm:w-auto"
                      >
                        Reserve
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="mt-3 inline-flex w-full justify-center bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
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
