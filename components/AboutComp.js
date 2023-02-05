import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function AboutComp(props)
{
    return(<div className="flex gap-16 lg:ml-44 lg:mr-44 mt-10 lg:flex-nowrap flex-wrap ml-16 mr-16">
    <div className="flex gap-8 mt-20 flex-col">
      <div className={"font-bold text-5xl mb-3 " + inter.className}>
        ABOUT SOFTWARE
      </div>
      <div className={" text-lg max-w-[70%] opacity-70" + inter.className}>
        Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC,
        making it over 2000 years old. Richard McClintock, a Latin professor
        at Hampden
      </div>
      <div className="text-md mt-10 w-fit pl-6 pr-6 pt-3 pb-3 hover:border-black hover:bg-white hover:border text-white bg-black hover:text-black __className_9c9965">
        READ MORE
      </div>
    </div>
    <img className="" src="/images/img-1.png" />
    
  </div>)
}