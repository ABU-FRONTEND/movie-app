
import tv from '../../assets/icons/tv-type-icon.svg';
import movie from '../../assets/icons/movie-type-icon.svg';
import ITrendingCard from "../../interface/ITrendingCard";
import { useState } from 'react';
import PLayHover from '../PlayHover/PLayHover';

const TrendingCard: React.FC<ITrendingCard> = ({ id, title, img, year, type, rating }) => {
    const imageUrl = window.innerWidth! > 650 ? img.trending.small : img.trending.large;
    const responsivImg = window.innerWidth! > 650 ? '470px' : '240px';
    const [hover, setHover] = useState(false);
    

    return (
        <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className="relative w-full max-w-[470px] overflow-hidden rounded-[20px] cursor-pointer" key={id}>
            <img
                className={`w-full max-w-[${responsivImg}] ${hover ? 'scale-110' : ''} duration-300`}
                src={imageUrl}
                alt={title}
            />
            {hover && <PLayHover/>}
            <div className="absolute bottom-0 p-6 w-full bg-black bg-opacity-25 text-white">
                <div className="flex items-center mb-2 z-10">
                    <p>{year}</p>
                    <div className="w-[3px] h-[3px] rounded-full bg-white mx-2"></div>
                    <div className="flex items-center">
                        <img src={type === 'Movie' ? movie : tv} alt={type} className="w-3 h-3 mr-1" />
                        <p>{type === 'Movie' ? 'Movie' : 'TV Series'}</p>
                    </div>
                    <div className="w-[3px] h-[3px] rounded-full bg-white mx-2"></div>
                    <p>{rating}</p>
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
        </div>
    );
};

export default TrendingCard;
