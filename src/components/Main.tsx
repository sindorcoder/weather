import logo from "../../public/logo.svg";
import Card from "./Card";
import {
  CloudRainWind,
  Eye,
  Gauge,
  Leaf,
  MoonIcon,
  Search,
  SunIcon,
  WindArrowDown,
} from "lucide-react";
import { Droplets } from "lucide-react";
import CarouselComp from "./Carousel";
const Main = ({
  setText,
  data,
  setTheme,
  locationData
}: {
  setText: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  locationData: any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const handleSubmit = (value: any) => {
    if (value._reactName === "onKeyDown" && value.key === "Enter") {
      setText(value.target.value);
      localStorage.setItem("location", value.target.value);
    }
    if (value._reactName === "onKeyDown" && value.key === "Enter") {
      value.target.value = "";
    }
  };
  return (
    <>
      <section className="w-full mt-[20px] rounded-2xl p-4 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white">
        <div className="flex items-center justify-between">
          <img
            src={logo.src}
            width="90"
            loading="lazy"
            height="90"
            alt="Site logo"
          />
          <div className="flex items-center w-full justify-end gap-10">
            <div className="flex items-center justify-between bg-transparent  gap-2 space-x-4 rounded-lg overflow-hidden text-[16px] md:bg-gray-800 ">
              <input
                className="bg-transparent hidden md:block outline-none border-none !border-transparent capitalize text-white px-4 w-full py-2"
                type="text"
                id="search"
                placeholder="Search City for Weather"
                onKeyDown={(e: any) => handleSubmit(e)}
              />
              <label
                htmlFor="search"
                className="md:bg-gray-900 flex items-center justify-center w-full  md:w-[60px] !m-0 h-[45px] cursor-pointer"
              >
                <Search size={"80%"} color="white" />
              </label>
            </div>
            <div className="flex items-center justify-between  w-full max-w-[120px] h-[45px] bg-gray-800 rounded-lg overflow-hidden">
              <button className="w-[50%] border-none outline-none h-full cursor-pointer flex items-center justify-center">
                <SunIcon size={30} color="white" />
              </button>
              <div className="h-full w-[2px] bg-gray-950"></div>
              <button className="w-[50%] h-full outline-none border-none flex cursor-pointer items-center justify-center ">
                <MoonIcon size={30} color="white" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row mt-[30px] justify-between">

          <div className="flex flex-col w-[50%] items-center">
            <span className="text-[45px] text-black -tracking-tighter">
              {(data && data.location?.name) || "Address Not Found!"}
            </span>
            <span className="text-[18px] leading-8">
              {(data && data.location?.localtime.split(" ")[0]) ||
                "Address Not Found!"}
            </span>
            <span className="text-[22px] leading-10">
              {(data && data.location?.localtime.split(" ")[1]) ||
                "Address Not Found!"}
            </span>
            <span className="text-[70px] my-[34px] tracking-widest">
              {(data && data.current?.temp_c + "°") || "Address Not Found!"}
            </span>
            <span className="flex items-center text-[24px] tracking-wider gap-5">
              <img src={data && data.current?.condition.icon} alt="icon weather" />
              {(data && data.current?.condition.text) || "Address Not Found!"}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4 w-full md:w-[50%]">
            <Card
              data={
                (data && data.current?.humidity + "%") || "Address Not Found!"
              }
              title={"Humidity"}
              icon={<Droplets size={50} />}
            />
            <Card
              title={"Pressure"}
              data={(data && data.current?.pressure_mb) || "Address Not Found!"}
              icon={<Gauge size={50} />}
            />
            <Card
              title={"Gust"}
              data={
                (data && data.current?.gust_kph + " kph") ||
                "Address Not Found!"
              }
              icon={<WindArrowDown size={50} />}
            />
            <Card
              title={"Vis"}
              data={
                (data && data.current?.vis_km + " km") || "Address Not Found!"
              }
              icon={<Eye size={50} />}
            />
            <Card
              title={"Precip"}
              data={
                (data && data.current?.precip_in + "%") || "Address Not Found!"
              }
              icon={<CloudRainWind size={50} />}
            />
            <Card
              title={"Dew"}
              data={
                (data && data.current?.dewpoint_c + " %") ||
                "Address Not Found!"
              }
              icon={<Leaf size={50} />}
            />
          </div>
        </div>

        <div className="my-[50px]">
          <div className="flex mb-[25px] items-center gap-4">
            <span className="text-[30px] capitalize font-bold">Forecast :</span>
            <div className="flex items-center gap-5">
              <span className="text-[17px] border-b-2 cursor-pointer font-semibold">For 24 Hours</span>
              <span className="text-[17px] border-b-2 cursor-pointer font-semibold">For 5 Days</span>
            </div>
          </div>
          <CarouselComp locationData={locationData && locationData?.forecast?.forecastday} />
        </div>
      </section>
    </>
  );
};

export default Main;
