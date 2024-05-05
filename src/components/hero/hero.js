import './hero.css';
import img1 from './Vector (8).svg';
import img2 from './Vector (9).svg';
import img3 from './Vector (10).svg';
import img4 from './Vector 2 (1).svg';
import img5 from './Group 15.png';
import { Link, useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Hero =()=>{
    const sectionRef = useRef(null);
    const location = useLocation()
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
    
    return (
        <>
        <div className='hero' ref={sectionRef}>
            <div className='hero-left'>
                <h1 className='hero-left-header'>
                Empylo Circles: Stronger Connections, Better Health.
                </h1>
                <img src={img4} alt='img' className='line'/>
                <p className='hero-left-text'>At Empylo Health, we believe in the power of meaningful 
                connections to promote positive well-being. Our platform is more than just a 
                place to connect—it's a digital peer support platform where social, physical and mental 
                health flourishes, and individuals are empowered to thrive together. In a society where 
                mental health and social health needs are often kept to oneself, our ethos seeks to breaks 
                societal barriers and encourage people to freely and confidently share their wellbeing outcomes 
                with their chosen circles. Join us as we build 
                a world where everyone feels deeply connected and supported in their pursuit of well-being.
                </p>
                <button className='hero-btn'>
                <Link
            to={'/aboutus'}
            className={`hero-link ${
              location.pathname === '/aboutus' ? 'color' : ''
            }`}
          >
            &larr; Learn more
          </Link>
                </button>
                <div className='hero-left-div'>
                    <div className='hero-div-1'>
                        <img src={img1} alt='img'/>
                    <p className='hero-div-text'>Clinician led</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img2} alt='img'/>
                    <p className='hero-div-text'>Personalized</p>
                    </div>
                    <div className='hero-div-1'>
                        <img src={img3} alt='img'/>
                    <p className='hero-div-text'>Experienced Team</p>
                    </div>
                </div>
            </div>
            <div className='hero-right'>
                <img src={img5} alt='img' className='hero-right-img'/>
            </div>
            </div>


      
            </> 
    )
}
export default Hero;