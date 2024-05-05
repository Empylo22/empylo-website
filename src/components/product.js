import Feature2 from "./feature2/feature2";
import Features from "./features/features";
import Navbar from "./navbar/navbar"
import Pdt1 from "./pdt-1/pdt-1";
import Pdt2 from "./pdt2/pdt2";
import Pricing from "./pricing/pricing";
import Pdt from "./producttemplate/pdt";
import Footer from '../components/footer/footer';

const Product =()=>{
    return(
        <>
        <Navbar/>
        <Pdt/>
        <Pdt1/>
        <Features/>
        {/* <Pricing/> */}
        <Pdt2/>
        <Feature2/>
        {/* <Pricing/> */}
        <Footer/>
        </>
    )
}
export default Product;