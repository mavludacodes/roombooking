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

const getFilteredRooms = async (search, type) => {
  const req = await fetch(
    `${process.env.REACT_APP_BACKEND_API}/api/rooms?search=${search}&type=${type}`,
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

export { getAllRooms, getFilteredRooms };
