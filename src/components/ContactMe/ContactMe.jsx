import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from './ContactForm/ContactForm';

const ContactMe = () => {
  return (
    <section className="contact-container">
        <h5>Contact Me</h5>

        <div className="contact-content">
            <div style={{flex: 1}}>
            <ContactInfoCard
            iconUrl="./assets/images/MAIL.png"
            text="EMAIL"
            link="mailto:sanjoshsatsangi@gmail.com"
            />
            <ContactInfoCard
            iconUrl="./assets/images/CALL.png"
            text="Call"
            link="tel:+918218547973"
            />
            </div>
            <div style={{flex: 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default ContactMe;