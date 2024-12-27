
const Card = ({data, title, icon}: any) => {
  return (
    <div className="w-full text-center flex flex-col gap-2 p-4 max-w-[300px] h-[250px] backdrop-filter backdrop-blur-lg bg-opacity-10 bg-white">
      <h1 className="text-[34px]">{title}</h1>
      <span className="text-[50px] mx-auto">
        {icon}
      </span>
      <span className="text-[28px] leading-8 tracking-wider">{data}</span>
    </div>
  )
}

export default Card