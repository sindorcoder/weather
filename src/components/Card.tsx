const Card = ({ data, title, icon }: any) => {
  console.log(data.toString().split(" ")[0]);

  return (
    <div className="w-full text-center flex flex-col gap-2 p-4 rounded-xl overflow-hidden backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white">
      <h1 className="text-[34px]">{title}</h1>
      <span className="text-[50px] mx-auto">{icon}</span>
      <span className="text-[28px] leading-8 tracking-wider">{data}</span>
      {title === "Humidity" || title === "Precip" || title === "Dew" ? (
        <div className="w-full mt-4 ">
          <div className="bg-slate-800 h-2 overflow-hidden rounded-full">
            <div
              style={{ width: `${data}` }}
              className="h-full rounded-full bg-slate-300"
            ></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-[13px]">0%</span>
            <span className="text-[13px]">100%</span>
          </div>
        </div>
      ) : (
        <div className="w-full mt-4">
          <span className="text-[18px] font-bold">
            {data} {title}
          </span>
        </div>
      )}
    </div>
  );
};

export default Card;
