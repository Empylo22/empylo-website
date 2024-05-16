import img1 from'./Rectangle 22 (1).svg';
import '../service1/service1.css';
import { useRef, useEffect } from 'react';

const Service3 =()=>{
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
        <div className="service1" ref={sectionRef}>
            <div className='service1-1'>
                <img src={img1} alt='img' className='service-img'/>
            </div>
            <div className='service1-2'>
                <h1 className='service-header'>Training and Consultancy</h1>
                <p className='service-text'>
                Our experts provide analysis, in-house multifactorial health screening, advice and education, and signpost to relevant support. 
                </p>
            </div>
        </div>
    )

}
export default Service3;
