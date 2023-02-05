import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";
import OurSoftwareComp from "../components/OurSoftwareComp";

export default function OurSoftware(props)
{
    return(<div className="flex flex-col gap-10">
        <Header></Header>
        <Nav></Nav>
    <OurSoftwareComp></OurSoftwareComp>
    <Footer></Footer>
    </div>)
}