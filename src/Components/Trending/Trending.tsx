import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const Trending = () => {
    return (
        <Swiper
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
                640: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 3,
                },
                1024: {
                    slidesPerView: 4,
                },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            autoplay={{ delay: 3000 }}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6bo8HyLB1ivrtC-YmkxGKCSU4cXmpMRzzFQ&s" alt="Slide 1" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="slide2.jpg" alt="Slide 2" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="slide3.jpg" alt="Slide 3" />
            </SwiperSlide>
            {/* Add more SwiperSlide components for additional slides */}
        </Swiper>
    );
};

export default Trending;
