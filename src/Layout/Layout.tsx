import Search from "../Components/Search/Search";
import Sidebar from "../Components/Sidebar/Sidebar";
import Trending from "../Components/Trending/Trending";

export default function Layout() {
  return (
    <div className="flex w-full gap-5">
        <Sidebar/>
        <div>
        <Search/>
        <Trending/>
        </div>
    </div>
  )
}
