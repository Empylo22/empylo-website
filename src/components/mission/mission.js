import './mission.css';
import img1 from './Frame 123.svg';
import './mission.css';
import { useRef, useEffect } from 'react';
const Mission =()=>{
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
        <div className='mission' ref={sectionRef}>
                <div className='mission-1'>
                <h1 className='mission-header'>
                        About Us
                    </h1>
                    <p className='mission-1-text'>We are on a mission is to enhance 
                    lives through evidence-based digital health solutions that truly 
                    revolutionise the way people live, thrive, and work. Rooted in 
                    clinical expertise, we are a dynamic health technology and consulting company committed 
                    to addressing global health challenges and their associated mental health and physical health risks.
                    </p>


                    <h1 className='mission-header'>
                        Our Mission
                    </h1>
                    <p className='mission-1-text'>
                    Our mission is to improve lives through evidence-based digital health solutions. We want to build products that truly impact the way people live, thrive and work. We want to break social barriers and stigma associated with how people talk and share their social, psychological and physical health needs and outcomes. We want to create a platform where people freely communicate their health needs with those close to them 
                    without feeling ashamed or scared. Our solutions help people to do that in a safe and nurturing way. 
                    </p>
                    <p className='mission-1-text'>
                    We are a clinician led company with a focus on delivering evidence-based solutions that truly meet societal needs and promote global health equity. Our solutions use advanced data analytics to help people to build meaningful social connections 
                    and gain insights to drive individual and group behaviour change and promote positive health outcomes.
                    </p>
                    <p className='mission-1-text'>
                    We have designed innovative solutions for both individual consumers and organisations. 
                    Our core offerings are the <span className='mission-span'>Circles Health App </span> 
                    for personal use and <span className='mission-span'>Circles Health App Client</span> for organisations.
                    </p>
                </div>
                <div className='mission-2'>
                    <img src={img1} alt='img' className='mission-img'/>
                </div>
        </div>
    )
}
export default Mission;