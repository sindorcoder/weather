import { Carousel } from "flowbite-react";
import "../style/index.css";

const CarouselComp = ({ locationData }: any) => {
  return (
    <>
      <div className="h-[50px] sm:h-[65px] flex items-center gap-10 xl:h-[80px] 2xl:h-[100px]">
        <Carousel indicators={false} slide={true}>
          {locationData &&
            locationData[0].hour?.map((day: any, index: number) => {
              return (
                <div
                  key={index}
                  className="flex w-full items-center justify-between p-2 bg-gray-800 rounded-lg"
                >
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
              );
            })}
        </Carousel>
      </div>
    </>
  );
};

export default CarouselComp;
