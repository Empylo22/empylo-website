import './offer.css';
import img1 from './Frame 65.png';
import img2 from './Frame 66.png';
import img3 from './Frame 67.png';
import img4 from './Divider.png';
import { useRef, useEffect } from 'react';

const Offer = ()=>{
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
    
    return (
        <>
        <div className='offer' ref={sectionRef}>
            <h1 className='offer-header'>What we offer</h1>
            <h2 className='offer-header-2'>We have the technology and network of talent to help.</h2>
            <div className='offer-images'>
                <img src={img1} alt='img' className='offer-img'/>
                <img src={img2} alt='img' className='offer-img'/>
                <img src={img3} alt='img' className='offer-img'/>
            </div>
            <img src={img4} alt='img' className='offer-line'/>
            <div className='offer-div'>
                <div className='offer-div-1'>
                <img src={img1} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header'>Peer Support</h1>
                    <p className='offer-div-text'>Enabling people to create and nurture 'Circles' with friends, family, and colleagues to build health-focused connections and reduce loneliness and it’s risks.
                    </p>
                </div>
                <div className='offer-div-1'>
                <img src={img2} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header'>Data Insights and Artificial Intelligence (AI)</h1>
                    <p className='offer-div-text'>
                    Enabling users to seamlessly identify personal and group health outcomes and insights, helping people to achieve positive personal and organisation health outcomes.
                    </p>
                </div>
                <div className='offer-div-1'>
                <img src={img3} alt='img' className='offer-img-m'/>
                    <h1 className='offer-div-header s1'>Training and Consultancy</h1>
                    <p className='offer-div-text'>
                    Our experts provide analysis, in-house multifactorial health screening, advice and education, and signpost to relevant support. 
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}
export default Offer;
