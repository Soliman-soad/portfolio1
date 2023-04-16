import React, { useRef } from 'react';
import "./Contact.scss";
import { contacts } from '../../../Data';
import { socialIcons } from '../../../Data';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs.sendForm('service_jbd0pzb', 'template_prwifzq', form.current, 'PztZg3yc9PxhkqN0u')
      .then((result) => {
          console.log(result.text);
          

          
      }, (error) => {
          console.log(error.text);
      });
      toast("sent",{
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
      e.target.reset();
  };
  return (
    <div className="container" id="contact">
      <motion.div
        initial={{opacity: 0}}
        whileInView={{y: [-50, 0], opacity: 1}} 
        className="title"
      >
            <span>get in touch</span>
            <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [-150,0], opacity: 1 }}
          transition={{duration: 1}}
          className='contact_left_container'>
          <h3>Just Say Hi</h3>
          <p className='contact_text'>I like to meet new people and always tries to increase my network. So Send your opinion about my project and my profile.</p>
          {contacts.map(contact => {
            return (
              <div className='contact_left' key={contact.id}>
                <div className="icon">
                  {contact.icon}
                </div>
                <p>{ contact.infoText}</p>
              </div>
            )
          })}
          <div className="social_icons">
            {socialIcons.map(socialIcon => {
            return (
              <div key={socialIcon.id} >
                <a href={socialIcon?.value} target='_blank'>{socialIcon?.icon}</a>
              </div>
            )
          })}
          </div>
        </motion.div>
        <motion.div
          initial={{x: 0, opacity: 0}}
          whileInView={{ x: [150,0], opacity: 1 }}
          transition={{duration: 1}}
          className="contact_right"
        
        >
          <h3>Get In Touch</h3>
          <form ref={form} onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder='First Name' name="user_Fname"/>
            <input type="text" placeholder='Last name' name="user_Lname"/>
          </div>
          <div className="row">
            <input type="text" placeholder='Phone' name="user_phone"/>
            <input type="email" placeholder='Email' name="user_email"/>
          </div>
          <div className="row">
            <textarea placeholder='message' name="user_message"></textarea>
          </div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{duration: 0.3}}
          >
              <button className='btn' type="submit">Send</button>
          </motion.div>
          </form>
        </motion.div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Contact