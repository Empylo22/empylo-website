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
                    <p className='mission-1-text'>Rooted in clinical expertise, we are a dynamic software and consulting company committed to addressing global health challenges.
                    </p>


                    <h1 className='mission-header'>
                        Our Mission
                    </h1>
                    <p className='mission-1-text'>
                   We want to build products that truly impact the way people live, thrive and work. We want to break social barriers and stigma associated with mental health and loneliness. Our solutions help people to communicate their health goals and outcomes in a safe and nurturing environment. 
                    </p>
                    <p className='mission-1-text'>
                    We use evidence-based solutions to promote global health equity. Using advanced data analytics to gain insights that drive behaviour change and positive health outcomes.
                    </p>
                </div>
                <div className='mission-2'>
                    <img src={img1} alt='img' className='mission-img'/>
                </div>
        </div>
    )
}
export default Mission;
