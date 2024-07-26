import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState } from 'react';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import TrendingCard from '../TrengdingCard/TrendingCard';
import ITrendingCard from '../../interface/ITrendingCard';
import TrendingSkeleton from '../TrendingSkeleton/TrendingSkeleton';

const Trending: React.FC = () => {
    const fetchTrending = async () => {
        try {
            const response = await axios.get('http://localhost:3000/trending');
            return response.data;
        } catch (error) {
            console.error(error);
            return []; 
        }
    };

    const { data } = useQuery({
        queryKey: ['trending'],
        queryFn: fetchTrending
    });

    const [columnWidth, setColumnWidth] = useState(calculateColumnWidth()); 

    useEffect(() => {
        function handleResize() {
            setColumnWidth(calculateColumnWidth()); 
        }

        window.addEventListener('resize', handleResize); 

        return () => {
            window.removeEventListener('resize', handleResize); 
        };
    }, []); 
 
    function calculateColumnWidth() {
        const screenWidth = window.innerWidth;
        if(screenWidth < 400){
            return 1.25;
        }
        if (screenWidth < 768) {
            return 1.5;
        } else if (screenWidth < 1024) {
            return 2.5;
        } else {
            return 3.5;
        }
    }

    return (
        <div className="trending-main">
            <h2 className="text-white font-outfit text-[32px] font-light my-6">Trending</h2>
            <Swiper spaceBetween={20} slidesPerView={columnWidth}>
                {data?.map((item: ITrendingCard) => (
                    <SwiperSlide key={item.id}>
                        <TrendingCard
                            id={item.id}
                            title={item.title}
                            img={item.thumbnail}
                            year={item.year}
                            type={item.category}
                            rating={item.rating}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Trending;
