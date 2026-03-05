import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import styles from './Header.module.css';
import { Link } from "react-router-dom";
import MobileAccordion from "./Accordion";
import MobileAccordion2 from "./Accordion2";

function MobileMenu({ isOpen, onClose, content }) {
  const location = useLocation();

  // Close menu automatically on route change
  useEffect(() => {
    onClose();
  }, [location.pathname]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-backdrop ${isOpen ? "show" : ""}`}
        onClick={onClose}
      ></div>

      {/* Side Drawer */}
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <button className={`close-btn ${ isOpen ? 'd-block' : 'd-none'}`} onClick={onClose}>
          ✕
        </button>


        <div className='col-8 px-0 d-flex align-items-center' >
          <img src={`${content?.header?.imageLink1}`} className={styles.logo} />
        </div>

<div className="menuContent">

        <ul className="list-unstyled mt-4">
          <li>
            <NavLink to="/" end className="mobile-link">
              {content?.header?.nav1}
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" className="mobile-link">
              {content?.header?.nav2}
            </NavLink>
          </li>

          <li>
            <NavLink to="/services" className="mobile-link">
              {content?.header?.nav3}
            </NavLink>
          </li>


          <MobileAccordion2
              title={`${ content?.header?.nav4.title}`}
              link1={{ path: "/solutions", label: `Solutions`    }}
              link2={{ path: "/leadVictor", label: `${content?.header?.nav4.menu1}`} }
              link3={{ path: "/digicard", label: `${content?.header?.nav4.menu2}`} }
              link4={{ path: "/lms", label: `${content?.header?.nav4.menu3}`} }
              link5={{ path: "/cargotrackingsystem", label: `${content?.header?.nav4.menu4}`} }
              link6={{ path: "/kams", label: `${content?.header?.nav4.menu5}`} }
              link7={{ path: "/qms", label: `${content?.header?.nav4.menu6}`} }
              link8={{ path: "/ecommerce", label: `${content?.header?.nav4.menu7}`} }
            />


          <li>
            <NavLink className="mobile-link" to="/testimonials">{content?.header?.nav5}</NavLink>
          </li>

          <li>
            <NavLink className="mobile-link" to="/case-studies">{content?.header?.nav6}</NavLink>
          </li>

          {/* <li>
            <Link className="dropdown-toggle mobile-link" data-bs-toggle="dropdown">
              {content?.header?.nav7.title}
            </Link>

            <ul className="dropdown-menu">
              <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16 py-2 px-4 `} to="/careers">{content?.header?.nav7.menu1}</NavLink></li>
              <li><NavLink className={`${styles['dropdown-item']} dropdown-item font16  py-2 px-4`} to="/lifeThinkinno">{content?.header?.nav7.menu2}</NavLink></li>
            </ul>
          </li> */}

            <MobileAccordion
              title={`${ content?.header?.nav7.title}`}
              link1={{ path: "/careers", label: `${content?.header?.nav7.menu1}`    }}
              link2={{ path: "/lifeThinkinno", label: `${content?.header?.nav7.menu2}`} }
            />

          
          <li>
            <NavLink className="mobile-link" to="/contact">{content?.header?.nav8}</NavLink>
          </li>


        </ul>
</div>
      </div>
    </>
  );
}

export default MobileMenu;