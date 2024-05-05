import { Link } from 'react-router-dom';
import './footer.css';
// import img from './Group 39700.png';
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img6 from './Secondary Black 1.png';
import { useRef, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';



const Footer =()=>{
    const handleURL =(url)=>{
        window.open(url, '_blank')
    }
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    
    const sectionRef = useRef(null);

    useEffect(() => {
      const revealcallbk = function (entries) {
        const [entry] = entries;
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section-hidden');
      };
  
      const revealSection = new IntersectionObserver(revealcallbk, {
        root: null,
        threshold: 0.15,
      });
  
      if (sectionRef.current) {
        revealSection.observe(sectionRef.current);
        sectionRef.current.classList.add('section-hidden');
      }}, [])
    return(
        <div className="footer"  ref={sectionRef}>
        <div className='footer-left'>
        <div className='footer-left-1'>
        <img  className='footer-left-1-header' src={img6} alt='img'/>
        </div>
        <div className='footer-left-2'>
            <h1 className='footer-left-2-header'>Company</h1>
            <ul className='footer-left-2-list'>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/'} className='footer-left-2-link'>Home</Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/aboutus'} className='footer-left-2-link'>About us</Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/service'} className='footer-left-2-link'>Services</Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                   <Link to={'/contactus'} className='footer-left-2-link'>
                   Contact Us
                   </Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                   <Link to={'/service'} className='footer-left-2-link'>
                   Careers
                   </Link>
                </li>
            </ul>
        </div>
        <div className='footer-left-3'>
            <h1 className='footer-left-2-header'>Products </h1>
            <ul className='footer-left-2-list'>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                   <Link to={'/services'} className='footer-left-2-link'>
                   Circles Health App
                   </Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/'} className='footer-left-2-link'>Circles Health App Client</Link>
                </li>
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/'} className='footer-left-2-link'>How to use</Link>
                </li>
                {/* <li className='footer-left-2-item' onClick={scrollToTop}>
                    <Link to={'/'} className='footer-left-2-link'>Pricing</Link>
                </li> */}
                <li className='footer-left-2-item' onClick={scrollToTop}>
                    {/* <Link to={'/faqs'} className='footer-left-2-link'>Faqs</Link> */}
                    <ScrollLink to='faqs' spy={true} smooth={true} duration={500} offset={-150} className='footer-left-2-link'>Faqs</ScrollLink>
                </li>
            </ul>
        </div>
        <div className='footer-left-4'>
            <h1 className='footer-left-2-header'>Follow us</h1>
             <div className='footer-left-input-img-2'>
                <img src={img1} alt='img' 
                onClick={()=> handleURL('https://www.facebook.com/EmpyloUK')} 
                className='footer-left-input-img'/>
                <img src={img2} alt='img' className='footer-left-input-img'
                onClick={()=> handleURL('https://instagram.com/empylo_?igshid=MWo3ZW1xZ3hiNmhmcA%3D%3D&utm_source=qr')}/>
                <img src={img4} alt='img' className='footer-left-input-img'
                onClick={()=>handleURL('https://www.linkedin.com/company/empylo/')}/>
            </div>
        </div>
            </div>
            <div className='footer-center'>

            </div>
            <div className='footer-right'>
                <h1 className='footer-right-header'>
                    Copyright &copy; 2024. All right reserved by <span
                    className='footer-right-header-span'>Empylo</span>
                </h1>
            </div>
            </div>
    )
}
export default Footer;