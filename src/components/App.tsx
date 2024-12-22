import { useEffect, useState } from "react";
import logo from "../../public/logo.svg";
import Sidebar from "../components/Sidebar";
import { fetchData } from "../utils";

const App = () => {
  const [text, setText] = useState("london");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData(text).then((data) => setData(data));
  }, [text]);

  return (
    <div className="w-full max-w-[1240px] p-4 mx-auto">
      <header>
        <img
          src={logo.src}
          width="90"
          loading="lazy"
          height="90"
          alt="Site logo"
        />
      </header>

      <div className="relative min-h-screen">
        <Sidebar setText={setText} data={data} />
      </div>
      <div>
        <h1 className="text-[100px] text-white">{data && data.current.temp_c}</h1>
      </div>
    </div>
  );
};

export default App;
