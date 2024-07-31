import React from 'react'
import './ContactInfoCard.css'


const ContactInfoCard = ({iconUrl, text, link}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <img src={iconUrl} alt={text} />
            
        </div>
        <a href={link} target="_blank" rel="noopener noreferrer">
        <p>{text}</p>
        </a>
    </div>
  )
}

export default ContactInfoCard