import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
export default function App() {
  return (
    <div className="text-white block lg:flex">
        
        <Routes>
            <Route path="/home" element={<Layout/>} />
            <Route path="/" element={<Navigate to={'/login'}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}


