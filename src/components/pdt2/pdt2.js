import img1 from './MacBook Pro 16.svg';
import './pdt2.css';
import { useRef, useEffect } from 'react';

const Pdt2 =()=>{
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
        <div className='pdt2' ref={sectionRef}>
            <div className='pdt2-1'>
                <h1 className='pdt2-header'>Circles Health App Client</h1>
                <h1 className='pdt2-header2'>
                    Stronger <span className='pdt2-span'>Connections</span>, Better <span className='pdt2-span'>Health</span>
                </h1>
                <p className='pdt2-text'>
                For organisations, the Circles Health App Client is a comprehensive solution that extends the benefits 
                of our platform to a group setting. This offering is meticulously designed to enhance social connectivity, 
                drive collective positive behavior change, and contribute to a healthier and more thriving organisational culture overall business outcomes. 
                </p>
                <button className='pdt2-btn'>Get started</button>
            </div>
            <div className='pdt2-2'>
                <img src={img1} alt='img' className='pdt2-img' />
                {/* <img
                src="small-image.jpg"
                srcSet="small-image.jpg 300w, medium-image.jpg 600w, large-image.jpg 900w"
                alt="Responsive Image"
      /> */}
            </div>
        </div>
    )
}
export default Pdt2;