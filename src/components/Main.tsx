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
import React, { useEffect, useState } from "react";
import { SkeletonCard } from "./SkeletonCard";
import { Skeleton } from "./ui/skeleton";

const white = "#ced4da";
const Main = ({
  setText,
  data,
  setTheme,
  locationData,
  setDay,
  day,
  theme,
}: {
  setText: React.Dispatch<React.SetStateAction<string>>;
  data: any;
  locationData: any;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
  setDay: React.Dispatch<React.SetStateAction<number>>;
  day: number;
  theme: string;
}) => {
  const [daysFive, setDaysFive] = React.useState(false);
  const [searchBar, setSearchBar] = useState(false);
  const handleSubmit = (value: any) => {
    if (value._reactName === "onKeyDown" && value.key === "Enter") {
      setText(value.target.value);
      localStorage.setItem("location", value.target.value);
    }
    if (value._reactName === "onKeyDown" && value.key === "Enter") {
      value.target.value = "";
      setSearchBar(false);
    }
  };

  useEffect(() => {
    if (daysFive) {
      setDay(7);
    } else {
      setDay(1);
    }
  }, [daysFive, day]);

  return (
    <>
      <section
        style={{
          color: theme === "night" ? "#999" : "white",
        }}
        className={`w-full mt-[20px] rounded-2xl p-4 backdrop-filter backdrop-blur-lg ${
          theme === "night" ? "bg-opacity-50" : "bg-opacity-10"
        } ${theme === "night" ? "bg-black" : "bg-white"}`}
      >
        <div className="flex items-center gap-5 justify-between">
          {logo ? (
            <img
              src={logo.src}
              width="90"
              loading="lazy"
              height="90"
              alt="Site logo"
            />
          ) : (
            <Skeleton className="h-12 w-12" />
          )}
          <div className="flex items-center w-full justify-end gap-10">
            <div className="flex items-center w-[40%]  justify-between gap-2 space-x-4 rounded-lg overflow-hidden text-[16px] sm:hidden">
              <button onClick={() => setSearchBar(true)}>
                <Search size={30} />
              </button>
              <div
                onClick={(e) =>
                  (e.target as HTMLElement).id !== "searchs" &&
                  setSearchBar(false)
                }
                style={{
                  width: searchBar ? "100%" : "none",
                  height: searchBar ? "100%" : "none",
                  transform: `translateY(${searchBar ? "0" : "-150%"})`,
                }}
                className={`fixed top-0 ${window.innerWidth > 800 && "backdrop-filter backdrop-blur-3xl" }  bg-opacity-10 z-10 bg-zinc-600 -left-4 rounded-2xl overflow-hidden w-full h-full duration-700 ease-in-out   
                `}
              >
                <div className="flex gap-2 bg-gray-800 h-[60px]">
                  <input
                    className="bg-transparent outline-none border-none !border-transparent capitalize text-white px-4 w-full py-2"
                    type="text"
                    id="searchs"
                    placeholder="Search City for Weather"
                    onKeyDown={(e: any) => handleSubmit(e)}
                  />
                  <label
                    htmlFor="searchs"
                    className="bg-gray-900 flex items-center justify-center w-[100px] !m-0 h-full cursor-pointer"
                  >
                    <Search size={"80%"} color="white" />
                  </label>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: theme === "night" ? "" : white }}
              className="sm:flex items-center justify-between hidden  gap-2 space-x-4 rounded-lg overflow-hidden text-[16px] bg-gray-800 "
            >
              <input
                className="bg-transparent outline-none border-none !border-transparent capitalize px-4 w-full py-2"
                type="text"
                id="search"
                placeholder="Search City for Weather"
                onKeyDown={(e: any) => handleSubmit(e)}
              />
              <label
                style={{ backgroundColor: theme === "night" ? "" : "#5c677d" }}
                htmlFor="search"
                className="bg-gray-900 flex items-center justify-center w-[60px] !m-0 h-[45px] cursor-pointer"
              >
                <Search size={"80%"} />
              </label>
            </div>
            <div
              style={{
                backgroundColor: theme === "night" ? "#1f2937" : white,
              }}
              className="flex items-center justify-between  w-full max-w-[120px] h-[45px] rounded-lg overflow-hidden"
            >
              <div
                className="flex items-center justify-center w-[50%] h-full"
                style={{
                  width: theme === "light" ? "55%" : "50%",
                  boxShadow:
                    theme === "light" ? "0 0 10px 0 rgba(1, 1, 1, 1)" : "none",
                }}
              >
                <button
                  onClick={() => setTheme("light")}
                  className="w-[50%] border-none outline-none h-full cursor-pointer flex items-center justify-center"
                >
                  <SunIcon color="black" />
                </button>
              </div>
              <div className="h-full w-[2px] bg-gray-950"></div>
              <div
                className="w-[50%] h-full flex items-center justify-center"
                style={{
                  width: theme === "night" ? "55%" : "50%",
                  boxShadow:
                    theme === "night"
                      ? "0 0 10px 2px rgba(1, 1, 1, 1)"
                      : "none",
                }}
              >
                <button
                  onClick={() => setTheme("night")}
                  className="h-full outline-none border-none flex cursor-pointer items-center justify-center "
                >
                  <MoonIcon color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start md:flex-row mt-[30px] justify-between">
          <div className="flex flex-col sm:w-[50%] w-full gap-3 items-center">
            <span className="text-[45px] -tracking-tighter">
              {(data && data.location?.name) || (
                <Skeleton className="h-8 w-40" />
              )}
            </span>
            <span className="text-[18px] leading-8">
              {(data && data.location?.localtime.split(" ")[0]) || (
                <Skeleton className="h-4 w-20" />
              )}
            </span>
            <span className="text-[22px] leading-10">
              {(data && data.location?.localtime.split(" ")[1]) || (
                <Skeleton className="h-4 w-30" />
              )}
            </span>
            <span className="text-[70px] my-[34px] tracking-widest">
              {(data && data.current?.temp_c + "°") || (
                <Skeleton className="h-12 w-60" />
              )}
            </span>
            <span className="flex items-center text-[16px]  sm:text-[24px] tracking-wider gap-5">
              {data && data.current?.condition.icon ? (
                <img
                  loading="lazy"
                  src={data && data.current?.condition.icon}
                  alt="icon weather"
                />
              ) : (
                <Skeleton className="h-8 w-8" />
              )}
              {(data && data.current?.condition.text) || (
                <Skeleton className="h-4 w-20" />
              )}
            </span>
          </div>
          {data ? (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4 w-full md:w-[50%]">
              <Card
                data={data && data.current?.humidity + "%"}
                title={"Humidity"}
                icon={<Droplets size={30} />}
                theme={theme}
              />
              <Card
                title={"Pressure"}
                data={data && data.current?.pressure_mb}
                icon={<Gauge size={30} />}
                theme={theme}
              />
              <Card
                title={"Gust"}
                data={data && data.current?.gust_kph + " kph"}
                icon={<WindArrowDown size={30} />}
                theme={theme}
              />
              <Card
                title={"Vis"}
                data={data && data.current?.vis_km + " km"}
                icon={<Eye size={30} />}
                theme={theme}
              />
              <Card
                title={"Precip"}
                data={data && data.current?.precip_in + "%"}
                icon={<CloudRainWind size={30} />}
                theme={theme}
              />
              <Card
                title={"Dew"}
                data={data && data.current?.dewpoint_c + " %"}
                icon={<Leaf size={30} />}
                theme={theme}
              />
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4 w-full md:w-[50%]">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  <SkeletonCard />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="my-[50px]">
          <div className="flex mb-[25px] items-center gap-4">
            <span className="text-[16px] sm:text-[30px] capitalize font-bold">
              Forecast :
            </span>
            <div className="flex items-center gap-5">
              <button
                style={{ borderBottom: !daysFive ? "2px solid #fff" : "none" }}
                onClick={() => setDaysFive(false)}
                className="text-[14px] sm:text-[17px]  cursor-pointer font-semibold"
              >
                For 24 Hours
              </button>
              <button
                style={{ borderBottom: daysFive ? "2px solid #fff" : "none" }}
                onClick={() => setDaysFive(true)}
                className="text-[14px] sm:text-[17px]  cursor-pointer font-semibold"
              >
                For 5 Days
              </button>
            </div>
          </div>
          <CarouselComp
            theme={theme}
            locationData={locationData?.forecast?.forecastday}
          />
        </div>
      </section>
    </>
  );
};

export default Main;
