import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
import TextContainerAbout from "./TextContainerAbout";
export default function ServicesComp(props)
{
    return( <div className="w-full flex gap-20 relative mt-20">
    <div className="absolute top-0 left-0 rounded-r-lg bg-[#f9f9fb] w-full lg:w-[600px] -z-10 h-full border pb-10"></div>
    <div className="flex flex-col gap-10 lg:ml-60 ml-16">
    <div className={"font-semibold text-4xl mt-6 " + inter.className}>
        What We do
      </div>
      <TextContainerAbout 
      title="New Technology" 
      content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
      src="/images/img-2.png"
      />
         <TextContainerAbout 
      title="Long Live UX" 
      content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
      src="/images/img-3.png"
      />   <TextContainerAbout 
      title="Web Trends" 
      content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
      src="/images/img-4.png"
      />   <TextContainerAbout 
      title="User interfaces" 
      content="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour" 
      src="/images/img-5.png"
      />
  
    </div>
  
  </div>)
}