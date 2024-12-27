import { useEffect, useState } from "react";
import { fetchData } from "../utils";
import Main from "./Main";

const App = () => {
  const [text, setText] = useState("Samarkand");
  const [data, setData] = useState<any>(null);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const title = localStorage.getItem("location") || "Samarkand";
    setText(title);
  }, []);

  useEffect(() => {
    fetchData(text).then((data) => setData(data));
  }, [text]);

  return (
    <div className="w-full max-w-[1240px] p-4 mx-auto">
      <main className="w-full">
        <Main setText={setText} data={data} setTheme={setTheme} />
      </main>
    </div>
  );
};

export default App;
