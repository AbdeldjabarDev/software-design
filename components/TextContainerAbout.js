import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function TextContainerAbout(props)
{
    return (<div className="flex flex-wrap w-full gap-20 lg:gap-60 mt-10 cursor-default">
    <img src={props.src} width={"250"} height="300"></img>{" "}
    <div className="border flex flex-col gap-10 md:ml-10 md:w-[60%] lg:w-[40%] w-[95%]">
      <div className={'font-semibold text-2xl pl-4 pt-4 ' + inter.className}>{props.title}</div>
      <div className={'text-md pl-4 pr-4 ' + inter.className}>{props.content}</div>
      <div className={'pl-4 pr-4 pt-2 pb-2 ml-4 mb-2 bg-black w-fit text-white hover:border hover:text-black hover:bg-white  ' + inter.className}>READ MORE</div>
    </div>
  </div>)
}