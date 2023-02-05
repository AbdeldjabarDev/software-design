import Footer from "../components/Footer";
import Nav from "../components/Nav";
import ServicesComp from "../components/ServicesComp";
import Header from "../components/Header";
export default function Services(props)
{
    return(<div className="flex flex-col gap-10">
        <Header></Header>
        <div className='hidden md:block' ><Nav></Nav></div>

    <ServicesComp></ServicesComp>
    <Footer></Footer>
    </div>)
}