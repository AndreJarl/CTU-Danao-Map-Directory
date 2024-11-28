import {Link} from "react-router-dom"
function Registrar(){
    return(
        <>
              <Link to="/regifloors"><div className="h-28 w-64 mt-56 border-2 border-yellow-400 flex justify-center items-center hover:bg-yellow-400 group">
                   <p className="text-3xl text-yellow-400 group-hover:text-white">Registrar</p>
                 </div>
              </Link>
        </>
    )
}

export default Registrar