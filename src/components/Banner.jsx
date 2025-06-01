
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    type: 'progressbar',
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide ><img className='w-full h-[500px] object-cover' src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /> </SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>
                <SwiperSlide><img className='w-full h-[500px] object-cover' src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;