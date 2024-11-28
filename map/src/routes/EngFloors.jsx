import { useState } from "react";

function EngFloors(){

   const [floorCount, setFloorCount] = useState(1);
   const [roomNum, setRoomNum] = useState(null);

   const HandleClicked = (floorCount) =>{
        setFloorCount(floorCount)
   }

   const roomNumber = (num) => {
        setRoomNum(num)
   }

   const [room] = useState([
    {
      id: 1,
      schedule: {
        BSCPE: '3DAY 7:00-10:00 AM',
        BSCE: '3DAY 7:00-10:00 PM',
        BSME: '3N 7:00-10:00 PM',
      },
    },
    {
      id: 2,
      schedule: {
        BSCE: '3DAY 7:00-10:00 AM',
        BSME: '3DAY 7:00-10:00 PM',
        BSCPE: '3N 7:00-10:00 PM',
      },
    },
    {
      id: 3,
      schedule: {
        BSCPE: '3DAY 7:00-10:00 AM',
        BSME: '3DAY 7:00-10:00 PM',
        BSME2: '3N 7:00-10:00 PM', // Changed to avoid duplicate keys
      },
    },
  ]);
   
    return(
        <>
          <div className="flex justify-center items-center flex-col gap-8 mt-10">
                
            <div className="flex justify-center items-center gap-10">
                <div className="h-96 w-60 border-2 border-red-600 flex flex-col gap-3  items-end text-center">
                    <div className="h-10 w-20 border-2 border-red-300 flex justify-center items-center text-center hover:bg-red-500">stairs</div>
                    <div className="h-20 w-28 border-2 border-red-300 flex justify-center items-center text-center hover:bg-red-500" 
                    onClick={()=>{
                       roomNumber(1);
                    }}>room 1</div>
                    <div className="h-20 w-28 border-2 border-red-300 flex justify-center items-center text-center hover:bg-red-500"
                    onClick={()=>{
                        roomNumber(2);
                     }}
                    >room 2</div>
                    <div className="h-20 w-28 border-2 border-red-300 flex justify-center items-center text-center hover:bg-red-500"
                    onClick={()=>{
                        roomNumber(3);
                     }}
                    >room 3</div>
                    <div className="h-10 w-20 border-2 border-red-300 flex justify-center items-center text-center hover:bg-red-500">stairs</div>
                </div>

                <div className="flex justify-center items-center flex-col gap-4">
                     <p>{`Room ${roomNum} Schedules:`}</p>
                     {roomNum && (
              <>
                <ul>
                  {Object.entries(room[roomNum-1].schedule).map(
                    ([course, time]) => (
                      <li key={course} className="mt-1">
                        {course}: {time}
                      </li>
                    )
                  )}
                </ul>
              </>
            )}
                     <div>
                        
                     </div>
                </div>
            </div>
               <div className="flex justify-center items-center gap-3">
                        <button className={`bg-red-400 px-5 ${floorCount === 1 ? 'bg-red-400': 'bg-red-200'}`} 
                        onClick={()=>{
                            HandleClicked(1);
                        
                        }}>1</button>
                        <button className={`bg-red-400 px-5 ${floorCount === 2 ? 'bg-red-400': 'bg-red-200'}`} 
                        onClick={()=>{
                            HandleClicked(2);
                        }}>2</button>
                        <button className={`bg-red-400 px-5 ${floorCount === 3 ? 'bg-red-400': 'bg-red-200'}`} 
                        onClick={()=>{
                            HandleClicked(3);
                        }}>3</button>
               </div>
           </div>
        </>
    )
}

export default EngFloors