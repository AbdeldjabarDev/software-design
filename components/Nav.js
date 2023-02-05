import { useRouter } from "next/router"
import { useState } from "react"
import styles from "../styles/Home.module.css";
export default function Nav(props)
{
    let router = useRouter();
    let query = router.asPath; 
    let style_str = "hover:bg-[#c9e5fb] pt-2 pb-2 pl-3 pr-3 text-white hover:text-black " 
    console.log(style_str.concat(query.substring(query.lastIndexOf('/')-1) == '/' ? "bg-[#c9e5fb]" :""))
    return( <div className={"pl-72 pr-20 bg-black  gap-16 cursor-default hidden lg:flex " + styles.nav_bar}>
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
      <div className="text-white pt-2 pb-2 pl-3 pr-3">LOGIN</div>
      <div className="text-white pt-2 pb-2 pl-3 pr-3">REGISTER</div>
    </div>
  </div>)
}