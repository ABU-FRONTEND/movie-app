
const Skeleton = () => {
    return (
        <div className='relative'>
          {/* Image placeholder */}
          <div className='animate-pulse w-full h-[200px] rounded-[20px] bg-gray-500'></div>
          
          {/* Bookmark icon placeholder */}
          <div className='absolute top-[20px] right-[20px]'>
            <div className='animate-pulse w-[24px] h-[24px] rounded-full bg-gray-500'></div>
          </div>
          
          {/* Details placeholder */}   
          <div className='flex items-center gap-[10px] pt-[10px]'>
            {/* Year placeholder */}
            <div className='animate-pulse w-[50px] h-[13px] rounded-md bg-gray-500'></div>
            
            {/* Divider */}
            <div className='w-[4px] bg-gray-500 h-[4px] rounded-full'></div>
            
            {/* Type placeholder */}
            <div className='flex items-center gap-[5px]'>
              <div className='animate-pulse w-[20px] h-[13px] bg-gray-500'></div>
              <div className='animate-pulse w-[60px] h-[13px] bg-gray-500'></div>
            </div>
            
            {/* Divider */}
            <div className='w-[4px] bg-gray-500 h-[4px] rounded-full'></div>
            
            {/* Rating placeholder */}
            <div className='animate-pulse w-[30px] h-[13px] rounded-md bg-gray-500'></div>
          </div>
          
          {/* Title placeholder */}
          <div className='animate-pulse w-full h-[20px] mt-[10px] bg-gray-500'></div>
        </div>
      );
}

export default Skeleton
