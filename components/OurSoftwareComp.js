import { Inter } from "@next/font/google";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });
import styles from '../styles/Home.module.css'
import TextContainerHIT from "./TextContainerHIT";
export default function OurSoftware(props)
{
    let [x,SetX] = useState(0);
    return(<div>
          <div className="flex flex-col gap-10 mt-28">
    <div className={"w-fit text-4xl font-bold ml-auto mr-auto " + inter.className}>Our Software</div>
      <div className={" ml-auto mr-auto w-[40%] text-lg " + inter.className}>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</div>

      <div className="relative flex ml-auto mr-auto gap-10 w-[80vw] lg:w-fit lg:overflow-visible mt-8 overflow-hidden ">
        {/* <div className="absolute top-5 left-0 ml-5 mr-auto text-5xl content-center"  onClick={(e)=>
        {
          if(x <=0)
          setX(3)
          else
          setX(x+1)
        }}>{"<"}</div>
        <div className="absolute top-5 right-0 mr-5 ml-auto text-5xl content-center" onClick={(e)=>
        {
          if(x <=3)
          setX(3)
          else
          setX(x-1)
        }}>{">"}</div> */}
    <div className="flex">
    <div className="w-[300%] lg:w-fit h-fit flex gap-4 lg:gap-10" style={{transform:`translateX(${(x*1/3)*100}%)`}}>
        <img className="w-[100%]" src='/images/img-8.png'></img>
        <img className={"w-[100%] " +  styles.middle_img}  src='/images/img-7.png' ></img>
        <img className="w-[100%]" src='/images/img-6.png'></img>
        </div>
    </div>
       
       </div>
    </div>
    <div className="flex w-full mt-10 p-6 bg-no-repeat bg-[url('/images/img-9.png')]">
      {/* <img src="/images/img-9.png" className="ml-0"></img> */}
      <div className={"lg:text-4xl text-3xl w-fit ml-auto mr-auto font-bold mt-20 " + inter.className}>How it Works</div>
   
    </div>
    <div className="flex w-[80%] ml-auto mr-auto gap-6 flex-wrap lg:flex-nowrap mt-16">
   <TextContainerHIT title="FULLY RESPONSIVE" 
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo" 
   />
  <TextContainerHIT title="WELL DOCUMENTED"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
/>
<TextContainerHIT title="EASY TO USE"
content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"
/>
   </div>
    </div>)
}