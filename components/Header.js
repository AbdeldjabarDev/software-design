import { Inter } from '@next/font/google'
import { use, useState } from 'react'
const inter = Inter({ subsets: ['latin'] })
import Nav from './Nav'
export default function Header(props)
{
    let [vis,setVis] = useState(false)
return (<div className="bg-[url('/images/banner-bg.png')] h-[450px] lg:h-[65vh] w-full pl-5 pt-5 flex flex-col">
    <div className='absolute lg:hidden right-0 top-0 m-4 border p-2' onClick={(e) => setVis(!vis)}><img src='/images/burger.svg' className='w-10 h-10'></img></div>
    <div className='lg:hidden mt-16 -pl-5' style={{display:vis == true ? 'block':'none'}}>
        <Nav mob></Nav>
    </div>
    <div className="absolute top-5 left-5 bg-[url('/images/logo.png')] bg-no-repeat w-[150px] h-10 lg:ml-14 ml-2 mr-auto"></div>
    <div className={'lg:ml-14 ml-2 text-[#679af5] text-5xl font-bold w-fit mt-20 '  + inter.className}>BUILD BEST</div>
    <div className={'lg:ml-14 ml-2 text-black  text-6xl w-fit font-bold ' + inter.className}> SOFTWARE</div>
    <div className={'lg:ml-14 ml-2 mt-3 max-w-[40%] ' + inter.className}>There are many variations of passages of Lorem Ipsum available, but the majority </div>
    <div className='flex mt-10 gap-8 lg:ml-14 ml-2'>
        <div className={'bg-black w-fit pt-4 pb-4 pr-4 pl-6 text-white ' + inter.className}>CONTACT US</div>
        <div className={'bg-white w-fit pt-4 pb-4 pr-4 hover:bg-black hover:text-white pl-6 text-black border ' + inter.className}>GET A QUOTE</div>
    </div>
  
</div>)
}