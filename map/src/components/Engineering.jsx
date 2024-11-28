import {Link} from "react-router-dom"

function Engineering(){
    return(
        <>
          <Link to="/engfloors"><div className="h-72 w-28 border-2 border-red-600 flex justify-center items-center hover:bg-red-600 group">
               <p className="rotate-90 text-red-600 text-3xl group-hover:text-white">Engineering</p>
               </div>
         </Link>     
        </>
    )
}

export default Engineering