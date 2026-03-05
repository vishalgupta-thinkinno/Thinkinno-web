import { useState } from "react";
import { NavLink } from "react-router-dom";

function MobileAccordion({ title, link1, link2, link3, link4, link5, link6, link7, link8 }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-accordion">
      
      {/* Accordion Header */}
      <button
        className={`accordion-header px-3 ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <span className={`arrow ${open ? "rotate" : ""}`}>▾</span>
      </button>

      {/* Accordion Body */}
      <div className={`accordion-body ${open ? "show" : ""}`}
      style={{marginLeft : '24px', borderLeft : '1px solid #707070'}}
      >
        <NavLink
          to={link1.path}
          className="mobile-link"
        >
          {link1.label}
        </NavLink>

        <NavLink
          to={link2.path}
          className="mobile-link"
        >
          {link2.label}
        </NavLink>

      </div>

    </div>
  );
}

export default MobileAccordion;