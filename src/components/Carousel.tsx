import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "../style/index.css";
import { Skeleton } from "./ui/skeleton";
const CarouselComp = ({ locationData, theme }: any) => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={20}
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
        {locationData ? (
          locationData.length < 5 ? (
            locationData[0].hour?.map((day: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-full p-2 backdrop-blur-lg -webkit-backdrop-blur-lg  ${
                    theme === "night" ? "bg-black/20" : "bg-white/20"
                  } rounded-lg`}
                >
                  <div className="flex justify-center items-center gap-4">
                    <span className="text-[14px] sm:text-[20px] font-bold">
                      {day.time.split(" ")[1]}
                    </span>
                    <img
                      loading="lazy"
                      src={day.condition.icon}
                      alt="icon weather"
                      className="w-6 h-6 sm:w-12 sm:h-12"
                    />
                    <span className="text-[15px]">
                      {day.temp_c.toString().split(".")[0] + "°"}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            locationData.map((day: any, index: number) => (
              <SwiperSlide key={index}>
                <div
                  className={`w-full p-2 backdrop-blur-lg  -webkit-backdrop-blur-lg
                   ${
                     theme === "night" ? "bg-black/20" : "bg-white/20"
                   } rounded-lg`}
                >
                  <div className="flex justify-center items-center gap-1 sm:gap-2">
                    <span className="text-[12px] text-nowrap sm:text-wrap sm:text-[17px] font-semibold">
                      {day.date.split("-").reverse().join(" ")}
                    </span>
                    <img
                      loading="lazy"
                      src={day.day.condition.icon}
                      alt="icon weather"
                      className="w-6 h-6 sm:w-12 sm:h-12"
                    />
                    <div className="flex sm:flex-col gap-1 items-end">
                      <span className="text-[14px] font-semibold">
                        {day.day.maxtemp_c.toString().split(".")[0] + "°"}
                      </span>
                      <span>
                        <span className="text-[14px] font-semibold">
                          {day.day.mintemp_c.toString().split(".")[0] + "°"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )
        ) : (
          <div className="flex gap-[10px] items-center justify-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <Skeleton key={index} className="h-[60px] w-[200px] rounded-lg">
                <div className=" flex items-center justify-between gap-2 p-2">
                  <Skeleton className="h-[30px] w-[60px]" />
                  <Skeleton className="h-[45px] w-[45px] rounded-full" />
                  <Skeleton className="h-[30px] w-[30px]" />
                </div>
              </Skeleton>
            ))}
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default CarouselComp;
