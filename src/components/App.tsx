import { useEffect, useState } from "react";
import { fetchData, fetchLocation } from "../utils";
import Main from "./Main";

const App = () => {
  const [text, setText] = useState("London");
  const [data, setData] = useState<any>(null);
  const [day, setDay] = useState<number>(1);
  const [locationData, setLocationData] = useState<any>(null);
  const [theme, setTheme] = useState("light");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const title = localStorage.getItem("location") || "London";
    setText(title);
  }, []);
  useEffect(() => {

    setLoading(true);
    Promise.all([fetchData(text), fetchLocation(text, day)]).then(
      ([data, locationData]) => {
        setData(data);
        setLocationData(locationData);
        setLoading(false);
      }
    );
  }, [text, day]);

  return (
    <div className="w-full max-w-[1240px] p-4 mx-auto">
      <main className="w-full">
        <Main
          setText={setText}
          locationData={locationData}
          data={data}
          setTheme={setTheme}
          day={day}
          setDay={setDay}
          theme={theme}
        />
      </main>
    </div>
  );
};
export default App;
