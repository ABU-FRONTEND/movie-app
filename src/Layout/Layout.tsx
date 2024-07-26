import Search from "../Components/Search/Search";
import Sidebar from "../Components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
export default function Layout() {
  return (
    <div className="block lg:flex w-full gap-5">
        <Sidebar/>
        <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-0">
        <Search/>
        <Outlet/>
        </div>
    </div>
  )
}
