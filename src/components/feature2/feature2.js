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
                    <h1 className='features-header1'>Data Insights</h1>
                    <p className='features-text'>
                    Empylo uses advanced analytics to enable faster and more informed decision-making and prioritisation.
                    </p>
                    <img src={img1} alt='img' className='features-img'/>
                </div>


                <div className="feature-div">
                    <h1 className='features-header1'>Dashboard</h1>
                    <p className='features-text'>
                   Empylo dashboard serves as the central hub for organisations to track health outcomes derived from social, psychological, physical health factors.
                    </p>
                    <img src={img2} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Assessment Manager</h1>
                    <p className='features-text'>
                    The assessment manager tool enables organisations to effectively assess challenges by creating additional assessments focused on specific topics for specific cohorts and groups within the organisations.

                    </p>
                    <img src={img4} alt='img' className='features-img'/>
                </div>



                <div className="feature-div">
                    <h1 className='features-header1'>Multi-Roles</h1>
                    <p className='features-text'>
                    Empylo introduces role-based access control for organisational wellbeing management. Administrators and Moderator users can be allocated to maintain a positive atmosphere and report concerns.

                    </p>
                    <img src={img5} alt='img' className='features-img'/>
                </div>


            </div>
        </div>
    )
}
export default Feature2;
