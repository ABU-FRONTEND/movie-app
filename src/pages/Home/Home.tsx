import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import CardList from "../../Components/CardList/CardList";
import Trending from "../../Components/Trending/Trending";
export default function Home() {
  const value = useSelector((state: RootState) => state.searchValue.value);
 
  return (
    <div>
        { value === '' ? <Trending/> : null}
        <CardList link={'http://localhost:3000/all'} Qkey={'all'} type={'Recommended for you'}/>
    </div>
  )
}
