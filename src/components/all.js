
import FAQ from "./faqs/faqs";
import Footer from "./footer/footer";
import Git from "./git/git";
import Hero from "./hero/hero";
import Navbar from "./navbar/navbar"
import Offer from "./offer/offer";
import Partner from "./partner/partner";
import Wwa from "./whoweare/wwa";

const All =()=>{
    return(
        <>
        <Navbar/>
        <Hero/>
        <Wwa/>
        <Offer/>
        <Partner/>
        <Git/>
        <FAQ/>
        <Footer/>
        </>
    )
}
export default All;