import { Route, Routes } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Movies from "./pages/Movies/Movies";
import TV from "./pages/TV/TV";
import Bookmarked from "./pages/Bookmarked/Bookmarked";
import Private from "./route/Private";
export default function App() {
  return (
    <div className="text-white block lg:flex">
        
        <Routes>
            <Route path="/" element={<Layout/>} >
            <Route path="/" element={<Private/>}/>
                <Route path="/home" element={<Home/>} />
                <Route path="/movies" element={<Movies/>}/>
                <Route path="/tv" element={<TV/>}/>
                <Route path="/bookmarked" element={<Bookmarked/>}/>
            </Route>
            <Route path="/" element={<Navigate to={'/login'}/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    </div>
  )
}


