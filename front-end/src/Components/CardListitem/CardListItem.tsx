import React from 'react';
import book from '../../assets/Group 27 (2).png';
import IDataItems from '../../interface/IDataItems';
import tv from '../../assets/icons/tv-type-icon.svg'
import movie from '../../assets/icons/movie-type-icon.svg'
import {  useDispatch, useSelector } from 'react-redux';
// import { setIsBookmarked } from '../../app/reducers/isBookmarked';
import { RootState } from '../../app/store';
import axios from 'axios';
const CardListItem: React.FC<IDataItems> = ({title,id, year, type, rating, img}) => {
    const data = useSelector((state: RootState) => state.responseData.data);  
    // const dispatch = useDispatch();
    const yourToken = localStorage.getItem('token');
    const handleBookmarked = async (bookmark: number): Promise<void> => {
        
        try {
            const response = await axios.post('http://localhost:3000/add-bookmarks', { movieId: bookmark  }, {
                headers: {
                    'Authorization': `Bearer ${yourToken}`, // Replace with your actual token
                    'Content-Type': 'application/json'
                }
            });
            console.log('Bookmark added:', response.data);
        } catch (error) {
            console.error('Error adding bookmark:', error);
        }
      };
      
      
  return (
    <div className='relative'>
      <img src={img} className='w-full rounded-[15px]' alt="" />
      <img src={book} onClick={() => handleBookmarked(id)} className='absolute top-[20px] right-[20px] cursor-pointer' alt="" />
      <div className='flex items-center gap-[10px] pt-[10px]'>
        <span className='text-[11px]md:text-[13px] font-outfit opacity-50'>{year}</span>
        <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
        <span className='text-[11px] md:text-[13px] font-outfit opacity-50 flex items-center gap-[5px]'><img src={type === "Movie" ? movie  : tv} alt="" />{type === "Movie" ? "Movie" : "TV Series"}</span>
        <span className='w-[4px] bg-[white] h-[4px] font-outfit rounded-[20px] opacity-50'>  </span>
        <span className='text-[11px] md:text-[13px] font-outfit opacity-50'>{rating}</span>
      </div>
      <h3 className='text-[14px] md:text-[18px] lg:text-[24px] font-outfit font-normal'>{title}</h3>
    </div>
  );
}

export default CardListItem;
