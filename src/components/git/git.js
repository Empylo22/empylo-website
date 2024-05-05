import './git.css';
import img1 from './Dots component (2).svg';
import img2 from './Vector 2.png';
import img3 from './Ellipse 3.png';
import img4 from './Frame 77.svg';
import { useRef, useEffect, useState } from 'react';
import { BallTriangle } from 'react-loader-spinner';

const Git =()=>{
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    message: '',
});
const handleChange = (e)=>{
    e.preventDefault()
    setFormData({
        ...formData, [e.target.name ] : e.target.value
    })
};
const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setIsLoading(true)
      const response = await fetch('https://empylo-neon.vercel.app/api/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
      setIsLoading(false)
        alert("form submitted successfully")
      } else {
        alert("There is error submitting this form please submit again");
      }
    } catch (error) {
      setIsLoading(false)
        alert(error)
    }};
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
        <div className='git' ref={sectionRef}>
            <img src={img1} alt='img' className='git-img'/>

            <div className='git-2'>
            <div className='git-div'>
                <img src={img4} alt='img' className='git-img-4'/>
                <div className='git-left'>
                    <form className='git-form' onSubmit={handleSubmit}>
                        <div className='git-inputs'>
                        <input placeholder='First Name' type='text' className='git-input' name='firstName' onChange={handleChange}/>
                        <input placeholder='Last Name' type='text' className='git-input' name='lastName' onChange={handleChange}/>
                        </div>
                        <input placeholder='Email' type='email' className='input' name='email' onChange={handleChange}/>
                        <input placeholder='Company Name' type='text' className='input' name='companyName' onChange={handleChange}/>
                        <textarea placeholder='Message' type='text' className='input-2' name='message' onChange={handleChange}>

                        </textarea>
                        <button className='git-btn' type='submit'>
                        {isLoading?  (<BallTriangle
                        height={80}
                        width={80}
                        radius={5}
                        color="#0F2C7D"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                        />): (<>CONTACT US</>)}
                        </button>
                        <p className='git-form-text'>
                        By submitting this form, you agree to us storing and using your 
                        information to assist with your inquiry. 
                        If you wish for us to delete this data, please let us know via this same form.
                        </p>
                    </form>
                    <img src={img3} alt='img' className='git-img-3'/>
                </div>
                </div>
                
            <div className='git-div-2'>
                    <h1 className='git-div-2-header'>
                    Talk to Empylo about how we can transform your organisation today!
                    </h1>
                    <p className='git-div-2-text'>
                    The "Contact Us" button serves as a direct link to our contact form, offering visitors a streamlined means of reaching out to us. Strategically placed, this button invites users to initiate communication effortlessly. Upon clicking, users are directed to our contact form, where they can conveniently submit inquiries, messages, or feedback. With its clear and concise label, the "Contact Us" button 
                    simplifies the process of engaging with our team, fostering seamless communication and interaction.
                    </p>
                    <p className='git-div-2-text'>
                    Join us in championing a workplace that values mental health, and together, 
                    let's create a nurturing environment where every employee can thrive.
                    </p>
                </div>
                </div>
            <img src={img2} alt='img' className='git-img-2' />
        </div>
    )
}
export default Git
