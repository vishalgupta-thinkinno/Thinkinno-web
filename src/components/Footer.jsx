import React from "react";
import { useSelector } from "react-redux";
import "./footer.css";
import {
  FaEnvelope,
  FaChevronRight,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGoogle
} from "react-icons/fa";

function Footer() {
  const content = useSelector((state) => state.textContentSlice?.[0]);
  const footer = content?.footer;

  if (!footer) return null;

  const topBar = footer[0];
  const columns = footer[1];

  return (
    <footer className="main-footer">

      {/* Contact Bar */}
      <div className="footer-contact-wrapper">
        <div className="container">
          <div className="footer-contact-bar d-flex justify-content-between align-items-center">

            {/* Email Section */}
            <div className="footer-contact-email d-flex align-items-center gap-3">
              <div className="footer-icon-circle">
                <FaEnvelope />
              </div>

              <div>
                <div className="footer-email-label">
                  {topBar.title1}
                </div>
                <div className="footer-email-text">
                  {topBar.subheading}
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="footer-contact-btn">
              {topBar.button}
            </button>

          </div>
        </div>
      </div>

      {/* ⚫ Main Footer Content */}
      <div className="container footer-content">
        <div className="row gy-4">

     <div className="col-12 col-sm-6 col-lg-3 text-center text-sm-start">
  <h5 className="footer-heading">{columns[0].title1}</h5>

  <p className="footer-text">
    {columns[0].subheading}
  </p>

  <div className="d-flex justify-content-center justify-content-sm-start gap-3 mt-4">
    <div className="social-box"><FaFacebookF /></div>
    <div className="social-box"><FaLinkedinIn /></div>
    <div className="social-box"><FaGoogle /></div>
  </div>
</div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading">{columns[1].title2}</h5>
            <ul className="list-unstyled footer-list">
              <li><FaChevronRight /> {columns[1].menu1}</li>
              <li><FaChevronRight /> {columns[1].menu2}</li>
              <li><FaChevronRight /> {columns[1].menu3}</li>
              <li><FaChevronRight /> {columns[1].menu4}</li>
              <li><FaChevronRight /> {columns[1].menu5}</li>
              <li><FaChevronRight /> {columns[1].menu6}</li>
              <li><FaChevronRight /> {columns[1].menu7}</li>
            </ul>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <h5 className="footer-heading">{columns[2].title}</h5>
            <ul className="list-unstyled footer-list">
              <li><FaChevronRight /> {columns[2].menu1}</li>
              <li><FaChevronRight /> {columns[2].menu2}</li>
              <li><FaChevronRight /> {columns[2].menu3}</li>
              <li><FaChevronRight /> {columns[2].menu4}</li>
              <li><FaChevronRight /> {columns[2].menu5}</li>
              <li><FaChevronRight /> {columns[2].menu6}</li>
            </ul>
          </div>

         <div className="col-12 col-sm-6 col-lg-3">
  <h5 className="footer-heading">{columns[3].title}</h5>

  <p className="footer-text d-flex align-items-start">
    <FaMapMarkerAlt className="footer-red-icon me-2 fs-3" />
    {columns[3].subheading}
  </p>

  <p className="footer-text d-flex align-items-center">
    <FaEnvelope className="footer-red-icon me-2 fs-5" />
    {columns[3].link1}
  </p>
</div>

        </div>

        <hr className="footer-divider" />

        <div className="text-center footer-copy">
          {columns[3].copyright}
        </div>
      </div>

    </footer>
  );
}

export default Footer;