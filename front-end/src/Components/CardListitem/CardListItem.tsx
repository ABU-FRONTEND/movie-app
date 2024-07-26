import IDataItems from '../../interface/IDataItems';
import movie from '../../assets/icons/movie-type-icon.svg';
import tv from '../../assets/icons/tv-type-icon.svg';
import PLayHover from '../PlayHover/PLayHover';
import { useState } from 'react';
const CardListItem: React.FC<IDataItems> = ({ title, year, type, rating, img }) => {
    const [hover, setHover] = useState(false);
    return (
        <div  className=' overflow-hidden cursor-pointer'>
            <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=> setHover(false)} className='relative w-full overflow-hidden rounded-[15px]'>
                <img
                    src={img}
                    className={`w-full ${hover ? 'scale-110' : ''} duration-300`}
                    alt="movie image"
                />
                {hover && < PLayHover/>}
            </div>
            
            <div className='flex items-center gap-[10px] pt-[10px]'>
                <span className='text-[8px] sm:text-[11px] md:text-[13px] font-outfit opacity-50'>{year}</span>
                <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
                <span className='text-[8px] sm:text-[11px] md:text-[13px] font-outfit opacity-50 flex items-center gap-[5px]'>
                    <img src={type === "Movie" ? movie : tv} alt="" />
                    {type === "Movie" ? "Movie" : "TV Series"}
                </span>
                <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
                <span className='text-[8px] sm:text-[11px] md:text-[13px] font-outfit opacity-50'>{rating}</span>
            </div>
            <h3 className='text-[14px] md:text-[18px] lg:text-[24px] font-outfit font-normal'>{title}</h3>
        </div>
    );
};

export default CardListItem;
