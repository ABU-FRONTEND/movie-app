import React from 'react';
import book from '../../assets/Group 27 (2).png';
import IDataItems from '../../interface/IDataItems';
import tv from '../../assets/icons/tv-type-icon.svg'
import movie from '../../assets/icons/movie-type-icon.svg'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../app/store';
import { setIsBookmarked } from '../../app/reducers/isBookmarked';
const CardListItem: React.FC<IDataItems> = ({title, year, type, rating, img}) => {
    const {isBookmarked} = useSelector((state: RootState) => state.isBookmarkedSlice)
    const dispatch = useDispatch();
    console.log(isBookmarked);

  return (
    <div className='relative'>
      <img src={img} className='w-full rounded-[20px]' alt="" />
      <img src={book} onClick={()=> dispatch(setIsBookmarked())} className='absolute top-[20px] right-[20px] cursor-pointer' alt="" />
      <div className='flex items-center gap-[10px] pt-[10px]'>
        <span className='text-[13px] font-outfit opacity-50'>{year}</span>
        <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
        <span className='text-[13px] font-outfit opacity-50 flex items-center gap-[5px]'><img src={type === "Movie" ? movie  : tv} alt="" />{type === "Movie" ? "Movie" : "TV Series"}</span>
        <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
        <span className='text-[13px] font-outfit opacity-50'>{rating}</span>
      </div>
      <h3 className='text-[18px] font-outfit font-normal'>{title}</h3>
    </div>
  );
}

export default CardListItem;
