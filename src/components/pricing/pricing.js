import img1 from './CheckCircle@2x.svg';
import './pricing.css';
import { useRef, useEffect } from 'react';

const Pricing =()=>{
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
        <div className="pricing" ref={sectionRef}>
            <h1 className="pricing-header">
                Pricing
            </h1>
            <div className="pricing-flex">

                <div className="pricing-div">
                    <h1 className='pricing-header2'>BASIC</h1>
                    <h2 className='pricing-header3'>$0</h2>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                </div>

                <div className="pricing-div">
                    <h1 className='pricing-header2'>BASIC</h1>
                    <h2 className='pricing-header3'>$0</h2>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                </div>


                <div className="pricing-div">
                    <h1 className='pricing-header2'>BASIC</h1>
                    <h2 className='pricing-header3'>$0</h2>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                    <div className='pricing-d'>
                        <img src={img1} alt='img' className='pricing-img'/>
                        <p className='pricing-text'>Lorem ipsum dolor sit</p>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Pricing;