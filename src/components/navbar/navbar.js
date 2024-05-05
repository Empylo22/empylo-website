import './navbar.css';
import img1 from './Secondary Turquoise 1.svg';
import { Link, useLocation } from 'react-router-dom';
import { BsListNested } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';

const Navbar = () => {
    const [isClick, setIsClick]= useState(false)
  const scrollToTop= ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
  }
  
  const location = useLocation();
   const [scrolled, setScrolled] = useState(false);

  return (
    <div className='bdt-header'>
      <img src={img1} alt='img'/>
      <ul className="bdt-list">
        <li className="bdt-item">
          <Link to={'/'} className={`header-link ${
              location.pathname === '/' ? 'color' : ''
            }`}>
            Home
          </Link>
        </li>
        <li className="bdt-item" onClick={scrollToTop}>
          <Link
            to={'/aboutus'}
            className={`header-link ${
              location.pathname === '/aboutus' ? 'color' : ''
            }`}
          >
            About Us
          </Link>
        </li>
        <li className="bdt-item" onClick={scrollToTop}>
          <Link
            to={'/products'}
            className={`header-link ${
              location.pathname === '/products' ? 'color' : ''
            }`}
          >
            Products
          </Link>
        </li>

        <li className="bdt-item" onClick={scrollToTop}>
          <Link className={`header-link ${
              location.pathname === '/service' ? 'color' : ''
            }`} to={'/service'}>
            Services
          </Link>
        </li>
        <li className="bdt-item bdt-item-1" onClick={scrollToTop}>
          <Link className="header-link-1" to={'/contactus'}>
            Contact Us
          </Link>
        </li>
      </ul>
      <BsListNested
        className={`${isClick ? 'none' : ''} open`}
        onClick={() => setIsClick(true)}
      />
      {isClick ? (
        <>
          <div className="ham-div">
            <AiOutlineClose
              className="close"
              onClick={() => setIsClick(false)}
            />
            <ul className="header-lists">
              <li className="header-items">
                <Link to={'/'} className={`header-link ${
              location.pathname === '/' ? 'color' : ''
            }`}>
                  Home
                </Link>
              </li>
              <li className="header-items" onClick={scrollToTop}>
                <Link
                  to={'/aboutus'}
                  className={`header-link ${
                    location.pathname === '/aboutus' ? 'color' : ''
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li className="header-items" onClick={scrollToTop}>
                <Link
                  to={'/products'}
                  className={`header-link ${
                    location.pathname === '/products' ? 'color' : ''
                  }`}
                >
                  Products
                </Link>
              </li>
              <li className="header-items" onClick={scrollToTop}>
                <Link className={`header-link ${
              location.pathname === '/service' ? 'color' : ''
            }`} to={'/service'}>
                  Services
                </Link>
              </li>
              <li
                className="header-items bdt-item-1"
                onClick={scrollToTop}
              >
                <Link className="header-link-1" to={'/contactus'}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </>
      ) : (
        ''
      )}
    </div>
  );
};

export default Navbar;

