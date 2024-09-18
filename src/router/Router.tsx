import { Navigate, Route, Routes } from "react-router-dom";
import TV from "../pages/TV/TV";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Movies from "../pages/Movies/Movies";
import NotFound from "../pages/NotFound/NotFound";
import Bookmarked from '../pages/Bookmarked/Bookmarked'
import Register from "../pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ROUTE_PATH from "../utils/enums/router-path";
import Layout from "../Layout/Layout";
const Router = () => {
  return (
    <Routes>
    <Route
         path="/"
          element={<PrivateRoute>
            <Layout/>
        </PrivateRoute>}>
        <Route path={'/'} element={<Navigate to={'/home'}/>}/>
        <Route index path={ROUTE_PATH.HOME} element={<Home/>} />
        <Route path={ROUTE_PATH.MOVIES} element={<Movies/>}/>
        <Route path={ROUTE_PATH.TV} element={<TV/>}/>
        <Route path={ROUTE_PATH.BOOKMARKED} element={<Bookmarked/>}/>
    </Route>
    
    <Route path="/" element={<Navigate to={'/login'}/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="*" element={<NotFound/>}/>
</Routes>
  )
}

export default Router
