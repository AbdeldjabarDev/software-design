import { Inter } from '@next/font/google'
const inter = Inter({ subsets: ['latin'] })
export default function Nav(props)
{
return (<div className="bg-[url('/images/banner-bg.png')] border border-black h-[100vh] lg:h-[65vh] w-full pl-5 pt-5 pb-10 flex flex-col">
    <div className="absolute top-5 left-5 bg-[url('/images/logo.png')] bg-no-repeat w-[150px] h-10 ml-1 mr-auto"></div>
    <div className={'ml-14 text-[#679af5] text-5xl font-bold w-fit mt-[10vh] '  + inter.className}>BUILD BEST</div>
    <div className={'ml-14 text-black  text-6xl w-fit font-bold ' + inter.className}> SOFTWARE</div>
    <div className={'ml-14 mt-3 max-w-[40%] ' + inter.className}>There are many variations of passages of Lorem Ipsum available, but the majority </div>
    <div className='flex mt-10 gap-8 ml-14'>
        <div className={'bg-black w-fit pt-4 pb-4 pr-4 pl-6 text-white ' + inter.className}>CONTACT US</div>
        <div className={'bg-white w-fit pt-4 pb-4 pr-4 hover:bg-black hover:text-white pl-6 text-black border ' + inter.className}>GET A QUOTE</div>
    </div>
  
</div>)
}