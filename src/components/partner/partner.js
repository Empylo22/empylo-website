import './partner.css';
import img1 from './Union.svg';
import img2 from './close-up-attractive-carefree-young-woman-sitting-floor 1.svg';
import { useRef, useEffect } from 'react';

const Partner = ()=>{
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
        <div className='partner' ref={sectionRef}>
            <div className='partner-container'>
                <div className='partner-1'>
                    <div className='partner-1-div'>
                        <h1 className='partner-1-header'>WHO WE SERVE</h1>
                        <p className='partner-1-text'>
                            We partner with individuals, employers and healthcare providers
                            to impact people positively.
                        </p>
                    </div>
                    <img src={img1} alt='img'className='partner-1-img'/>
                </div>
                <div className='partner-2'>
                <img src= {img2} alt='img' className='partner-2-img'/>
                <div className='partner-2-div'>
                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>1</span> Individuals</h1>
                        <p className='partner-2-div-1-text'>
                        Empylo is designed to empower individuals on their journey to improved social, 
                        psychological and physical health outcomes. Whether you are an employee, 
                        a community member, or someone simply seeking a more connected and healthier 
                        lifestyle, our platform is perfect for you. By using Empylo, individuals can 
                        access a wealth of resources, connect with others on similar journeys, and take 
                        proactive steps towards improved health. Our evidence-based and user-centric 
                        approach ensures that every individual, along with their loved ones, 
                        can experience a supportive and enriching environment to enhance their 
                        overall quality of life.For anyone wanting to feel more connected and improve their health outcomes, 
                        together with their loved ones.
                        </p>
                    </div>

                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>2</span> Organisations</h1>
                        <p className='partner-2-div-1-text'>
                        Empylo is dedicated to partnering with a diverse range of organisation, 
                        including employers, insurers, non-profits, and communities with a shared 
                        goal of enhancing social connectedness and health outcomes of their people and teams. 
                        By leveraging our platform, organisations can drive key organisational objectives while 
                        fostering a culture of inclusive health and wellbeing. Whether seeking to improve employee 
                        satisfaction, retention, performance, or to enhance community engagement, or to support the 
                        mission of non-profits, Empylo offers tailored solutions that make a positive impact on both individuals and the collective.
                        </p>
                    </div>

                    <div className='partner-2-div-1'>
                        <h1 className='partner-2-div-1-header'><span className='span'>3</span> Healthcare Providers</h1>
                        <p className='partner-2-div-1-text'>
                        Empylo offers a revolutionary opportunity to integrate technology and innovation into 
                        social prescribing practices in primary healthcare settings. Our digital peer support 
                        solution can significantly improve patient outcomes and self-management in primary 
                        health settings. By harnessing the power of Empylo, healthcare providers can effectively 
                        reduce preventable costs, and decrease referrals to secondary care services, and reduce 
                        undue pressure on healthcare staff and services. This not only benefits patients but also 
                        contributes to the overall efficiency and effectiveness of NHS services, aligning with the 
                        NHS Primary Care Delivery Plan. As a clinician-led company, we serve as a valuable partner 
                        for healthcare providers seeking to optimise patient care through digital solutions.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Partner;