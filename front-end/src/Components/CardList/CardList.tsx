import CardListItem from "../CardListitem/CardListItem";
import IDataItems from "../../interface/IDataItems";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import ICardListProps from "../../interface/ICardListProps";
import Skeleton from "../Skeleton/Skeleton";
import { RootState } from "../../app/store";
const CardList: React.FC<ICardListProps> = ({link, Qkey, type}) => {
    const value = useSelector((state: RootState) => state.searchValue.value);
    
    const fetchData = async () => {
        const response = await axios.get(link);
        return response.data;
      };
      const { data, isLoading } =  useQuery({
        queryKey: [Qkey],
        queryFn: fetchData,
      }); 
       const searchData = data?.filter((item: IDataItems) => item.title.toLowerCase().startsWith(value.trim().toLowerCase()))
      if (isLoading) {
        return (
            <div>
            <div className="w-full pt-[40px] max-w-[1400px] px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {[...Array(10)].map((_, index) => (
                <Skeleton key={index} />
            ))}
          </div>
            </div>
        )
      }

      return (
        <div>
              <h1 className="pt-[20px] text-[20px] md:text-[32px] font-outfit font-light">{type}</h1>
          <div className="w-full pt-[20px] max-w-[1400px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          { searchData?.length > 0 ?
           searchData?.map((item: IDataItems, index: number) => (
              <div key={index}>
                 <CardListItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  img={item.thumbnail.regular.large}
                  year={item.year}
                  type={item.category}
                  rating={item.rating}
                />
              </div>
            )) : <h1 className="text-[30px] text-red-700">No results</h1>
        }
          </div>
        </div>
      );
}

export default CardList

