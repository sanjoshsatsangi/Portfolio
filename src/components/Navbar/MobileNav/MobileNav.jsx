import React from 'react'
import './MobileNav.css'

const MobileNav = ({ isOpen, toggleMenu, handleScrollTo, refs }) => {
    const handleNavClick = (sectionRef) => {
      handleScrollTo(sectionRef);
      toggleMenu(); 
    };
  
    return (
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-menu-container" onClick={(e) => e.stopPropagation()}>
          <img className="logo" src="./assets/images/logo.png" alt="Logo" />
          <ul>
            <li>
              <a href="#home" className="menu-item" onClick={() => handleNavClick(refs.heroRef)}>Home</a>
            </li>
            <li>
              <a href="#skills" className="menu-item" onClick={() => handleNavClick(refs.skillsRef)}>Skills</a>
            </li>
            <li>
              <a href="#projects" className="menu-item" onClick={() => handleNavClick(refs.projectsRef)}>Projects</a>
            </li>
            <li>
              <a href="#work-experience" className="menu-item" onClick={() => handleNavClick(refs.workExperienceRef)}>Work Experience</a>
            </li>
            <li>
              <a href="#contact" className="menu-item" onClick={() => handleNavClick(refs.contactMeRef)}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    
  )
}

export default MobileNav
