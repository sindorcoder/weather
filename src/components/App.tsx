import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import Main from "./Main";

const App = () => {
  const [text, setText] = useState("Samarkand");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData(text).then((data) => setData(data));
  }, [text]);

  return (
    <div className="w-full max-w-[1240px] p-4 mx-auto">
      <main className="w-full">
        <Main setText={setText} data={data} />
      </main>
    </div>
  );
};

export default App;
