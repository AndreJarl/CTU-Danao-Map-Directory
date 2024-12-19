import { useState } from "react";
import room1 from "../assets/room1.jpg";
import room2 from "../assets/room2.jpg";
import room3 from "../assets/room3.jpg";
import { FaSearchLocation } from "react-icons/fa";

function EngFloors() {
  const [floorCount, setFloorCount] = useState(1);
  const [roomNum, setRoomNum] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");


 
 
  const HandleClicked = (floorCount) => {
    setFloorCount(floorCount);
  };

  const roomNumber = (num) => {
    setRoomNum(num);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const [room] = useState([
    {
      id: 1,
      img: room1,
      name: "EN CME 101",
      description: "this is a room is en cme 101 blabla"
    },
    {
      id: 2,
      img: room2,
      name: "EN LAB 3A",
      description: "this is a room is en lab 3a blabla"
    },
    {
      id: 3,
      img: room3,
      name: "EN LAB 2",
      description: "this is a room is enlab 2 blabla"
    },
  ]);

  return (
    <>
      {/* Search Bar */}
      <div className="flex flex-col gap-1 ml-10 mt-3 fixed">
        <div className="w-[300px] bg-white rounded-xl border border-black py-2 px-3 flex items-center gap-1">
          <input
            onChange={handleSearch}
            value={searchTerm}
            className="border-none outline-none w-[300px]"
            type="search"
            placeholder="Search rooms/places"
          />
          <h1 className="text-xl">
            <FaSearchLocation />
          </h1>
        </div>
      </div>

      {/* Room Display */}
      <div className="flex justify-center items-center flex-col gap-8 mt-10">
        <div className="flex justify-center items-center gap-10">
          <div className="h-96 w-60 border-2 border-red-600 flex flex-col gap-3 items-end text-center">
            {room.map((r) => (
              <div
                key={r.id}
                className={`h-20 w-28 border-2 flex justify-center items-center text-center hover:bg-red-500 ${
                  r.name.toLowerCase().includes(searchTerm) && searchTerm ? "bg-red-500" : ""
                }`}
                onClick={() => roomNumber(r.id)}
              >
                {r.name}
              </div>
            ))}
          </div>

          {/* Schedule Display */}
          {roomNum !== null && (
            <div className="flex justify-center items-center flex-col gap-4 bg-red-600 px-10 py-3 text-white">
              <p>{`Room ${roomNum} Schedules:`}</p>
              {room[roomNum - 1].name && <p>{room[roomNum - 1].name}</p>}
              {room[roomNum - 1].img && (
                <img
                  src={room[roomNum - 1].img}
                  alt={`Room ${roomNum}`}
                  className="mt-4 w-48"
                />
              )}
               <ul>
                {room
                  .filter((r) => r.id === roomNum)
                  .map(({ id, description }) => (
                    <li key={id}>{description}</li>
                  ))}
              </ul>
            </div>
          )}
        </div>

        {/* Floor Navigation */}
        <div className="flex justify-center items-center gap-3">
          {[1, 2, 3].map((floor) => (
            <button
              key={floor}
              className={`bg-red-400 px-5 ${
                floorCount === floor ? "bg-red-400" : "bg-red-200"
              }`}
              onClick={() => HandleClicked(floor)}
            >
              {floor}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default EngFloors;
