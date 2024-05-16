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
                    <h1 className='features-header1'>Well-being scores</h1>
                    <p className='features-text'>
                    The Empylo Dashboard serves as your central hub for tracking and understanding your personal and group health scores, calculated based on various factors including social, psychological and physical health.  
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Activities Library</h1>
                    <p className='features-text'>
                    Empylo understands that personal growth is a continuous journey. The activities library allows you to access a curated set of resources, activities, and challenges tailored to enhance your skills and wellbeing.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Data Security</h1>
                    <p className='features-text'>
                    Our robust data security measures ensure that your information remains confidential and secure with Multi-Factor Authentication (MFA), encryption protocols, and adherence to industry best practices
                    </p>
                    <img src={img3} alt='img' className='features-img'/>
                </div>




                <div className="feature-div">
                    <h1 className='features-header1'>Chat and Call</h1>
                    <p className='features-text'>
                    Empylo goes beyond traditional wellbeing platforms by offering real-time chat and call features to connect with your circle, wellbeing professionals, or moderators directly within the app. 
                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>


        

            </div>
        </div>
    )
}
export default Features;
