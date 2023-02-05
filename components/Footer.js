import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function Footer(props)
{
    return(   <div className={"bg-black lg:h-[480px]  text-white flex flex-col " + inter.className}>
    <div className="flex lg:flex-nowrap flex-wrap gap-10 mt-20  w-[80%] ml-auto mr-auto">
    <div className="flex flex-col gap-12">
      <img src='/images/footer-logo.png' width="150" height="80"></img>
      <div className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </div>
    </div>
    <div className="flex flex-col gap-12" >
      <div className="text-2xl font-semibold">ADDRESS</div>
      <div className="text-lg">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or </div>
    </div>
    <div className="flex flex-col gap-8">
      <div className="font-semibold text-2xl">NEWSLETTER</div>
      <input className="text-xl rounded-full p-2" type={"email"} placeholder="Enter your email"></input>
      <button className="w-fit pl-5 pr-5 pt-2 pb-2 bg-[#c9e5fb] rounded-full hover:bg-[#62aee8]">SUBSCRIBE</button>
    </div>
    </div>
    <div className="w-[60%] mr-auto ml-auto h-[2px] mt-9 bg-[#f9f9cf]"></div>
    <div className="flex gap-4 w-fit ml-auto mr-auto mt-5">
    <img src='/images/fb-icon.png'></img>
    <img src='/images/instagram-icon.png'></img>
    <img src='/images/twitter-icon.png'></img>
    <img src='/images/linkedin-icon.png'></img>
    
    </div>
  
   </div>)
}