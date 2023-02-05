import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
export default function ContactComp(props)
{
    return(<div>
    <div className={"text-4xl ml-auto mr-auto w-fit mb-10 font-bold " + inter.className} >Get In Touch</div>
   <div className="flex h-fit mt-10 flex-col lg:flex-row" >
    <img className="w-full" src='/images/img-10.png'></img>
    <form className="flex flex-col gap-7 bg-[#f9f9fb] w-full pl-10 pt-6 pb-6">
      <input className={"text-lg border rounded-md p-3 w-[80%] "  + inter.className}  placeholder="Name"></input>
      <input type="email" className={"text-lg border rounded-md p-3 w-[80%] " + inter.className}   placeholder="Email"></input>
      <input  className={"text-lg border rounded-md p-3 w-[80%] " + inter.className}   placeholder="Phone Number"></input>
      <textarea className={"text-lg border rounded-md w-[80%] p-3 h-[70%] resize-none " + inter.className} placeholder="Message"></textarea>
      <button type="submit" className={' rounded-md text-white w-fit pl-5 pr-5 pt-2 pb-2 bg-[#c9e5fb] hover:bg-[#62aee8] ' + inter.className}>SEND</button>
    </form>
   </div>
    </div>)
}