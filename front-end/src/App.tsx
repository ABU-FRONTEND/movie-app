import { Route, Routes } from "react-router-dom";
// import Search from "./Components/Search/Search";
// import Sidebar from "./Components/Sidebar/Sidebar";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";

export default function App() {
  return (
    <div className="text-white block lg:flex">
        {/* <Sidebar/>
        <Search/> */}
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}


