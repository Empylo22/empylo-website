import img1 from './3d-casual-life-data-analysis 1 (5).svg';
import img2 from './3d-casual-life-data-analysis 1 (6).svg';
import img3 from './3d-casual-life-data-analysis 1 (7).svg';
import img4 from './3d-casual-life-data-analysis 1 (8).svg';
import img5 from './3d-casual-life-data-analysis 1 (9).svg';
import './features.css';
import { useRef, useEffect } from 'react';

const Features =()=>{
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
                    <h1 className='features-header1'>Dashboard with well-being scores</h1>
                    <p className='features-text'>
                    The Empylo Dashboard serves as your central hub for tracking and understanding your personal 
                    and group health outcomes. Your Wellbeing Score, prominently displayed, provides a quick snapshot 
                    of your overall health. This score is calculated based on various factors including social, 
                    psychological and physical health. The intuitive design ensures that you can effortlessly 
                    monitor your progress over time, empowering you to make informed decisions for a healthier, 
                    more balanced life. What’s more, circle members can view each other’s’ health scores too, 
                    enabling them to identify when to reach 
                    out and offer support to one another, and tackling social stigma one circle at a time.  
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Self-development & Group Activities</h1>
                    <p className='features-text'>
                    Empylo understands that personal growth is a continuous journey. The Self-development feature allows you to access a curated set of resources, activities, and challenges tailored to enhance your skills and wellbeing. Additionally, the Group Activities feature fosters a sense of community by enabling you to participate in collective activities with your loved on and your colleagues. Whether you're focusing on personal growth or building better relational skills, Empylo's dynamic 
                    platform supports your journey towards a more fulfilling and connected personal and work life.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>2FA and Data Security</h1>
                    <p className='features-text'>
                    Empylo prioritises the security of your personal and wellbeing-related information. 
                    Two-Factor Authentication (2FA) adds an extra layer of protection to your account, 
                    enhancing the overall security of the platform. Our robust data security measures ensure 
                    that your sensitive information remains confidential. With encryption protocols and adherence to 
                    industry best practices, Empylo provides a secure space for you to engage in wellbeing assessments, 
                    meaningful communication, and personal development with peace of mind.
                    </p>
                    <img src={img3} alt='img' className='features-img'/>
                </div>




                <div className="feature-div">
                    <h1 className='features-header1'>Instant Messaging and Voice Calls</h1>
                    <p className='features-text'>
                    Empylo goes beyond traditional wellbeing platforms by offering real-time communication features. The Instant Messaging and Voice Calls functionality allows you to connect with your circle, wellbeing professionals, or moderators directly within the app. Whether you are seeking or providing support, or discussing group activities, the integrated messaging and voice call features streamline communication, promoting a 
                    sense of connection and support among users. Some might call it a revolutionary social platform! 
                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Admin & Moderator Roles</h1>
                    <p className='features-text'>
                    To ensure a safe and well-moderated environment, Empylo introduces Admin and Moderator roles. 
                    For the Client App, admins have comprehensive control over the platform, managing settings and 
                    overseeing user activities. For the Circles Health App, moderators play a vital role in managing circles and ensuring a positive atmosphere, and reporting any concerns or misuse of the app. These roles are allocated to app users and contribute to a secure and supportive space, 
                    where everyone can engage openly while maintaining a respectful and inclusive community.
                    </p>
                    <img src={img5} alt='img' className='features-img'/>
                </div>

            </div>
        </div>
    )
}
export default Features;