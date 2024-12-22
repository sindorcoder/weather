import { BiSearchAlt } from "react-icons/bi";
import { useEffect, useState } from "react";
import { fetchData } from "../utils";

const Sidebar = ({setText, data}: {setText: (text: string) => void, data: any}) => {

  console.log(data);

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
