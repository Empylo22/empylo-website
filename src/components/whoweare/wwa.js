import './wwa.css';
import img1 from './Dots component.svg';
import img2 from './Dots component (1).svg';
import img3 from './Who we are images.svg';
import img4 from './Vector 5.svg';
import { useRef, useEffect, useState } from 'react';
const Wwa =()=>{
    const sectionRef = useRef(null);
    const [isClick, setIsClick] = useState(false)
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
        <div className='wwa' ref={sectionRef}>
            <img src={img2} alt='img' className='wwa-1-1-mobile'/>
            <div className='wwa-1'>
                <div className='wwa-1-left'>
                <h1 className='wwa-1-header'>WHO WE ARE</h1>
                <p className='wwa-1-text'>Data-driven, Digital Health Solutions</p>
                </div>
                <img src={img1} alt='img' className='wwa-1-img'/>
            </div>
            <div className='wwa-2'>
                <img className='wwa-1-2' src={img3} alt='img'/>
                <div className='wwa-1-3'>
                    <p className='wwa-1-3-text'>
                    Empylo Health is a software and consulting company dedicated to tackling global health challenges. 
Research shows that loneliness and social isolation are linked to poor mental and physical health outcomes, as well as premature mortality.
                    </p>
                    <p className='wwa-1-3-text'>
                   We developed Circles Health App to empower societies to make insightful decisions and adopt healthier lifestyles.
                    </p>
                    <p className='wwa-1-3-text'>
                    Circles Health App Client is a comprehensive solution designed to support a diverse range of organisational health and inclusion initiatives.
                    </p>
                    {
                      isClick ? (
                        <>
                        <p className='wwa-1-3-text'>
                    As part of our mission to break social barrier and create safe environments, we also offer workshops and consultations for groups, communities and organisations to drive stronger connections and better health outcomes.
                    </p>
                        </>
                      ) : ('')
                    }
                    <p className='wwa-1-3-btn'>&rarr; {
                      !isClick ? <span onClick={()=>setIsClick(true)}>Read more</span> : 
                      <span onClick={()=> setIsClick(setIsClick(false))}>Read less</span>
                    }</p>
                </div>
                <img src={img4} alt='img' className='wwa-1-4'/>
            </div>
            <img src={img2} alt='img' className='wwa-1-1'/>
        </div>
    )
}
export default Wwa;
