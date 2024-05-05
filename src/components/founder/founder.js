import img1 from '../git/Dots component (2).svg';
import img2 from './Rectangle 17.svg';
import img3 from '../footer/img4.png';
import img4 from '../footer/img3.png';
import './founder.css';
import { useRef, useEffect } from 'react';

const Founder =()=>{
    const sectionRef = useRef(null);

    const handleURL =(url)=>{
        window.open(url, '_blank')
    }

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
        <div className="founder" ref={sectionRef}>
            <h1 className='founder-header'>
                Our Founder
            </h1>
            <div className='founder-2'>
                <img src={img2} alt='img' className='founder-2-img'/>
                <button className='founder-btn2'>
                        Gracious Musariri<br/> Founder and CEO
                    </button>
                <div className='founder-2-div'>
                    <p className='founder-2-text'>
                    Gracious Musariri is a registered mental health nurse practitioner with over a decade of 
                    dedicated service within the NHS and private sectors. She has been involved in multiple 
                    global health projects in Europe, Asia and Africa and continues to pursue her mission to 
                    promote global health equity. She enjoys combining her extensive clinical practice, digital 
                    leadership experience, and a passion for global health advocacy to deliver 
                    innovative digital health solutions to tackle our pressing global health challenges.
                    </p>
                    <div className='founder-imgs'>
                        <img src={img3} alt='img' className='founder-d-img'
                        onClick={()=> handleURL('https://www.linkedin.com/in/gc18763?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app')}/>
                        <img src={img4} alt='img' className='founder-d-img'
                        onClick={()=> handleURL('https://twitter.com/gcmusar')}/>
                    </div>
                    <button className='founder-btn'>
                        Gracious Musariri<br/> Founder and CEO
                    </button>
                </div>
            </div>
            <div>
            <img src={img1} alt='img' className='founder-img'/>
            </div>
        </div>
    )
}
export default Founder