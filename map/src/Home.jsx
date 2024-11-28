import "./index.css"
import Education from "./components/Education"
import Engineering from "./components/Engineering"
import Registrar from "./components/Registrar"
function Home() {
     return(
         <>
            <div className="flex justify-center items-center mt-28 gap-2">

                        {/* Education */}

                    <Education/>

                        {/* Registrar */}

                    <Registrar/>

                        {/* Engineering    */}

                    <Engineering/>
                    
            </div>
         </>
     )
}

export default Home
