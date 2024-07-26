import { useDispatch } from "react-redux"
import { setSearchValue } from "../../app/reducers/searchValue"
export default function Search() {
    const dispatch = useDispatch()
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchValue(e.target.value))
    }
    
  return (
    <div className="w-full pt-[30px]">
      <form className="w-full flex items-center gap-6">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
        </svg>

        <input type="text" onChange={(e)=>handleSearch(e) } className="bg-transparent font-outfit text-white w-full outline-none border-none text-[16px] md:text-[24px] font-light" placeholder="Search for movies or TV series"/>
      </form>
    </div>
  )
}
