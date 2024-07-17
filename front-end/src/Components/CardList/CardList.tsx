import CardListItem from "../CardListitem/CardListItem";
import IDataItems from "../../interface/IDataItems";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import ICardListProps from "../../interface/ICardListProps";
import Skeleton from "../Skeleton/Skeleton";
const CardList: React.FC<ICardListProps> = ({link, Qkey}) => {
    const fetchData = async () => {
        const response = await axios.get(link);
        return response.data;
      };
    
      const { data, isLoading } =  useQuery({
        queryKey: [Qkey],
        queryFn: fetchData,
      }); 
      console.log(data?.length);
      
      if (isLoading || !data) {
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
          <div className="w-full pt-[40px] max-w-[1400px] px-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {data?.map((item: IDataItems, index: number) => (
              <div key={index}>
                <CardListItem
                  key={index}
                  title={item.title}
                  img={item.thumbnail.regular.large}
                  year={item.year}
                  type={item.category}
                  rating={item.rating}
                />
              </div>
            ))}
          </div>
        </div>
      );
}

export default CardList

