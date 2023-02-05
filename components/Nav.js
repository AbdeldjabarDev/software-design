import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/Home.module.css";
export default function Nav(props)
{
    let router = useRouter();
    let query = router.asPath; 
    let style_str = "hover:bg-[#c9e5fb] pt-2 pb-2 pl-3 pr-3 hover:text-black ".concat(props.mob ? 'text-black ml-auto mr-auto text-center w-full  ':'text-white ') 
    return( <div className={" cursor-default ".concat(props.mob ? 'flex flex-col gap-5 ':' pl-72 pr-20 gap-16 flex bg-black')}>
    <div className={style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/' ? "bg-[#c9e5fb]" :"")} onClick={(e)=>
    {
      router.replace('/')
    }}>
      HOME
    </div>
    <div className={style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/about' ? "bg-[#c9e5fb]" :"")} onClick={(e)=>
    {
      console.log(e.target.className)
      router.replace('/about')
    }}>
      ABOUT
    </div>
    <div className={style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/oursoftware' ? "bg-[#c9e5fb]" :"")} onClick={(e)=>
    {
        console.log(e.target.className)
 
      router.replace('/oursoftware')

    }}>
      OUR SOFTWARE
    </div>
    <div className={style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/services' ? "bg-[#c9e5fb]" :"")} onClick={(e)=>
    {
        console.log(e.target.className)

        router.replace('/services')
    }}>
      SERVICES
    </div>
    <div className={style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/contact' ? "bg-[#c9e5fb]" :"")} onClick={(e)=>
{
    console.log(e.target.className)

    router.replace('/contact')

    }}>
      CONTACT US
    </div>
    <div className="flex gap-6">
      <div className="text-white pt-2 pb-2 pl-3 pr-3" style={{display:props.mob ? 'none':'block'}}>LOGIN</div>
      <div className="text-white pt-2 pb-2 pl-3 pr-3" style={{display:props.mob ? 'none':'block'}}>REGISTER</div>
    </div>
  </div>)
}