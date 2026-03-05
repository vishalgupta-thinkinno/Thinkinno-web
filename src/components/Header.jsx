import { Link, Links, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import '../App.css'
import { RxCross2 } from 'react-icons/rx';
import { NavLink } from 'react-router-dom';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

const Header = ()=>{

  const content = useSelector((state) => state.textContentSlice?.[0]);
  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup (very important)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <>
      <div className={`justify-content-between header row mx-0 ${styles.webNav}  ${scrolled ? "scrolled" : ''}`} id='#mainHeader'>
        <div className='col-md-3 col-12 d-flex align-items-center' >
          <NavLink><img src={`${content?.header?.imageLink1}`} className={`${styles.logo}  `} /></NavLink>
        </div>

        <div className='d-flex col-md-9 col-12 justify-content-end'>
           <div className="d-flex justify-content-end navbar-collapse me-4" id="navbarNav">
              <ul className="navbar-nav d-flex flex-row">
                <li className={`nav-item ${styles.menuLink}} font16 px-3 py-3 `}>
                  <NavLink className="nav-link" to="/" end>{content?.header?.nav1}</NavLink>
                </li>

                <li className={`nav-item ${styles.menuLink}  } font16 px-3 py-3`}>
                  <NavLink className="nav-link" to="/about">{content?.header?.nav2}</NavLink>
                </li>

                <li className={`nav-item ${styles.menuLink} } font16 px-3 py-3`}>
                  <NavLink className="nav-link" to="/services">{content?.header?.nav3}</NavLink>
                </li>

                <li className={`nav-item px-3 py-3 dropdown font16 ${styles.menuLink}`}>
                  <Link className="nav-link dropdown-toggle font16" data-bs-toggle="dropdown" id='#solutions'>
                    {content?.header?.nav4.title}
                  </Link>

                  <ul className="dropdown-menu">
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/solutions"> Solutions</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/leadVictor"> {content?.header?.nav4.menu1}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/digicard">{content?.header?.nav4.menu2}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/lms">{content?.header?.nav4.menu3}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/cargotrackingsystem">{content?.header?.nav4.menu4}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/kams">{content?.header?.nav4.menu5}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="/qms">{content?.header?.nav4.menu6}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-3`} to="ecommerce">{content?.header?.nav4.menu7}</NavLink></li>
                  </ul>
                </li>

                <li className={`nav-item font16 ${styles.menuLink} px-3 py-3`}>
                  <NavLink className="nav-link" to="/testimonials">{content?.header?.nav5}</NavLink>
                </li>

                <li className={`nav-item font16 ${styles.menuLink}  } px-3 py-3`}>
                  <NavLink className="nav-link" to="/case-studies">{content?.header?.nav6}</NavLink>
                </li>

                <li className={`nav-item font16 px-3 py-3 dropdown`}>
                  <Link className="nav-link dropdown-toggle" to='/case-studies' data-bs-toggle="dropdown">
                    {content?.header?.nav7.title}
                  </Link>

                  <ul className="dropdown-menu">
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-4`} to="/careers">{content?.header?.nav7.menu1}</NavLink></li>
                    <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16  py-2 px-4`} to="/lifeThinkinno">{content?.header?.nav7.menu2}</NavLink></li>
                  </ul>
                </li>
                
                <li className={`nav-item font16 ${styles.menuLink}   px-3 py-3`}>
                  <NavLink className="nav-link" to="/contact">{content?.header?.nav8}</NavLink>
                </li>
              </ul>
          </div>
        </div>
      </div>


{/* Mobile header */}
    <div className={` px-2 py-2 ${styles.mobileNav}`}>
      <div className='col-8 px-0 d-flex align-items-center' >
        <img src={`${content?.header?.imageLink1}`} className={styles.logo} />
      </div>

      <div className='col-4 px-0 d-flex align-items-center justify-content-end ' >
         <div className={`p-2 bg-black`} onClick={() => setIsOpen(true)}>
             <GiHamburgerMenu className={`${styles.menuBar}`} />
         </div>
      </div>
    </div>

      <MobileMenu
       isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        content={content}
      />

    </>
  )
}

export default Header;