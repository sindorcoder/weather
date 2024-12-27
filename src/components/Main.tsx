import logo from "../../public/logo.svg";
import Card from "./Card";
import {
  CloudRainWind,
  Eye,
  Gauge,
  Leaf,
  Search,
  WindArrowDown,
} from "lucide-react";
import { Droplets } from "lucide-react";
const Main = ({
  setText,
  data,
}: {
  setText: React.Dispatch<React.SetStateAction<string>>;
  data: any;
}) => {
  console.log(data);
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
            <div className="flex items-center w-[30%] max-w-[400px] justify-between  gap-2 space-x-4 rounded-lg overflow-hidden text-[16px] bg-gray-800 ">
              <input
                className="bg-transparent outline-none border-none capitalize text-white px-4 w-full py-2"
                type="text"
                id="search"
                placeholder="Search City for Weather"
              />
              <label
                htmlFor="search"
                className="bg-gray-900 flex items-center justify-center w-[60px] h-[45px] cursor-pointer"
              >
                <Search size={"80%"} color="white" />
              </label>
            </div>
            <div className="theme  w-full max-w-[120px] h-[45px] bg-black"></div>
          </div>
        </div>

        <div className="flex items-start mt-[30px] justify-between">
          <div className="flex flex-col w-[50%] items-center">
            <span className="text-[45px] text-black -tracking-tighter">
              {data && data.location.name}
            </span>
            <span className="text-[18px] leading-8">
              {data && data.location.localtime.split(" ")[0]}
            </span>
            <span className="text-[22px] leading-10">
              {data && data.location.localtime.split(" ")[1]}
            </span>
            <span className="text-[70px] my-[34px] tracking-widest">
              {data && data.current.temp_c + "°"}
            </span>
            <span className="flex items-center text-[24px] tracking-wider gap-5">
              <img src={data && data.current.condition.icon} alt="" />{" "}
              {data && data.current.condition.text}
            </span>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4 w-[50%]">
            <Card
              data={data && data.current.humidity + "%"}
              title={"Humidity"}
              icon={<Droplets size={50} />}
            />
            <Card
              title={"Pressure"}
              data={data && data.current.pressure_mb}
              icon={<Gauge size={50} />}
            />
            <Card
              title={"Gust"}
              data={data && data.current.gust_kph + " kph"}
              icon={<WindArrowDown size={50} />}
            />
            <Card
              title={"Vis"}
              data={data && data.current.vis_km + " km"}
              icon={<Eye size={50} />}
            />
            <Card
              title={"Precip"}
              data={data && data.current.precip_in + "%"}
              icon={<CloudRainWind size={50} />}
            />
            <Card
              title={"Dew"}
              data={data && data.current.dewpoint_c + " %"}
              icon={<Leaf size={50} />}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
