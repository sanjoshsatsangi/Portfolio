import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-container">
        <div className="hero-content">
            <h2>Sanjosh Satsangi</h2>
            <p>
            A driven student pursuing Bachelor of Technology in Electronics and Communication at the esteemed Indian Institute of Information Technology (IIIT) Bhopal. 
            My academic journey is fueled by a profound passion for technology and a dedicated focus on honing my coding skills, particularly as a Java developer. 
            With a keen interest in software development, I am committed to leveraging my education to tackle complex challenges and contribute meaningfully to the field of technology.
            </p>
            <a href="https://drive.google.com/file/d/1ZWRdNB75TDPzwDCz1zaRMGMivInqEnfp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hire-me-button">Hire Me</a>
        </div>

        <div className="hero-img">
            <div>
                <div className='tech-icon'>
                <a href="https://www.linkedin.com/in/sanjosh-satsangi/" target="_blank" rel="noopener noreferrer" className='tech-icon'>
                <img src="./assets/images/LN.png" alt="" />
                </a>
            </div>
            <img src="./assets/images/new hero.png" alt="" />
            <div className="tech-icon">
            <a href="https://github.com/sanjoshsatsangi" target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/GHB.png" alt="New Logo" />
            </a>
          </div>

        </div>
        <div>
        <div className="tech-icon">
        <a href="https://www.youtube.com/@sanjoshsatsangi9427" target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/YT.png" alt="" />
            </a>
        </div>
        <div className="tech-icon">
        <a href="https://www.hackerrank.com/profile/sanjoshsatsangi" target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/HR.png" alt="" />
            </a>
        </div>
        <div className="tech-icon">
        <a href="https://leetcode.com/u/sanjoshsatsangi/" target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/LTC.png" alt="" />
            </a>
        </div>
        <div className="tech-icon">
        <a href="https://unstop.com/u/sanjoshsatsangi" target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/UNS.png" alt="" />
            </a>
        </div>
        <div className="tech-icon">
        <a href="https://www.naukri.com/ " target="_blank" rel="noopener noreferrer" className='tech-icon'>
            <img src="./assets/images/NKR.png" alt="" />
            </a>
            
        </div>
        
      </div>
      
    </div>  
    </section>

  )
}

export default Hero;
