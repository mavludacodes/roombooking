const getAllRooms = async () => {
  const req = await fetch(`${process.env.REACT_APP_BACKEND_API}/api/rooms`, {
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json; charset= UTF-8",
    },
  });
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getFilteredRooms = async (search, type, capacity) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/rooms?search=${search}&type=${type}&capacity=${capacity}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getSingleRoom = async (id) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/rooms/${id}`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const postRoomBooking = async (id, data) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/rooms/${id}/book`,
    {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
      body: JSON.stringify(data),
    }
  );
  try {
    const res = await req.json();
    return res;
  } catch (error) {
    console.log("error", error);
  }
};

const getBookedRooms = async (id) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/rooms/${id}/booked`,
    {
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset= UTF-8",
      },
    }
  );
  try {
    const res = await req.json();

    if (res.error === "topilmadi") {
      throw new TypeError("oops");
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};

export {
  getAllRooms,
  getFilteredRooms,
  getSingleRoom,
  postRoomBooking,
  getBookedRooms,
};
