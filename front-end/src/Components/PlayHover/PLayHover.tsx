import play from '../../assets/icons/play-button.png'
const PLayHover = () => {
  return (
    <div className='w-full h-full flex items-center justify-center absolute top-[0] left-[0]  bg-[#00000080]'>
        <button className='bg-[rgba(255,255,255,0.2)] z-50 rounded-[25px] flex items-center justify-center gap-x-[5px] sm:gap-x-[15px] p-[5px] sm:p-[10px] text-[10px] sm:text-[20px]'> <img src={play} className='w-[20px] sm:w-[30px]' alt="play button" /> Play</button>
    </div>
  )
}

export default PLayHover
