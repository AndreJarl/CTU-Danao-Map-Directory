import { useState } from "react"

function RegiFloors(){

   const [isClicked, setIsClicked] = useState(false);
   const [floorCount, setFloorCount] = useState(1);

   const HandleClicked = (floorCount) =>{
        setFloorCount(floorCount)
   }


    return(
        <>
          <div className="flex justify-center items-center flex-row gap-8 mt-10">
              
              <div className="h-96 w-[800px] border-2 bg-yellow-400 flex justify-center items-center">
              <p className="text-3xl text-white">{`Registrar Floor ${floorCount}`}</p>
              </div>

               <div className="flex flex-col justify-center items-center gap-3">
                  <button className={`bg-yellow-200 px-8 py-4 ${floorCount === 1 ? 'bg-yellow-600': 'bg-yellow-200'}`} 
                  onClick={()=>{
                    HandleClicked(1);
                   
                  }}>1</button>
                   <button className={`bg-yellow-200 px-8 py-4 ${floorCount === 2 ? 'bg-yellow-600': 'bg-yellow-200'}`} 
                  onClick={()=>{
                    HandleClicked(2);
                  }}>2</button>
                   <button className={`bg-yellow-200 px-8 py-4 ${floorCount === 3 ? 'bg-yellow-600': 'bg-yellow-200'}`} 
                  onClick={()=>{
                    HandleClicked(3);
                  }}>3</button>
               </div>
           </div>
        </>
    )
}

export default RegiFloors