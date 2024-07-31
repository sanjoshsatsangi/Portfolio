import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu, handleScrollTo, refs }) => {
    const handleNavClick = (sectionRef) => {
      handleScrollTo(sectionRef);
      toggleMenu(); // Close the mobile menu after clicking a link
    };
  
    return (
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" alt="Logo" />
          <ul>
            <li>
              <a className="menu-item" onClick={() => handleNavClick(refs.heroRef)}>Home</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleNavClick(refs.skillsRef)}>Skills</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleNavClick(refs.projectsRef)}>Projects</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleNavClick(refs.workExperienceRef)}>Work Experience</a>
            </li>
            <li>
              <a className="menu-item" onClick={() => handleNavClick(refs.contactMeRef)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    
  )
}

export default MobileNav