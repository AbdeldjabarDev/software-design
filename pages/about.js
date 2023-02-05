import AboutComp from "../components/AboutComp";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Nav from "../components/Nav";


export default function About(props)
{
    return(<div className="flex flex-col gap-10">
        <Header></Header>
        <Nav></Nav>
    <AboutComp></AboutComp>
    <Footer></Footer>
    </div>)
}