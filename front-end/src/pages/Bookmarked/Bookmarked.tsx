import { useQuery } from "@tanstack/react-query"
import CardList from "../../Components/CardList/CardList";
import axios from "axios";
const Bookmarked = () => {
    const fetchData = async () => {
        const response = await axios.get("http://localhost:3000/bookmarked");
        return response.data;
    }

    const { data } =  useQuery({
        queryKey: ["bookmarked"],
        queryFn: fetchData,
    });
  return (
    <div>
        <CardList data={data}/>
    </div>
  )
}

export default Bookmarked
