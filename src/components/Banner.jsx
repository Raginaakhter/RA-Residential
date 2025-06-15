import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          type: 'progressbar',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="hero bg-base-200">
            <img
              className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
              src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Slide 1"
            />
            <div className="hero-content text-center absolute text-white bg-black bg-opacity-40 p-4 rounded-xl">
              <div className="max-w-md">
                <h1 className="text-3xl sm:text-4xl font-bold">Welcome to RA Residential</h1>
                <p className="py-4 text-lg sm:text-xl font-medium">
                  Trusted by world-class companies, design teams & clients.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
            src="https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Slide 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
            src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 3"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen object-cover"
            src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
