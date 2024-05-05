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
                    Empylo Health is a technology and consulting company dedicated to tackling global 
                    health challenges and their associated risks. Our innovative solutions leverage advanced data 
                    analytics to empower individuals and organisations in building 
                    meaningful connections and driving positive behavior change for improved health outcomes.
                    </p>
                    <p className='wwa-1-3-text'>
                    We believe that stronger connections lead to better health outcomes and 
                    we have set out on a mission to tackle loneliness, and mental and physical health. 
                    Research shows that loneliness and social isolation are linked to poor mental and 
                    physical health outcomes, as well as premature mortality.  Our solutions are designed 
                    to address the social, mental and physical health needs of both individuals and organisations, 
                    offering tailored approaches to personal and group health management.
                    </p>
                    <p className='wwa-1-3-text'>
                    For individual consumers, we offer the Circles Health App, a user-friendly platform that empowers users to build stronger connections with their loved ones and take control of their health and wellbeing. Through features such as interactive dashboards with personalised and group insights, and community engagement tools, 
                    the Circles Health App empowers users make insightful decisions and adopt healthier lifestyles.
                    </p>
                    {
                      isClick ? (
                        <>
                        <p className='wwa-1-3-text'>
                    For organisations, we offer the Circles Health App Client, a comprehensive solution designed 
                    to support a diverse range of organisational health and wellbeing initiatives. With features 
                    such as role-based access control, advanced assessment management, and integration support with 
                    existing systems, the Circles Health App Client enables organisations to effectively manage and 
                    promote the employee health and wellbeing, 
                    make faster and insight-led decisions, and plan more effectively for the future workforce needs.
                    </p>
                    <p className='wwa-1-3-text'>
                    As part of our mission to tackle loneliness and improve mental and physical, 
                    we also offer training and consultancy 
                    services for groups, communities and organisations to promote better connections and health outcomes. 
                    </p>
                    <p className='wwa-1-3-text'>
                    Empylo Health is a clinician-led company committed to driving positive health outcomes through 
                    extensive research and evidence, innovation, data analytics, and personalised approaches. 
                    Whether you're an individual looking to improve your health or an organisation 
                    seeking to support your teams, Empylo Health has the expertise and solutions to help you succeed. 
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
