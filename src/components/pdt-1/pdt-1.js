import './pdt-1.css';
import img1 from './iPhone 15 Pro.svg';
import img2 from './pngwing 3 (1).svg';
import img3 from './pngwing 4 (1).svg';
import { useEffect, useRef } from 'react';
const Pdt1 =()=>{
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
        <div className="pdt1" ref={sectionRef}>
            <div className='pdt1-1'>
                <h1 className='pdt1-header'>Circles Health App by Empylo</h1>
                <h1 className='pdt1-header2'>
                    Stronger <span className='pdt1-span'>Connections</span>, Better <span className='pdt1-span'>Health</span>
                </h1>
                <p className='pdt1-text'>
                At the heart of our offerings is the Circles Health App, a user-centric solution designed for personal use. 
                This app is tailored to empower individuals on their journey to stronger connections 
                and better health through personalised and actionable insights for positive lifestyle changes.
                </p>
                <div className='pdt1-imgs'>
                    <img  src={img2} alt='img' className='pdt1-img2'/>
                    <img src={img3} alt='img' className='pdt1-img3'/>
                </div>
            </div>
            <div className='pdt1-2'>
                <img src={img1} alt='img' className='pdt1-img'/>
            </div>
        </div>
    )
}
export default Pdt1