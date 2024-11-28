import {Link} from "react-router-dom"

function Education(){
    return(
        <>
            <Link to="/educfloors"> <div className="h-72 w-28 border-2 border-blue-700 flex justify-center items-center hover:bg-blue-700 group">
                  <p className="-rotate-90 text-blue-700 text-3xl group-hover:text-white">Education</p>
                 </div>
            </Link>
        </>
    )
}

export default Education