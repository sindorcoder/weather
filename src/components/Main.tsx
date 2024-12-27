import { BiSearchAlt } from "react-icons/bi";
import logo from "../../public/logo.svg";
import Card from "./Card";
import { WiHumidity } from "react-icons/wi";

const Main = ({
  setText,
  data,
}: {
  setText: React.Dispatch<React.SetStateAction<string>>;
  data: any;
}) => {
  // console.log(data.current.humidity)
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
                className="bg-gray-900 w-[60px] h-[45px] cursor-pointer"
              >
                <BiSearchAlt size={"100%"} color="white" />
              </label>
            </div>
            <div className="theme  w-full max-w-[120px] h-[45px] bg-black"></div>
          </div>
        </div>

        <div className="flex items-center mt-[30px] justify-between">
          <div></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 mt-4 w-[50%]">
            <Card
              data={data && data.current.humidity}
              title={"Humidity"}
              icon={<WiHumidity  />}
            />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
