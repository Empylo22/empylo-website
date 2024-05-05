import { useRef, useEffect } from 'react';
import '../features/features.css';
import img1 from './Wavy_Bus-05_Single-11 1.svg';
import img2 from './4548366 1.svg';
import img3 from './3d-casual-life-data-analysis 1 (10).svg';
import img4 from './3d-casual-life-data-analysis 1 (11).svg';
import img5 from './5193104 1.svg';
import img6 from './Wavy_Bus-22_Single-09 2.svg';

const Feature2 =()=>{
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
        <div className="features" ref={sectionRef}>
            <h1 className='features-header'>
                KEY FEATURES
            </h1>
            <div className="features-divs">
                <div className="feature-div">
                    <h1 className='features-header1'>Data-Driven Insights</h1>
                    <p className='features-text'>
                    Empylo empowers organisations with data-driven insights to enhance health and wellbeing outcomes. Utilising advanced analytics, our platform provides valuable metrics and aggregated data for targeted and informed decision-making,
                     enabling organisations to prioritise initiatives that support team health, engagement and productivity.
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Interactive Dashboard</h1>
                    <p className='features-text'>
                    The Empylo Dashboard serves as the central hub for organisations to track and understand the 
                    wellbeing outcomes and needs of their people and teams. Displaying Wellbeing Scores prominently, 
                    it offers insights into employees' mental and emotional health, derived from factors like social, 
                    psychological, physical health, engagement, and job satisfaction. With an intuitive design, 
                    organisations can monitor staff progress over time, facilitating informed decisions for a healthier and more balanced teams.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>2FA and Data Security</h1>
                    <p className='features-text'>
                    Security is paramount for organisations managing people’s wellbeing. 
                    Empylo ensures data security with Two-Factor Authentication (2FA), 
                    adding an extra layer of protection to user accounts. Our robust data security measures, 
                    including encryption protocols and adherence to industry standards, safeguard sensitive 
                    employee information, ensuring confidentiality and compliance. 
                    We are working toward appropriate information security management certifications. 
                    </p>
                    <img src={img3} alt='img' className='features-img'/>
                </div>




                <div className="feature-div">
                    <h1 className='features-header1'>Role Based Features</h1>
                    <p className='features-text'>
                    Empylo introduces role-based access control for organisational wellbeing management. 
                    Administrators have comprehensive control over the platform, managing settings and 
                    overseeing anonymised user activities. Moderator users can be allocated to maintain a positive atmosphere, 
                    and report concerns, fostering a supportive environment conducive to positive wellbeing.

                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Error Handling & System Stability</h1>
                    <p className='features-text'>
                    Empylo prioritises system stability with robust error handling mechanisms. 
                    By detecting and resolving errors efficiently, we minimize downtime and ensure a seamless 
                    user experience for organisations managing staff wellbeing, enhancing reliability and usability.

                    </p>
                    <img src={img5} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Assessment Management</h1>
                    <p className='features-text'>
                    We know that sometimes organisations want to understand and address specific challenges that crop up. The assessment manager tool enables organisations can effectively manage specific organisational health and engagement challenges by creating additional assessments focused on specific topics and challenges, and targeted as specific cohorts and groups within the organisations. Providing specific and deeper insights into people’s experiences and needs. You can multiple, automated assessments 
                    and gather meaningful insights on various challenges and issues at any one time. 
                    </p>
                    <img src={img6} alt='img' className='features-img'/>
                </div>

            </div>
        </div>
    )
}
export default Feature2;