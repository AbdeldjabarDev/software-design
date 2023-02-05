import Footer from "../components/Footer";
import ContactComp from "../components/ContactComp";
import Nav from "../components/Nav";
import Header from "../components/Header";

export default function Contact(props)
{
    return(<div className="flex flex-col gap-10">
        <Header></Header>
        <Nav></Nav>
    <ContactComp></ContactComp>
    <Footer></Footer>
    </div>)
}