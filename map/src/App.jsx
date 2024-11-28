import "./index.css"
import Home from "./Home"
import {Route, Routes} from "react-router-dom"
import EducFloors from "./routes/EducFloors"
import EngFloors from "./routes/EngFloors"
import RegiFloors from "./routes/RegiFloors"
function App() {
     return(
         <Routes>
           <Route path="/" element={<Home/>} />
           <Route path="/educfloors" element={<EducFloors/>} />
           <Route path="/engfloors" element={<EngFloors/>} />
           <Route path="/regifloors" element={<RegiFloors/>} />
         </Routes>

     )
}

export default App
