import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../style/index.css";
const CarouselComp = ({ locationData }: any) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        modules={[Navigation]}
        navigation={true}
      >
        {locationData &&
          locationData[0].hour?.map((day: any, index: number) => (
            <SwiperSlide key={index}>
              <div className="flex w-full items-center justify-between p-2 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white rounded-lg">
                <div className="flex items-center gap-4">
                  <span className="text-[20px] font-bold">
                    {day.time.split(" ")[1]}
                  </span>
                  <img
                    src={day.condition.icon}
                    alt="icon weather"
                    className="w-12 h-12"
                  />
                  <span className="text-[15px]">{day.temp_c + "°"}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CarouselComp;
