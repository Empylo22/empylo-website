import Atp from "./abouttemplate/atp";
import Footer from "./footer/footer";
import Founder from "./founder/founder";
import Mission from "./mission/mission";
import Navbar from "./navbar/navbar";


const About =()=>{
    return(
        <>
            <Navbar/>
            <Atp/>
            <Mission/>
            <Founder/>
            <Footer/>
        </>
    )
}
export default About;