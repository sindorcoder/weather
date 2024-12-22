import { BiSearchAlt } from "react-icons/bi";
import { useState } from "react";

const Sidebar = () => {
  const [text, setText] = useState("london");
  const fetchData = async (text: string) => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=f74f685d0d894b17bdf92931241912&q=${text.toLowerCase()}&aqi=no`
    );
    const data = await response.json();
  };
  fetchData(text);
  return (
    <section className="absolute -top-16 -right-[170px] p-4 min-h-screen w-full max-w-[700px] bg-gray-800 bg-opacity-50 backdrop-blur-sm">
      <nav className="px-5 h-full">
        <div className="flex pb-2 items-center justify-between border-b-2 px-2 w-full max-w-[370px]">
          <input
            type="text"
            placeholder="Search City For Weather"
            className="bg-transparent text-white capitalize text-[15px] outline-none"
            onChange={(e: any) => setText(e.target.value)}
          />
          <BiSearchAlt size={28} color="white" />
        </div>
      </nav>
    </section>
  );
};

export default Sidebar;
