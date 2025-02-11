import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';

const Navbar = ({ handleScrollTo, refs }) => {
    const [openMenu, setOpenMenu] = useState(false);
  
    const toggleMenu = () => {
      setOpenMenu(!openMenu);
    };
  
    const handleNavClick = (sectionRef) => {
      handleScrollTo(sectionRef);
      setOpenMenu(false);
    };
  
    return (
      <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} handleScrollTo={handleScrollTo} refs={refs} />
  
        <nav className="nav-wrapper">
          <div className="nav-content">
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
  
            <button className="menu-btn" onClick={toggleMenu}>
              <span className="material-symbols-outlined" style={{ fontSize: '1.8rem' }}>
                {openMenu ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </nav>
 </>
);
};

export default Navbar
