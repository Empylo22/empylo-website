import '../service1/service1.css';
import img1 from'./Rectangle 20.svg';
import { useRef, useEffect } from 'react';

const Service2 = ()=>{
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
        <div className="service2" ref={sectionRef}>
            <div className='service1-2'>
                <h1 className='service-header'>Data Analytics</h1>
                <p className='service-text2'>
                We have leveraged advanced analytics and AI to enable users to seamlessly identify personal 
                and group health outcomes and fast and accurate data insights, helping people to support 
                themselves and others, and to drive positive personal and organisation health outcomes.
                </p>
            </div>

            <div className='service1-1'>
                <img src={img1} alt='img' className='service-img'/>
            </div>
        </div>
    )
}
export default Service2;